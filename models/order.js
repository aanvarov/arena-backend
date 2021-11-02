const mongoose = require("mongoose");
const { Schema } = mongoose;
const mongoosePaginate = require("mongoose-paginate-v2");

const orderSchema = new Schema({
  playstationId: {
    type: Schema.Types.ObjectId,
    ref: "Playstation",
  },
  tableNumber: {
    type: Number,
    default: null,
  },
  startedAtTime: {
    type: Number,
    default: () => new Date().getTime(),
  },
  hourlyPrice: {
    type: Number,
    default: null,
  },
  closedAtTime: {
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
    default: () => new Date().toString(),
  },
  closedAt: {
    type: String,
    default: null,
  },
  club: {
    type: Schema.Types.ObjectId,
    ref: "Club",
  },
});

orderSchema.plugin(mongoosePaginate);
const Orders = mongoose.model("Order", orderSchema);

module.exports = Orders;
