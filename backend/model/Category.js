const mongoose = require('mongoose');

// Define the schema for the Categories collection
const categorySchema = new mongoose.Schema({
  categoryid: {
    type: Number,
    unique: true,
  },
  categoryname: {
    type: String,
    required: true,
  },
  // Add other fields related to the category here
});

// Define the Category model
const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
