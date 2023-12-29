// File: routes/generalRoutes.js
const express = require('express');
const Line = require('../Schemas/LineModel');
const SparklineArea = require('../Schemas/budget');
const StackedCustomSeriesModel = require('../Schemas/StackShcema');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const sparkline = await SparklineArea.find();
    console.log(sparkline);
    res.send(sparkline);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
    console.log(error);
  }
});

module.exports = router;

router.get('/', async (req, res) => {
  try {
    const stacked = await StackedCustomSeriesModel.find();
    res.json(stacked);
    // console.log(customers);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
    console.log(error);
  }
});
