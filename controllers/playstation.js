const Playstation = require("../models/playstation");

exports.createPlaystation = (req, res) => {
  Playstation.create({
    ...req.body,
  })
    .then((data) => {
      res.json({ success: true, payload: data, msg: "playstation_created" });
    })
    .catch((err) => {
      res.json({ success: false, msg: err.message });
    });
};

exports.fetchPlaystationById = (req, res) => {
  const { id } = req.params;
  Playstation.findById(id)
    .then((playstation) => {
      res.json(playstation);
    })
    .catch((err) => res.send(err));
};

exports.deleteFoodById = (req, res) => {
  const { id } = req.params;
  const updatedData = {
    isDeleted: true,
    deletedAt: Date.now(),
  };
  Playstation.findByIdAndUpdate(id, { $set: updatedData }, { new: true })
    .then(() => {
      res.json({ success: true, msg: "Successfully deleted" });
    })
    .catch((err) => res.send(err));
};

exports.fetchAllFoods = (req, res) => {
  Playstation.find({ isDeleted: false })
    .then((playstations) => res.json(playstations))
    .catch((err) => res.send(err));
};
