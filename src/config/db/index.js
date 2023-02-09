const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose.connect('mongodb+srv://nvnghiep:WKvr7MStGqpTmyQZ@cluster0.gm5t0gj.mongodb.net/nodejs?retryWrites=true&w=majority');
    console.log('connect successfully!')
  } catch (error) {
    console.log('connect fail!')
  }
}

module.exports = { connect }