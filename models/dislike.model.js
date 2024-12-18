import mongoose from "mongoose";

const dislikeSchema = new mongoose.Schema({
    post: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Post"
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    }
});

const Dislike = mongoose.model("Dislike", dislikeSchema);

export default Dislike;