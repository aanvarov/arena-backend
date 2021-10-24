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
    type: String,
    default: new Date(),
  },
  closedAt: {
    type: String,
  },
  createdAt: {
    type: String,
    default: new Date(),
  },
  totalTime: {
    type: Date,
  },
  isClosed: {
    type: Boolean,
    default: false,
  },
});

daySchema.plugin(mongoosePaginate);
const Days = mongoose.model("Day", daySchema);

module.exports = Days;
