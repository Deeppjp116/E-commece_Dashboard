const mongoose = require('mongoose');

const stackedCustomSeriesSchema = new mongoose.Schema({
  dataSource: [
    {
      x: String,
      y: Number,
    },
  ],
  xName: String,
  yName: String,
  name: String,
  type: String,
  background: String,
});

const StackedCustomSeriesModel = mongoose.model(
  'StackedCustomSeries',
  stackedCustomSeriesSchema
);

module.exports = StackedCustomSeriesModel;
