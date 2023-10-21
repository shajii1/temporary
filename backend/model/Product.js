const mongoose = require('mongoose');

// Define the schema for the Product collection
const productSchema = new mongoose.Schema({
  productId: {
    type: Number,
    unique: true,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  productDescription: {
    type: String,
  },
  productPrice: {
    type: Number,
    required: true,
  },
  productCategoriesId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category', // Assuming you have a "Category" model
    required: true,
  },
  productCount: {
    type: Number,
    default: 0,
  },
  shopId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Shop', // Assuming you have a "Shop" model
    required: true,
  },
  // Add other fields related to the product here
});

// Define the Product model
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
