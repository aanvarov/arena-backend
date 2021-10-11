const mongoose = require("mongoose");
const { Schema } = mongoose;
const mongoosePaginate = require("mongoose-paginate-v2");

const playstationSchema = new Schema({
  number: {
    type: Number,
    required: true,
    unique: true,
  },
  type: {
    type: String,
    default: "ps3",
    enum: ["ps3", "ps4", "ps5"],
  },
  status: {
    type: String,
    default: "free",
    enum: ["free", "busy"],
  },
  hourlyPrice: {
    type: Number,
    default: 6000,
  },
  totalTime: {
    type: Date,
    default: "",
  },
  totalEarning: {
    type: Number,
    default: 0,
  },
  createdAt: {
    default: Date.now(),
    type: Date,
  },
  updatedAt: {
    type: Date,
    default: null,
  },
  deletedAt: {
    type: Date,
    default: null,
  },
  isDeleted: { type: Boolean, default: false },
});

playstationSchema.plugin(mongoosePaginate);
const Playstations = mongoose.model("Playstation", playstationSchema);

module.exports = Playstations;
