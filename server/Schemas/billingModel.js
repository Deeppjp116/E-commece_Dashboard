const mongoose = require('mongoose');

const billingSchema = new mongoose.Schema({
  CustomerID: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"Customer",
    required: true,
  },
  CustomerName: {
    type: String,
    required: true,
  },
  CustomerEmail: {
    type: String,
    required: true,
  },
  MobileNumber: {
    type: Number,
    required: true,
  },
  bill: {
    type: Number,
    required: true,
  },
  Location: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const BillingModel = mongoose.model('Billing', billingSchema);

module.exports = BillingModel;
