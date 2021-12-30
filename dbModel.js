import mongoose from "mongoose";

const tiktokSchema = mongoose.Schema({
    url: String,
    channel: String,
    desc: String,
    song: String,
    likes: String,
    messages: String,
    shares: String,
});

export default mongoose.model("tiktokVideos", tiktokSchema)