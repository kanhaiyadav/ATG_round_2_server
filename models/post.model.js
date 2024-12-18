import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    body: {
        type: String,
        required: true,
        trim: true
    },
    tags: [
        {
            type: String,
            trim: true
        }
    ],
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Like"
        }
    ],
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
});


const Post = mongoose.model("Post", postSchema);

export default Post;
