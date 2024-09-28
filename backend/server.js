const express = require("express");
const cookieParser = require("cookie-parser")
const {app, server} = require("./socket/socket")
const dotenv = require("dotenv");

const router = require("./routes/auth.route")
const messageRoutes  = require("./routes/message.route")
const userRoutes  = require("./routes/user.route")
const cors = require("cors");


const connectMongodb = require("./config/db");

const port = process.env.PORT;

dotenv.config()

app.use(cors({
origin: 'https://chatmate-dusky.vercel.app',
credentials: true,
}))
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth/", router);
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes)


server.listen(port, () => {
    try {
        connectMongodb();
        console.log(`Port ${port} is running`)
    } catch (error) {
        console.log(error);
    }
})