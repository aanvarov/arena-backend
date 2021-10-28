const mongoose = require("mongoose");
const { Schema } = mongoose;

const adminSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: String,
  dob: String,
  phone: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "admin",
  },
  createdAt: {
    type: String,
    default: new Date(),
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  club: {
    type: Schema.Types.ObjectId,
    ref: "Club",
  },
});

const Admin = mongoose.model("Admins", adminSchema);

module.exports = Admin;
