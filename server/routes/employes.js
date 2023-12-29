// File: routes/generalRoutes.js
const express = require('express');
const Employee = require('../Schemas/employeeModel');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const employeesdata = await Employee.find();
    console.log(employeesdata);
    res.send(employeesdata);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
    console.log(error);
  }
});

module.exports = router;
