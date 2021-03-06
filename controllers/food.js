const Food = require("../models/food");

exports.createFood = (req, res) => {
  Food.create({
    ...req.body,
  })
    .then((data) => {
      res.json({ success: true, payload: data, msg: "food_created" });
    })
    .catch((err) => {
      res.json({ success: false, msg: err.message });
    });
};

exports.fetchFoodById = (req, res) => {
  const { id } = req.params;
  Food.findById(id)
    .then((food) => {
      res.json(food);
    })
    .catch((err) => res.send(err));
};

exports.deleteFoodById = (req, res) => {
  const { id } = req.params;
  const updatedData = {
    isDeleted: true,
    deletedAt: Date.now(),
  };
  Food.findByIdAndUpdate(id, { $set: updatedData }, { new: true })
    .then(() => {
      res.json({ success: true, msg: "Successfully deleted" });
    })
    .catch((err) => res.send(err));
};

exports.fetchAllFoods = (req, res) => {
  Food.find({ isDeleted: false })
    .then((foods) => res.json(foods))
    .catch((err) => res.send(err));
};
