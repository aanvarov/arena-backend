const mongoose = require('mongoose')
const {
  Schema
} = mongoose;

const adminSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  name: String,
  dob: String,
  phone: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: 'admin'
  },
  createdAt: String,
  isDeleted: {
    type: Boolean,
    default: false
  }
})

const Admin = mongoose.model('Admins', adminSchema);

module.exports = Admin