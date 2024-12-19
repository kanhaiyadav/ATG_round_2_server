import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

main().catch((err) => console.log(err));

async function main() {
    try {
        // await mongoose.connect("mongodb://localhost:27017/ATG_social_media");
        await mongoose.connect(
            `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.ic9en.mongodb.net/ATG`
        );
        console.log("Database connection successful...");
    } catch (err) {
        console.error("Problem connecting to the database", err); 
    }
}
