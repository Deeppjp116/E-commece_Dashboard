// File: routes/generalRoutes.js
const express = require('express');
const router = express.Router();
const Customer = require('../Schemas/customerModel');
const BillingModel = require('../Schemas/billingModel');
const ProductModel = require('../Schemas/ProductModel');

router.get('/', async (req, res) => {
  try {
    const products = await ProductModel.find();
    console.log(products);
    res.send(products);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
    console.log(error);
  }
});

module.exports = router;
