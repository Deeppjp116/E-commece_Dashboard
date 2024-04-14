// File: app.js or server.js
const express = require('express');
const mongoose = require('mongoose');
mongoose.set('debug', true);
const cors = require('cors');
require('dotenv').config();
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
const SparklineArea = require('./Schemas/Spakline');
const sparkline = require('./routes/sparkline');
const StackedCustomSeriesModel = require('./Schemas/StackShcema');

const app = express();
const port = process.env.PORT || 9999;
let dbURI;

app.use(express.json());
app.use(cors());
// app.set('view engine', 'ejs');

app.use('/auth0', authRoutes); // Use the authRoutes for paths starting with /auth
app.use('/general', generalRoutes); // Use the generalRoutes for paths starting with /general
app.use('/orders', order);
app.use('/customers', customers);
app.use('/products', products);
app.use('/employees', employes);
app.use('/line', lines);
app.use('/ecommerce', sparkline);

// MongoDB connection and other setup...

if (process.env.ENVIRONMENT === 'production') {
  dbURI = process.env.MONGODB_URI;
  console.log('Connects to the URI ');
} else {
  dbURI = process.env.MONGODB_LOCAL_URI;
  console.log('Connects to the Locally');
}

mongoose.connect(dbURI, {});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', async () => {
  console.log('Connected to MongoDB', dbURI);

  try {
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
