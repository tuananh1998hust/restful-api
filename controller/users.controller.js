// User Model
const User = require('../model/users.model');

module.exports.getUsers = (req, res) => {
  User
    .find()
    .sort({ date: -1 })
    .then((users) => res.json(users));
}

module.exports.postUser = (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email
  });

  newUser
    .save()
    .then(user => res.json(user))
    .catch(err => console.log(err));
}

module.exports.deleteUser = (req, res) => {
  User
    .findById(req.params.id)
    .then(user => user.remove().then(() => res.json({ success: true })))
    .catch(() => res.status(404).json({ success: false }));
}