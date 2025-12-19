const express = require("express");
const Experience = require("../models/Experience");
const router = express.Router();

// CREATE experience
router.post("/", async (req, res) => {
  try {
    const exp = new Experience(req.body);
    await exp.save();
    res.status(201).json(exp);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET all experiences
router.get("/", async (req, res) => {
  const experiences = await Experience.find().sort({ startDate: -1 });
  res.json(experiences);
});

// UPDATE experience
router.put("/:id", async (req, res) => {
  const updated = await Experience.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
});

// DELETE experience
router.delete("/:id", async (req, res) => {
  await Experience.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;
