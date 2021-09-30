const bcrypt = require('bcrypt');
const Admins = require('../models/admin');

const {
  createToken
} = require('../utils/index');

exports.singIn = async (req, res) => {
  const {
    password,
    phone,
    role
  } = req.body;
  try {
    const admin = await Admins.findOne({
      phone: phone.trim()
    });

    const {
      password: hashedPassword,
      _id
    } = admin;
    const isPasswordCorrect = await bcrypt.compare(password, hashPassword);
    if (isPasswordCorrect) {
      const token = createToken({
        _id,
        role
      });
    } else {
      res.status(422).json({
        msg: "Phone number or password is wrong",
        success: false
      });
    }


  } catch (err) {
    res.status(422).json({
      msg: err.message,
      success: false
    });
  }
}