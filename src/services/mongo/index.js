const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));

const models = {
  Account: require('./schemas/Account'),
  Budget: require('./schemas/Budget'),
  Entry: require('./schemas/Entry'),
};

exports.account = require('./interface/account')(models);
exports.budget = require('./interface/budget')(models);
exports.entry = require('./interface/entry')(models);
