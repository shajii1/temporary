const mongoose = require('mongoose');

// Define the schema for the Customer collection
const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  // Add other fields related to the customer here
});

// Define the Customer model
const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
