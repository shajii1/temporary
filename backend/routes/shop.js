const express = require('express');
const router = express.Router();
const Shop = require('../model/Shop'); // Import your Shop model

// Create a new shop (POST)

router.post('/shops', async (req, res) => {
    try {
      const shopData = req.body;
      console.log(shopData);
      // Ensure that the shopId field is set and not null
      if (shopData.shopd === null || shopData.shopId === undefined) {
        res.status(400).json({ error: 'Shop ID cannot be null' });
        return;
      }
      console.log(shopData);
      // Validate that the provided shopId doesn't already exist in the collection
      const existingShop = await Shop.findOne({ shopId: shopData.shopId });
      if (existingShop) {
        console.log(existingShop)
        res.status(400).json({ error: 'Shop ID is not unique' });
        return;
      }
      console.log(shopData);
      const newShop = await Shop.create(shopData);
      console.log(shopData);
      res.status(200).json(newShop);
    } catch (err) {
        console.log(err)
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  
  
  
  
  
  
// Get a list of all shops (GET)
router.get('/shops', async (req, res) => {
  try {
    const shops = await Shop.find({});
    res.json(shops);
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get details of a specific shop (GET)
router.get('/shops/:shopId', async (req, res) => {
    try {
      const shopId = parseInt(req.params.shopId); // Parse the shopId as a number
      console.log(shopId);
  
      // Validate that the provided shopId is a number
      if (isNaN(shopId) || shopId < 1) {
        res.status(400).json({ error: 'Invalid shop ID' });
        return;
      }
  
      const shop = await Shop.findOne({ shopId: shopId });
  
      if (!shop) {
        res.status(404).json({ error: 'Shop not found' });
      } else {
        res.json(shop);
      }
    } catch (err) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

// Update a shop (PUT)
router.put('/shops/:shopId', async (req, res) => {
  try {
    const updatedShop = await Shop.findByIdAndUpdate(
      req.params.shopId,
      req.body,
      { new: true }
    );
    if (!updatedShop) {
      res.status(404).json({ error: 'Shop not found' });
    } else {
      res.json(updatedShop);
    }
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete a shop (DELETE)
router.delete('/shops/:shopId', async (req, res) => {
  try {
    const deletedShop = await Shop.findByIdAndRemove(req.params.shopId);
    if (!deletedShop) {
      res.status(404).json({ error: 'Shop not found' });
    } else {
      res.json(deletedShop);
    }
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
