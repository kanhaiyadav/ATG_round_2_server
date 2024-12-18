import mongoose from "mongoose";

main().catch((err) => console.log(err));

async function main() {
    try {
        await mongoose.connect("mongodb://localhost:27017/ATG_social_media");
        console.log("Database connection successful...");
    } catch (err) {
        console.error("Problem connecting to the database", err); 
    }
}
