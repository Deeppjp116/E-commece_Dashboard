const mongoose = require('mongoose');
const { ObjectId } = require('mongoose').Types;
// Assuming ObjectId is imported or defined somewhere

const productSchema = new mongoose.Schema({
  ProductId: { type: mongoose.Schema.Types.ObjectId, default: new ObjectId() }, // Automatically generated ObjectId
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  rating: { type: Number, required: true },
  supply: { type: Number, required: true },
});

const ProductModel = mongoose.model('Product', productSchema);

module.exports = ProductModel;
