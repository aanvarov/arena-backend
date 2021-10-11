const mongoose = require("mongoose");
const { Schema } = mongoose;
const mongoosePaginate = require("mongoose-paginate-v2");

const orderSchema = new Schema({
  playstation: {
    type: Schema.Types.ObjectId,
    ref: "Playstation",
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
  createdAt: {
    type: String,
  },
});

orderSchema.plugin(mongoosePaginate);
const Orders = mongoose.model("Order", orderSchema);

module.exports = Orders;
