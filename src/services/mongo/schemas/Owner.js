const mongoose = require('mongoose');

const OwnerSchema = new mongoose.Schema({
  name: {
    type: String,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.models.Owner || mongoose.model('Owner', OwnerSchema)
