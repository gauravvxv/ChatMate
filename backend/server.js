const express = require("express");
const app = express();
const dotenv = require("dotenv");
const router = require("./routes/auth.route")
const connectMongodb = require("./config/db");

const port = process.env.PORT;

dotenv.config()

app.use(express.json());

app.get("/", (req, res) => {
    res.send("API START");
})

app.use("/api/auth/", router);

app.listen(port, () => {
    try {
        connectMongodb();
        console.log(`Port ${port} is running`)
    } catch (error) {
        console.log(error);
    }
})