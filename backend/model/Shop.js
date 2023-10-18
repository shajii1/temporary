const mongoose = require('mongoose');

const shopSchema = new mongoose.Schema({
  shopId: {
    type: Number,
    unique: true,
    required: true,
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

// Define a function to generate the next unique "shopId"
const getNextShopId = async () => {
  // Find the maximum existing shopId
  const maxShop = await Shop.findOne().sort({ shopId: -1 });

  // Increment the maximum by 1, or start from 1 if no records exist
  const nextShopId = maxShop ? maxShop.shopId + 1 : 1;

  return nextShopId;
};

// Create a pre-save hook to set the "shopId" before saving a new shop
shopSchema.pre('save', async function (next) {
  if (!this.shopId) {
    this.shopId = await getNextShopId();
  }
  next();
});

const Shop = mongoose.model('Shop', shopSchema);

module.exports = Shop;
