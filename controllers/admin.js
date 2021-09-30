const bcrypt = require("bcrypt");
const Admin = require("../models/admin");
const util = require("../utils");

exports.fetchAllAdmins = (req, res) => {
  Admin.find({
      isDeleted: false,
    })
    .then((admin) => res.json(admin))
    .catch((err) => res.send(err));
};

exports.fetchAdminById = (req, res) => {
  const id = req.params;
  Admin.findById(id)
    .then((admin) => res.json(admin))
    .catch((err) => res.send(err));
};

exports.createAdmin = async (req, res) => {
  const {
    password
  } = req.body;

  const hashedPassword = await bcrypt.hash(password, 8)

  const admin = new Admin({
    ...req.body,
    password: hashedPassword
  })
  admin.save().then((data) => res.json(data)).catch(err => res.send(err))
}