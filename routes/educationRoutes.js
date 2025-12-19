const express = require("express");
const router = express.Router();
const Education = require("../models/Education");

// GET all education
router.get("/", async (req, res) => {
  const education = await Education.find().sort({ startYear: -1 });
  res.json(education);
});

// ADD education
router.post("/", async (req, res) => {
  try {
    const edu = new Education(req.body);
    await edu.save();
    res.status(201).json(edu);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// UPDATE education
router.put("/:id", async (req, res) => {
  const updated = await Education.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
});

// DELETE education
router.delete("/:id", async (req, res) => {
  await Education.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;
