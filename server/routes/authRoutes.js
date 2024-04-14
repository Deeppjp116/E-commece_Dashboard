// File: routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { handelUserSingUp } = require('../controllers/user');
const User = require('../Schemas/user');
const jwt = require('jsonwebtoken');

router.post('/login', async (req, res) => {
  const { username, password, token } = req.body;
  console.log(token);
  console.log('in the longin rought');
  // console.log(password);
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

router.post('/registration', handelUserSingUp);

module.exports = router;
