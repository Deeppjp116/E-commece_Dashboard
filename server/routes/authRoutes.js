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

module.exports = router;
