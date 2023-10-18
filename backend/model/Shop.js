const mongoose = require('mongoose');

const shopSchema = new mongoose.Schema({
  shopid: {
    type: Number,
    unique: true,
  },
  shopname: {
    type: String,
    required: true,
  },
  shopowner: {
    type: String,
    required: true,
  },
  shop_sales: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Assuming you have a "User" model for salespersons
    },
  ],
  // Add other fields related to the shop here
});

const Shop = mongoose.model('Shop', shopSchema);

module.exports = Shop;
