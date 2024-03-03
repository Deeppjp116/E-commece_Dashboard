// File: routes/generalRoutes.js
const express = require('express');
const router = express.Router();
const Customer = require('../Schemas/customerModel');


router.get('/', async (req, res) => {
  try {
    const customers = await Customer.find();
    console.log(customers);
    res.json(customers);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
