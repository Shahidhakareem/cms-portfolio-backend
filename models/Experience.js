const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    type: {
      type: String, // Internship | Full-time | Freelance
      required: true,
    },
    startDate: {
      type: String,
      required: true,
    },
    endDate: {
      type: String,
      default: "Present",
    },
    description: {
      type: [String], // bullet points
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Experience", experienceSchema);
