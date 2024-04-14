const User = require('../Schemas/user');

async function handelUserSingUp(req, res) {
  const { username, password } = req.body;
  const user = await User.create({ username, password });
  return res.render('singnUp');
}

module.exports = { handelUserSingUp};
