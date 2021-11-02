const Order = require("../models/order");
const Day = require("../models/day");

exports.createOrder = (req, res) => {
  const { numOfPeople, hourlyPrice } = req.body;
  // calculating price for an hour considering number of people
  // if numOfPeople more than one, adding 2000 for each extra player
  const priceForAnHourByNumOfPeople =
    numOfPeople > 1 ? hourlyPrice + (numOfPeople - 1) * 2000 : hourlyPrice;
  // console.log("createOrder", { ...req.body });
  Order.create({
    ...req.body,
    hourlyPrice: priceForAnHourByNumOfPeople,
  })
    .then((data) => {
      console.log("dfefefe", data);
      Day.findByIdAndUpdate(data.day, { $addToSet: { orders: data._id } })
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
      res.json({ success: true, payload: data, msg: "order_created" });
    })
    .catch((err) => {
      console.log(err);
      res.json({ success: false, msg: err.message });
    });
};

exports.closeOrder = (req, res) => {
  const { _id } = req.params;
  const { startedAtTime, numOfPeople, hourlyPrice } = req.body;
  const closedAt = new Date().toString();
  // getting time in millisecond
  const closedAtTime = new Date().getTime();
  // getting minutes from milliseconds
  const totalTime = (closedAtTime - startedAtTime) / 1000 / 60;
  // calculating price for an hour considering number of people
  // if numOfPeople more than one, adding 2000 for each extra player
  const priceForAnHourByNumOfPeople =
    numOfPeople > 1 ? hourlyPrice + (numOfPeople - 1) * 2000 : hourlyPrice;
  // hourly price is 6000, getting price for one minute
  // and multiplying totalTimeMinute and priceForMinute
  const price = Math.ceil(totalTime * (priceForAnHourByNumOfPeople / 60));

  const updatedData = {
    hourlyPrice: priceForAnHourByNumOfPeople,
    isClosed: true,
    closedAtTime,
    closedAt,
    totalTime,
    price,
  };
  Order.findByIdAndUpdate(_id, { $set: updatedData }, { new: true })
    .then((data) => {
      console.log("object", data);
      res.json({ success: true, payload: data, msg: "order_closed" });
    })
    .catch((err) => {
      res.json({ success: false, msg: err.message });
    });
};

exports.fetchOrderById = (req, res) => {
  const { id } = req.params;
  Order.findById(id)
    .then((order) => {
      res.json(order);
    })
    .catch((err) => res.send(err));
};

exports.deleteOrderById = (req, res) => {
  const { id } = req.params;
  const updatedData = {
    isDeleted: true,
    deletedAt: Date.now(),
  };
  Order.findByIdAndUpdate(id, { $set: updatedData }, { new: true })
    .then(() => {
      res.json({ success: true, msg: "Successfully deleted" });
    })
    .catch((err) => res.send(err));
};

exports.fetchAllOrdersByDay = (req, res) => {
  const { _id } = req.params;
  Order.find({ isClosed: false, day: _id })
    .then((orders) => res.json(orders))
    .catch((err) => res.send(err));
};

exports.fetchAllOrders = (req, res) => {
  Order.find({ isDeleted: false })
    .then((foods) => res.json(foods))
    .catch((err) => res.send(err));
};
