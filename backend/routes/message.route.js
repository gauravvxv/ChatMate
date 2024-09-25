const express = require("express");
const {sendMessage , getMessage} = require("../controllers/message.controller")
const protectRouter = require("../middleware/protectRouter")
const router = express.Router();

router.get("/:id", protectRouter , getMessage)
router.post("/send/:id", protectRouter , sendMessage)

module.exports = router