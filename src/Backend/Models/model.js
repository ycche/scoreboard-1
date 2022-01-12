const mongoose = require('mongoose');

const Schema = mongoose.Schema({
  firstName : {type : String, required: true},
  email : {type: String, required: true},
  type : {type: String, required: true},
  description: {type: String, required: true},
}, {
  timestamps: true,
})

const Inquiry = mongoose.model('Inquiry', Schema);

module.exports = Inquiry;
