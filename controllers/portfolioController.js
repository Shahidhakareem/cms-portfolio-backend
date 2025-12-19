const Portfolio = require("../models/Portfolio");

// GET portfolio
exports.getPortfolio = async (req, res) => {
  const data = await Portfolio.findOne();
  res.json(data);
};

// UPDATE portfolio (Admin)
exports.updatePortfolio = async (req, res) => {
  const updated = await Portfolio.findOneAndUpdate(
    {},
    req.body,
    { new: true, upsert: true }
  );
  res.json(updated);
};
