const express = require("express");
const router = express.Router();
const {
  createProduct,
  getaProduct,
  getAllProduct,
} = require("../controller/productCtrl");

router.post("/", createProduct);
router.get("/getaproduct/:id", getaProduct);
router.get("/getallproduct", getAllProduct);

module.exports = router;
