const { models } = require('mongoose');

const { ObjectId } = require('mongoose').Types;

const employee = [
  {
    EmployeeID: new ObjectId(),
    EmployeeName: 'Rohan',
    Title: 'CA',
    HireDate: new Date('2003-01-12'),
    State: 'State',
    ReportsTo: 'Deep',
  },
  {
    EmployeeID: new ObjectId(),
    EmployeeName: 'Rohan Sharma',
    Title: 'Software Developer',
    HireDate: new Date('2020-02-15'),
    State: 'India',
    ReportsTo: 'Sneha Patel',
  },
  {
    EmployeeID: new ObjectId(),
    EmployeeName: 'Priya Verma',
    Title: 'Data Analyst',
    HireDate: new Date('2019-07-10'),
    State: 'India',
    ReportsTo: 'Raj Singh',
  },
  {
    EmployeeID: new ObjectId(),
    EmployeeName: 'Amit Kumar',
    Title: 'HR Manager',
    HireDate: new Date('2018-04-22'),
    State: 'India',
    ReportsTo: 'Sneha Patel',
  },
  {
    EmployeeID: new ObjectId(),
    EmployeeName: 'Neha Gupta',
    Title: 'Marketing Specialist',
    HireDate: new Date('2021-01-05'),
    State: 'India',
    ReportsTo: 'Raj Singh',
  },
  {
    EmployeeID: new ObjectId(),
    EmployeeName: 'Vikram Singh',
    Title: 'Finance Analyst',
    HireDate: new Date('2017-09-18'),
    State: 'India',
    ReportsTo: 'Sneha Patel',
  },

  {
    EmployeeID: new ObjectId(),
    EmployeeName: 'Sunita Patel',
    Title: 'UI/UX Designer',
    HireDate: new Date('2019-11-28'),
    State: 'India',
    ReportsTo: 'Amit Kumar',
  },
  {
    EmployeeID: new ObjectId(),
    EmployeeName: 'Kunal Kapoor',
    Title: 'Sales Executive',
    HireDate: new Date('2020-05-12'),
    State: 'India',
    ReportsTo: 'Neha Gupta',
  },
  {
    EmployeeID: new ObjectId(),
    EmployeeName: 'Ananya Singh',
    Title: 'Quality Assurance Engineer',
    HireDate: new Date('2021-03-08'),
    State: 'India',
    ReportsTo: 'Rohan Sharma',
  },
  {
    EmployeeID: new ObjectId(),
    EmployeeName: 'Harish Mehta',
    Title: 'Operations Manager',
    HireDate: new Date('2018-08-21'),
    State: 'India',
    ReportsTo: 'Amit Kumar',
  },
  {
    EmployeeID: new ObjectId(),
    EmployeeName: 'Mala Sinha',
    Title: 'Customer Support Specialist',
    HireDate: new Date('2016-12-03'),
    State: 'India',
    ReportsTo: 'Sneha Patel',
  },
  {
    EmployeeID: new ObjectId(),
    EmployeeName: 'Rohan Sharma',
    Title: 'Software Developer',
    HireDate: new Date('2020-02-15'),
    State: 'Maharashtra',
    ReportsTo: 'Sneha Patel',
  },
  {
    EmployeeID: new ObjectId(),
    EmployeeName: 'Priya Verma',
    Title: 'Data Analyst',
    HireDate: new Date('2019-07-10'),
    State: 'Gujarat',
    ReportsTo: 'Raj Singh',
  },
  {
    EmployeeID: new ObjectId(),
    EmployeeName: 'Amit Kumar',
    Title: 'HR Manager',
    HireDate: new Date('2018-04-22'),
    State: 'Karnataka',
    ReportsTo: 'Sneha Patel',
  },
  {
    EmployeeID: new ObjectId(),
    EmployeeName: 'Neha Gupta',
    Title: 'Marketing Specialist',
    HireDate: new Date('2021-01-05'),
    State: 'Delhi',
    ReportsTo: 'Raj Singh',
  },
  {
    EmployeeID: new ObjectId(),
    EmployeeName: 'Vikram Singh',
    Title: 'Finance Analyst',
    HireDate: new Date('2017-09-18'),
    State: 'Uttar Pradesh',
    ReportsTo: 'Sneha Patel',
  },
];

module.exports = employee;