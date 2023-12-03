// File: app.js or server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const generalRoutes = require('./routes/generalRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use('/auth0', authRoutes); // Use the authRoutes for paths starting with /auth
app.use('/general', generalRoutes); // Use the generalRoutes for paths starting with /general

// MongoDB connection and other setup...

async function connectToMongoDB() {
  try {
    await mongoose.connect('mongodb://localhost:27017/e-commerceData');
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Error connecting to MongoDB: ', err);
  }
}

connectToMongoDB();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
