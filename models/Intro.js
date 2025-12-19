const mongoose = require("mongoose");

const IntroSchema = new mongoose.Schema({
  welcomeText: String,
  nameText: String,
  description: String,
  image: String,
});

module.exports = mongoose.model("Intro", IntroSchema);
