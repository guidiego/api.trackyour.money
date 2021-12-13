const mongoose = require('mongoose');

const BudgetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  total: {
    type: Number,
    default: 0,
  },
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "Owner",
    required: true,
    index: true,
  },
  recurrent: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.models.Budget || mongoose.model('Budget', BudgetSchema)
