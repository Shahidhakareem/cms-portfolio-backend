const router = require("express").Router();
const About = require("../models/AboutMe");

router.get("/", async (req, res) => {
  const about = await About.findOne();
  res.json(about);
});

router.post("/", async (req, res) => {
  const about = await About.findOneAndUpdate({}, req.body, {
    new: true,
    upsert: true,
  });
  res.json(about);
});

module.exports = router;
