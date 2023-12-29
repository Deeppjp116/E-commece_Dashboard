const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const linemodel = new Schema({
  year: { type: Number, require: true },
  rate: { type: Number, require: true },
  gdp: { type: Number, require: true },
  state: { type: String, require: true },
  growth: { type: Number, require: true },
});

const Line = mongoose.model('line', linemodel);

module.exports = Line;
