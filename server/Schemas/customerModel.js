// File: models/customerModel.js
const mongoose = require('mongoose');
mongoose.set('debug', true);

const customerSchema = new mongoose.Schema(
  {
    CustomerID: { type: mongoose.Schema.Types.ObjectId },
    CustomerName: String,
    CustomerEmail: String,
    Status: String,
    StatusBg: String,
    Weeks: String,
    Budget: Number,
    Location: String,
    MobileNumber: String,
  },
  { collection: 'customers' }
);

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
