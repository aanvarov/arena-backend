const bcrypt = require("bcrypt");
const Admins = require("../models/admin");
const Clubs = require("../models/club");

const { createToken } = require("../utils/index");

exports.signIn = async (req, res) => {
  // console.log({ ...req.body });
  const { password, phone, role } = req.body;
  try {
    let user;
    if (role === "club") {
      user = await Clubs.findOne({
        phone: phone.trim(),
      });
    } else {
      user = await Admins.findOne({
        phone: phone.trim(),
      });
    }
    if (user) {
      const { password: hashedPassword, _id } = user;
      const isPasswordCorrect = await bcrypt.compare(password, hashedPassword);
      if (isPasswordCorrect) {
        const token = createToken({
          _id,
          role,
        });
        res.json({
          user: user,
          token,
          success: true,
        });
      } else {
        res.status(422).json({
          msg: "Phone number or password is wrong",
          success: false,
        });
      }
    } else {
      res.status(422).json({
        msg: "There is no user with this number",
        success: false,
      });
    }
  } catch (err) {
    res.status(422).json({
      msg: err.message,
      success: false,
    });
  }
};
