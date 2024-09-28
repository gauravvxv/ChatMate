const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

 const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.SECRET, {
        expiresIn: "7d"
    })

    res.cookie("jwt", token, {
        httpOnly: true,
        secure: process.env.NODE_env === 'development', 
        sameSite: 'None', 
        maxAge: 7 * 24 * 60 * 60 * 1000,  
    })
}

module.exports = generateTokenAndSetCookie;