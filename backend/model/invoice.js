const mongoose = require('mongoose');

// Define the schema for the Invoice collection
const invoiceSchema = new mongoose.Schema({
  invoiceNumber: {
    type: String,
    unique: true,
    required: true,
  },
  invoiceDate: {
    type: Date,
    required: true,
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer', // Assuming you have a "Customer" model
    required: true,
  },
  items: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product', // Assuming you have a "Product" model
      },
      quantity: {
        type: Number,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
    },
  ],
  totalAmount: {
    type: Number,
    required: true,
  },
  // Add other fields related to the invoice here, e.g., payment status, due date, etc.
});

// Define the Invoice model
const Invoice = mongoose.model('Invoice', invoiceSchema);

module.exports = Invoice;
