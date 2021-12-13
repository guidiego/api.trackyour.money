const mongoose = require('mongoose');

const AccountSchema = new mongoose.Schema({
  kind: {
    type: String,
    enum: ["account", "wallet"],
    required: true,
    default: "account",
  },
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "Owner",
    required: true,
    index: true,
  },
  name: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.models.Account || mongoose.model('Account', AccountSchema)
