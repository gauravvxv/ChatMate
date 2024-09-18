const express = require("express");
const router =  express.Router();
const protectRoute = require("../middleware/protectRouter");
const getUSersForSidebar = require("../controllers/user.controller")

router.get("/",protectRoute, getUSersForSidebar)

module.exports  = router