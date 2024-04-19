// File: routes/authRoutes.js
const express = require('express');
const router = express.Router();

const bcrypt = require('bcryptjs');
const User = require('../Schemas/user');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const googleapis = require('googleapis');

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Basic validation
    if (!username || !password) {
      return res.status(400).send('Username and password are required');
    }

    // User verification
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).send('Invalid username or password');
    }

    // Password verification using bcrypt
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).send('Invalid username or password');
    }

    // Successful login
    const token = jwt.sign(
      { username: user.username },
      process.env.JWT_SECRET, // Use environment variable for secret key
      {
        expiresIn: '1h', // Set expiration time
      }
    );

    res.json({ token }); // Return only the token in the response
  } catch (err) {
    console.error('Error during login: ', err);
    res.status(500).send('Login failed');
  }
});

module.exports = router;

router.post('/registration', async (req, res) => {
  const { username, password, email } = req.body;
  console.log(email);
  try {
    const user = new User({ username, password, email });
    await user.save();
    res.send(`Registration process completed for user: ${username}`);
  } catch (error) {
    if (error.code === 11000 && error.keyPattern && error.keyPattern.username) {
      // Duplicate key error, username already exists
      res
        .status(400)
        .send('Username is already taken. Please choose a different username.');
    } else {
      console.error(error);
      res.status(500).send('Registration failed');
    }
  }
});

router.post('/forget-password', async (req, res) => {
  const { OTP, recipient_email } = req.body;
  console.log(OTP, recipient_email);

  try {
    const user = await User.findOne({ email: recipient_email });
    if (!user) {
      return res.status(400).json({ message: 'Username not found' });
    }
    const OAuth2Client = new googleapis.auth.OAuth2({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    });

    await OAuth2Client.refreshAccessToken();

    // Configure email transporter (replace with your email service settings)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'deeppjp1656@gmail.com',
        accessToken: OAuth2Client.credentials.access_token,
      },
    });
    const mailOptions = {
      from: 'deeppjp1656@gmail.com',
      to: user.email,
      subject: 'Password Reset Link',
      text: `You requested a password reset for your account. Please click on the following link to set a new password:

     here is the OTP for reset password ${OTP}

      If you did not request a password reset, please ignore this email and your password will remain unchanged.`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: 'Error sending email' });
      }

      console.log('Email sent: %s', info);
      res
        .status(200)
        .json({ message: 'Password reset link sent to your email' });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
