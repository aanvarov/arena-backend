const bcrypt = require("bcrypt");
const Club = require("../models/club");
const util = require("../utils");

exports.fetchAllClubs = (req, res) => {
  Club.find({
    isDeleted: false,
  })
    .then((admin) => res.json(admin))
    .catch((err) => res.send(err));
};

exports.fetchClubById = (req, res) => {
  const id = req.params;
  Club.findById(id)
    .then((club) => res.json(club))
    .catch((err) => res.send(err));
};

exports.createClub = async (req, res) => {
  const { password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 8);

  const club = new Club({
    ...req.body,
    password: hashedPassword,
  });
  club
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.send(err));
};
