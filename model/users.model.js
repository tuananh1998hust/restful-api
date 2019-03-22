const mongoose = require('mongoose');

// create User Schema
const UserScheme = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: String,
  date: { type: Date, default: Date.now }
});

// create User
const User = mongoose.model('User', UserScheme);

module.exports = User;