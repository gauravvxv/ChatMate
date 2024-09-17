const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

 const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.SECRET, {
        expiresIn: "15d"
    })

    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict"

    })
}

module.exports = generateTokenAndSetCookie;