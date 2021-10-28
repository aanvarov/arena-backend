const mongoose = require("mongoose");
const { Schema } = mongoose;
const mongoosePaginate = require("mongoose-paginate-v2");

const orderSchema = new Schema({
  playstation: {
    type: Schema.Types.ObjectId,
    ref: "Playstation",
  },
  startedAt: {
    type: Number,
    default: new Date().getTime(),
  },
  closedAt: {
    type: Number,
    default: null,
  },
  totalTime: {
    type: Number,
    default: null,
  },
  price: {
    type: Number,
    default: null,
  },
  numOfPeople: {
    type: Number,
    default: 0,
  },
  foods: {
    type: [Schema.Types.ObjectId],
    ref: "Food",
    default: [],
  },
  day: {
    type: Schema.Types.ObjectId,
    ref: "Day",
  },
  isClosed: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: String,
  },
  club: {
    type: Schema.Types.ObjectId,
    ref: "Club",
  },
});

orderSchema.plugin(mongoosePaginate);
const Orders = mongoose.model("Order", orderSchema);

module.exports = Orders;
