const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
  name: { type: String },
  price: { type: String },
  id: { type: String },
});

module.exports = mongoose.model('Product', Product)