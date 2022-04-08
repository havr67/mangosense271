const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  option: {
    type: String,
    required: true,
  },
  recipient: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  comments: {
    type: String,
  }, 
  confirmations: {
    type: Boolean,
    default: false,
},
}
);

module.exports = mongoose.model('order', orderSchema);