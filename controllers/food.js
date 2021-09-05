const Foods = require("../models/food");

exports.createFood = (req, res) => {
  Foods.create({
    ...req.body,
  })
    .then((data) => {
      res.json({ success: true, payload: data, msg: "food_created" });
    })
    .catch((err) => {
      res.json({ success: false, msg: err.message });
    });
};
