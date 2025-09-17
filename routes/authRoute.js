const express = require("express");
const router = express.Router();
const {
  createUser,
  loginUser,
  getAllUser,
  getaUser,
  deleteaUser,
  updateaUser,
  blockUser,
  unblockUser,
  handleRefreshToken,
} = require("../controller/userControl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
router.get("/refresh", handleRefreshToken);
router.post("/register", createUser);
router.post("/login", loginUser);
router.get("/getallusers", getAllUser);
router.get("/:id", getaUser);
router.delete("/:id", deleteaUser);
//router.put("/:id", updateaUser);
router.put("/edituser", authMiddleware, updateaUser);
router.put("/blockuser/:id", authMiddleware, isAdmin, blockUser);
router.put("/unblockuser/:id", authMiddleware, isAdmin, unblockUser);

module.exports = router;
