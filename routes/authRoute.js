const express = require("express");
const router = express.Router();
const {
  createUser,
  loginUser,
  getAllUser,
  getaUser,
  deleteaUser,
  updateaUser,
} = require("../controller/userControl");

router.post("/register", createUser);
router.post("/login", loginUser);
router.get("/getallusers", getAllUser);
router.get("/:id", getaUser);
router.delete("/:id", deleteaUser);
router.put("/:id", updateaUser);
module.exports = router;
