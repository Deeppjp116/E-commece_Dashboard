// File: routes/generalRoutes.js
const express = require('express');
const router = express.Router();
const Customer = require('../Schemas/customerModel');

router.get('/', async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
    console.log(customers);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
    console.log(error);
  }
});

module.exports = router;
