// File: routes/generalRoutes.js
const mongoose = require('mongoose');
const express = require('express');
const Product = require('../Schemas/ProductModel');
const router = express.Router();
const OrderModel = require('../Schemas/oredrModel');

router.get('/', async (req, res) => {
  // Customer: 'Carter',
  //   OrderModel: new ObjectId('657c1278d1da6ecf188e056c'),
  //   AmountTotal: 120.75,
  //   Location: 'New York',
  //   OrderModelStatus: 'Shipped',
  //   StatusBg: '#800000',
  //   products: [
  //     new ObjectId('657c1278d1da6ecf188e050e'),
  //     new ObjectId('657c1278d1da6ecf188e050f'),
  //     new ObjectId('657c1278d1da6ecf188e0510')
  //   ],
  //   _id: new ObjectId('657c1278d1da6ecf188e05d7'),
  //   __v: 0
  // }
  try {
    const OrderModeldata = await OrderModel.find();
    // res.send(OrderModeldata);
    // console.log(OrderModeldata);

    const productdata = await OrderModel.aggregate([
      {
        $lookup: {
          from: 'products',
          localField: 'products',
          foreignField: 'ProductId',
          as: 'products',
        },
      },
    ]);
    console.log(productdata);
    res.send(productdata);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
