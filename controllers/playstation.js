const Playstations = require("../models/playstation");

exports.createPlaystation = (req, res) => {
  Playstations.create({
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
  const { _id } = req.params;
  console.log("dasdasd", req.params);
  Playstations.findById(_id)
    .then((playstation) => {
      res.json(playstation);
    })
    .catch((err) => res.send(err));
};

exports.updateStatus = (req, res) => {
  const { isFree } = req.body;
  const { _id } = req.params;
  console.log("updateStatus", isFree, _id);
  Playstations.findByIdAndUpdate(
    _id,
    {
      isFree,
    },
    {
      new: true,
    }
  )
    .then((data) => {
      res.json({
        success: true,
        payload: data,
        msg: "Status has been updated successfully",
      });
      console.log(data);
    })
    .catch((err) => {
      res.json({
        success: false,
        msg: err.message,
      });
    });
};

exports.deleteFoodById = (req, res) => {
  const { _id } = req.params;
  const updatedData = {
    isDeleted: true,
    deletedAt: Date.now(),
  };
  Playstations.findByIdAndUpdate(_id, { $set: updatedData }, { new: true })
    .then(() => {
      res.json({ success: true, msg: "Successfully deleted" });
    })
    .catch((err) => res.send(err));
};

exports.fetchAllPlaystations = (req, res) => {
  Playstations.find({ isDeleted: false })
    .then((playstations) => res.json(playstations))
    .catch((err) => res.send(err));
};
