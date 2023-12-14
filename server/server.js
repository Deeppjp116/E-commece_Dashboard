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

const app = express();
const port = process.env.PORT || 9999;

app.use(express.json());
app.use(cors());

app.use('/auth0', authRoutes); // Use the authRoutes for paths starting with /auth
app.use('/general', generalRoutes); // Use the generalRoutes for paths starting with /general
app.use('/orders', order);
app.use('/customers', customers);
app.use('/products', products);

// MongoDB connection and other setup...
mongoose.connect('mongodb://localhost:27017/e-commerceData', {});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', async () => {
  console.log('Connected to MongoDB');

  try {
    // save the ProductData in the Database

    // const savedProducts = await ProductModel.insertMany(productData);
    // console.log('Saved products:', savedProducts);
    // console.log('Dummy product data saved successfully.');

    // // Save orders
    // const savedOrders = await Order.insertMany(orderData);
    // console.log('Saved orders:', savedOrders);

    const savedCustomers = await Customer.insertMany(customerdata);
    // console.log('Saved customers:', savedCustomers);

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
