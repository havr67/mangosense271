const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
    unique: true, 
  }, 
  income: {
      type: String,
  }
}
);

module.exports = mongoose.model('user', userSchema);