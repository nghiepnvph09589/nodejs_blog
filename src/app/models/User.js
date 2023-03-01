const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
  // avatarUrl: { type: String },
  userName: { type: String },
  phoneNumber: { type: String },
  password: { type: String },
}, {
  timestamps: true,
});

module.exports = mongoose.model('User', User)