const express = require("express");
const { Tech, Soft } = require("../models/Skill");

const router = express.Router();

// Tech Skills
router.post("/tech", async (req, res) => {
  try {
    const { name, level } = req.body;

    const techskill = new Tech({
      name,
      level,
    });

    await techskill.save();
    res.status(201).json(techskill);
  } catch (error) {
    console.error("Skill POST error:", error);
    res.status(500).json({ message: error.message });
  }
});

// GET tech skill
router.get("/tech", async (req, res) => {
  const techskills = await Tech.find();
  res.json(techskills);
});

// UPDATE Tech Skill
router.put("/tech/:id", async (req, res) => {
  try {
    const { name, level } = req.body;

    const updated = await Tech.findByIdAndUpdate(
      req.params.id,
      { name, level },
      { new: true }
    );

    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE tech skill
router.delete("/tech/:id", async (req, res) => {
  await Tech.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

//SoftSkills

router.post("/soft", async (req, res) => {
  try {
    const { name, level } = req.body;
    const softskill = new Soft({
      name,
      level,
    });

    await softskill.save();
    res.status(201).json(softskill);
  } catch (error) {
    console.error("Skill POST error:", error);
    res.status(500).json({ message: error.message });
  }
});

// GET soft skill
router.get("/soft", async (req, res) => {
  const softskills = await Soft.find();
  res.json(softskills);
});

// UPDATE Soft Skill
router.put("/soft/:id", async (req, res) => {
  try {
    const { name, level } = req.body;

    const updated = await Soft.findByIdAndUpdate(
      req.params.id,
      { name, level },
      { new: true }
    );

    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE soft skill
router.delete("/soft/:id", async (req, res) => {
  await Soft.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;
