const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler");
const { create } = require("../models/userModel");

const createProduct = asyncHandler(async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    throw new Error(error);
  }
});
const getaProduct = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const getProducts = await Product.findById(id);
    res.status(200).json(getProducts);
  } catch (error) {
    throw new Error(error);
  }
});

const getAllProduct = asyncHandler(async (req, res) => {
  try {
    const getProducts = await Product.find();
    res.status(200).json(getProducts);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = { createProduct, getaProduct, getAllProduct };
