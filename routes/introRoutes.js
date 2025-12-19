const router = require("express").Router();
const Intro = require("../models/Intro");

router.get("/", async (req, res) => {
  const intro = await Intro.findOne();
  res.json(intro);
});

router.post("/", async (req, res) => {
  const intro = await Intro.findOneAndUpdate({}, req.body, {
    new: true,
    upsert: true,
  });
  res.json(intro);
});

module.exports = router;
