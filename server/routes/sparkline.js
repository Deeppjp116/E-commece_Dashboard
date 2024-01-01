// File: routes/generalRoutes.js
const express = require('express');
const Line = require('../Schemas/LineModel');
const SparklineArea = require('../Schemas/Spakline');
const StackedCustomSeriesModel = require('../Schemas/StackShcema');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const sparkline = await SparklineArea.find();
    const stacked = await StackedCustomSeriesModel.find();
    // Send both sets of data in a single response
    res.send({
      sparkline: sparkline,
      stacked: stacked,
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
    console.log(error);
  }
});

module.exports = router;
