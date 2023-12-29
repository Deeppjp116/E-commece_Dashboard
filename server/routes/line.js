// File: routes/generalRoutes.js
const express = require('express');
const Line = require('../Schemas/LineModel');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const linedata = await Line.find();
    console.log(linedata);
    res.send(linedata);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
    console.log(error);
  }
});

module.exports = router;
