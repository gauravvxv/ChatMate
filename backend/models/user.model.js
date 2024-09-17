const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true, minLength: 6 },
    gender: { type: String, required: true, enum: ["male", "female"] },
    profilePic: { type: String, default: "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg" }

})

const User = mongoose.model("User" , userSchema);

module.exports = User

