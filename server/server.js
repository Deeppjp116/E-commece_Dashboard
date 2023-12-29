// File: app.js or server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const generalRoutes = require('./routes/generalRoutes');
const order = require('./routes/order');
const orderData = require('./Data/order');
const customers = require('./routes/customers');
const Customer = require('./Schemas/customerModel');
const billing = require('./Data/Billing');
const products = require('./routes/products');
const Order = require('./Schemas/oredrModel');
const BillingModel = require('./Schemas/billingModel');
const productData = require('./Data/product');
const ProductModel = require('./Schemas/ProductModel');
const customerdata = require('./Data/cutomer');
const employessdata = require('./Data/employe');
const employes = require('./routes/employes');
const Employee = require('./Schemas/employeeModel');
const Line = require('./Schemas/LineModel');
const linedata = require('./Data/lineData');
const lines = require('./routes/line');
const SparklineArea = require('./Schemas/budget');
const sparkline = require('./routes/sparkline');
const StackedCustomSeriesModel = require('./Schemas/StackShcema');

const app = express();
const port = process.env.PORT || 9999;

app.use(express.json());
app.use(cors());

app.use('/auth0', authRoutes); // Use the authRoutes for paths starting with /auth
app.use('/general', generalRoutes); // Use the generalRoutes for paths starting with /general
app.use('/orders', order);
app.use('/customers', customers);
app.use('/products', products);
app.use('/employees', employes);
app.use('/line', lines);
app.use('/ecommerce', sparkline);

// MongoDB connection and other setup...
mongoose.connect('mongodb://localhost:27017/e-commerceData', {});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', async () => {
  console.log('Connected to MongoDB');

  try {
    const stackedCustomSeries = {
      dataSource: [
        { x: 'Jan', y: 111.1 },
        { x: 'Feb', y: 127.3 },
        { x: 'Mar', y: 143.4 },
        { x: 'Apr', y: 159.9 },
        { x: 'May', y: 159.9 },
        { x: 'Jun', y: 159.9 },
        { x: 'July', y: 159.9 },
      ],
      xName: 'x',
      yName: 'y',
      name: 'Budget',
      type: 'StackingColumn',
      background: 'blue',
    };

    // const stakeddata = new StackedCustomSeriesModel(stackedCustomSeries);

    // stakeddata.save();

    // const dataPoints = [
    //   { x: 1, xval: '100', y: 200, yval: '10000' },
    //   { x: 2, xval: '200', y: 600, yval: '20000' },
    //   { x: 3, xval: '300', y: 400, yval: '30000' },
    //   { x: 4, xval: '400', y: 500, yval: '40000' },
    //   { x: 5, xval: '500', y: 1000, yval: '50000' },
    // ];

    // for (const dataPoint of dataPoints) {
    //   const newDataPoint = new SparklineArea(dataPoint);
    //   await newDataPoint.save();
    // }
    // save the ProductData in the Database

    // const savedProducts = await ProductModel.insertMany(productData);
    // console.log('Saved products:', savedProducts);
    // console.log('Dummy product data saved successfully.');

    // // Save orders
    // const savedOrders = await Order.insertMany(orderData);
    // console.log('Saved orders:', savedOrders);

    // const savedCustomers = await Customer.insertMany(customerdata);
    // console.log('Saved customers:', savedCustomers);

    // const savedEmployyesdata = await Employee.insertMany(employessdata);
    // console.log('Saved Employes:', savedEmployyesdata);

    // const savedlinedata = await Line.insertMany(linedata);
    // console.log('Saved LineData:', savedlinedata);

    console.log('Data saved successfully.');
  } catch (error) {
    console.error('Error saving data:', error);
  }

  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      console.log('MongoDB connection closed due to application termination');
      process.exit(0);
    });
  });
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
  console.log(`Server is running on port ${port}`);
});
