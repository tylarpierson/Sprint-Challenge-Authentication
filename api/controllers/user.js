const User = require('../models/userModels');
const bcrypt = require('bcrypt');

const createUser = (req, res) => {
  const { username, password } = req.body;
  // create user takes in the username and password and saves a user.
  // our pre save hook should kick in here saving this user to the DB with an encrypted password.
  User.findOne({ username })
  .then(user => {
    if (user) {
      user.checkPassword(password).then(isPassword => {
        if (isPassword) {
          req.username = user.username;
          res.send('Welcome');
        } else {
          res.status(401).send('invalid password');
        }
      });
    } else {
      res.status(401).send('invalid username');
    }
  })
  .catch(err => res.send(err));
};

module.exports = {
  createUser
};
