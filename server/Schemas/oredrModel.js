const mongoose = require('mongoose');
const { Schema, ObjectId } = require('mongoose');

const orderSchema = new mongoose.Schema({
  Customer: { type: String, required: true },
  Order: { type: mongoose.Schema.Types.ObjectId },
  AmountTotal: { type: Number, required: true },
  Location: { type: String, required: true },
  OrderStatus: { type: String, required: true },
  StatusBg: { type: String, required: true },
  products: [{ type: mongoose.Schema.Types.ObjectId, default: new ObjectId() }],
});

const OrderModel = mongoose.model('Order', orderSchema);

module.exports = OrderModel;
