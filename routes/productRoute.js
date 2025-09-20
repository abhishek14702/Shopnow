const express = require("express");
const router = express.Router();
const {
  createProduct,
  getaProduct,
  getAllProduct,
  updateProduct,
  deleteProduct,
} = require("../controller/productCtrl");
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleware");

router.post("/", authMiddleware, isAdmin, createProduct);
router.get("/getaproduct", getaProduct);
router.get("/getallproduct", getAllProduct);
router.post("/updateproduct/:id", authMiddleware, isAdmin, updateProduct);
router.delete("/deleteproduct/:id", isAdmin, deleteProduct);

module.exports = router;
