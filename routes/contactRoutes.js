const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// GET contact (single)
router.get("/", async (req, res) => {
  const contact = await Contact.findOne();
  res.json(contact);
});

// CREATE or UPDATE (upsert)
router.post("/", async (req, res) => {
  const contact = await Contact.findOneAndUpdate(
    {},
    req.body,
    { new: true, upsert: true }
  );
  res.json(contact);
});

module.exports = router;
