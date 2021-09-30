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