import User from "../models/user.model";
import jwt from 'jsonwebtoken';

export const signUp = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).send("User already exists");
        }
        const newUser = new User(req.body);
        await newUser.save();
        res.status(200).json({
            success: true,
            message: "User created successfully",
            data: {
                user: newUser,
            }
        })
    }
    catch (error) {
        res.status(500).send(error.message);
    }
};

export const signIn = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (user) {
            if (user.password === req.body.password) {
                return res.status(200).json({
                    success: true,
                    message: "User signed in successfully",
                    data: {
                        user,
                        token: jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" }),
                    }
                });
            }
            return res.status(400).send("Invalid credentials");
        } else {
            return res.status(400).send("User not found");
        }
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
};