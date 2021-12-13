const mongoose = require('mongoose');

const EntrySchema = new mongoose.Schema({
  kind: {
    type: String,
    enum: ["add", "remove"],
    required: true,
  },
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "Owner",
    required: true,
    index: true,
  },
  value: {
    type: Number,
    required: true,
    default: 0,
  },
  budget: {
    type: mongoose.Types.ObjectId,
    ref: 'Budget',
    index: true,
  },
  account: {
    type: mongoose.Types.ObjectId,
    ref: 'Account',
    index: true,
  },
  description: {
    type: String,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.models.Entry || mongoose.model('Entry', EntrySchema)
