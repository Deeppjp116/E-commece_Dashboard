// File: routes/generalRoutes.js
const express = require('express');
const Order = require('../Schemas/oredrModel');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    // Save orders with references to customers
    const orders = await Order.find();
    res.json(orders);
    console.log(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
