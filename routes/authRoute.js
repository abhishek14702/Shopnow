const express = require("express");
const router = express.Router();
const { createUser, loginUser } = require("../controller/userControl");

router.post("/register", createUser);
router.post("/login", loginUser);
module.exports = router;
