const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectMongodb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Database is connected to the server");
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectMongodb