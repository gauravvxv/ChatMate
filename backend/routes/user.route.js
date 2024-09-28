const express = require("express");
const router = express.Router();
const protectRouter = require("../middleware/protectRouter");
const getUsersForSidebar = require("../controllers/user.controller")

router.get("/", protectRouter, getUsersForSidebar)

module.exports = router;