const mongoose = require("mongoose");
const { Schema } = mongoose;
const mongoosePaginate = require("mongoose-paginate-v2");

const daySchema = new Schema({
  orders: {
    type: [Schema.Types.ObjectId],
    ref: "Order",
    default: [],
  },
  startedAt: {
    type: Number,
    default: new Date().getTime(),
  },
  closedAt: {
    type: Number,
    default: null,
  },
  createdAt: {
    type: String,
    default: new Date(),
  },
  totalTime: {
    type: Number,
    default: null,
  },
  isClosed: {
    type: Boolean,
    default: false,
  },
  club: {
    type: Schema.Types.ObjectId,
    ref: "Club",
  },
});

daySchema.plugin(mongoosePaginate);
const Days = mongoose.model("Day", daySchema);

module.exports = Days;
