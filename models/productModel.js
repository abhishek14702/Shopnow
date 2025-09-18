const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  quantity: {
    type: Number,
    required: true,
  },
  images: {
    type: Array,
  },
  colors: {
    type: String,
    enum: ["Black", "Brown", "Silver", "White", "Blue"],
  },
  ratings: [
    {
      star: Number,
      postedby: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    },
  ],
  tags: {
    type: Array,
    brand: {
      type: String,
      enum: ["Apple", "Samsung", "Microsoft", "Lenovo", "ASUS"],
    },
    timestamps: true,
  },
});

//Export the model
module.exports = mongoose.model("Product", productSchema);
