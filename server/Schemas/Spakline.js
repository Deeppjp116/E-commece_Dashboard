const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Mongoose schema
const sparklineAreaSchema = new Schema({
  x: Number,
  xval: String,
  y: Number,
  yval: String,
});

// Create a Mongoose model using the schema
const SparklineArea = mongoose.model('SparklineArea', sparklineAreaSchema);

// Export the model
module.exports = SparklineArea;
