// File: routes/authRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../Schemas/user');
const jwt = require('jsonwebtoken');

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username, password });

    if (user) {
      const token = jwt.sign(
        { username: user.username },
        'fifinfiwnefnifrinfi32ifnweifniwe',
        {
          expiresIn: '1h',
        }
      );
      res.json({ user, token });
    } else {
      res.status(401).send('Invalid username or password');
    }
  } catch (err) {
    console.error('Error during login: ', err);
    res.status(500).send('Login failed');
  }
});

router.post('/registration', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = new User({ username, password });
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

router.post('/', async (req, res) => {
  const { username } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: 'Username not found' });
    }

    const token = await user.createPasswordResetToken();

    // Configure email transporter (replace with your email service settings)
    const transporter = nodemailer.createTransport({
      // ... (e.g., SMTP service details)
    });

    const mailOptions = {
      from: 'your_email@example.com',
      to: user.email,
      subject: 'Password Reset Link',
      text: `You requested a password reset for your account. Please click on the following link to set a new password:

      http://localhost:3000/reset-password/${token}

      If you did not request a password reset, please ignore this email and your password will remain unchanged.`,
    };

    await transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: 'Error sending email' });
      }

      console.log('Email sent: %s', info.response);
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
