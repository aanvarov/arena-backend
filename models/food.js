const mongoose = require("mongoose");
const { Schema } = mongoose;
const mongoosePaginate = require("mongoose-paginate-v2");

const foodSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
    enum: ["drinks", "sweets"],
  },
  price: {
    type: String,
    required: true,
  },
  img: {
    type: Schema.Types.ObjectId,
    ref: "File",
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  deletedAt: {
    type: Date,
    default: null,
  },
});

foodSchema.plugin(mongoosePaginate);
const Foods = mongoose.model("Food", foodSchema);

module.exports = Foods;
