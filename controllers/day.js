const Day = require("../models/day");

exports.createNewDay = (req, res) => {
  Day.create({
    ...req.body,
  })
    .then((data) => {
      res.json({
        day: data,
        dayId: data._id,
        success: true,
      });
    })
    .catch((err) => res.send(err));
};

exports.closeDay = (req, res) => {
  const { startedAt } = req.body;
  const { _id } = req.params;
  const closedDate = new Date().getTime();
  const totalTime = closedDate - startedAt;
  Day.findByIdAndUpdate(
    _id,
    {
      isClosed: true,
      closedAt: closedDate,
      totalTime,
    },
    {
      new: true,
    }
  )
    .then((data) => {
      res.json({
        success: true,
        payload: data,
        msg: "Day closed successfully",
      });
      // console.log(data);
    })
    .catch((err) => {
      res.json({
        success: false,
        msg: err.message,
      });
    });
};
