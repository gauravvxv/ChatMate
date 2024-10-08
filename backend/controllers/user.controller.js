const User = require("../models/user.model")

const getUsersForSidebar = async(req,res)=> {
    try {

        const loggedInUSerId = req.user._id;
        
        const allUsers = await User.find({_id:{ $ne: loggedInUSerId}}).select("-password");

        res.status(200).json(allUsers)
        
    } catch (error) {
        console.log("error in user controller" , error.message)
        res.status(500).json({ error: "Internal server error" }) 
    }
}

module.exports = getUsersForSidebar;