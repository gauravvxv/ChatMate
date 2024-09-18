const express = require("express");
const cookieParser = require("cookie-parser")
const app = express();
const dotenv = require("dotenv");

const router = require("./routes/auth.route")
const messageRoutes  = require("./routes/message.route")
const userRoutes  = require("./routes/user.route")


const connectMongodb = require("./config/db");

const port = process.env.PORT;

dotenv.config()

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth/", router);
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes)


app.listen(port, () => {
    try {
        connectMongodb();
        console.log(`Port ${port} is running`)
    } catch (error) {
        console.log(error);
    }
})