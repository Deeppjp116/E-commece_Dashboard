const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  EmployeeID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  EmployeeName: {
    type: String,
    required: true,
  },
  Title: {
    type: String,
    required: true,
  },
  HireDate: {
    type: Date,
    required: true,
  },
  State: {
    type: String,
    required: true,
  },
  ReportsTo: {
    type: String,
    required: true,
  },
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
