const Day = require("../models/day");

exports.createNewDay = (req, res) => {
  Day.create({
    ...req,
  })
    .then((data) => {
      res.json(data);
      console.log("createdNEWDay", data);
    })
    .catch((err) => res.send(err));
};

// exports.findNotClosed = (req, res) => {
//   Day.find({
//     isClosed: false,
//   })
//     .then((data) => {
//       res.json(data);
//       console.log("nottttttt", data);
//     })
//     .catch((err) => res.send(err));
// };
