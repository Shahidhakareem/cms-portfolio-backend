const mongoose = require("mongoose");

const techSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    level: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const softSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    level: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = {
  Tech: mongoose.model("TechSkill", techSchema),
  Soft: mongoose.model("SoftSkill", softSchema),
};
