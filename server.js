const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");

// ✅ Load env ONLY in local development
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const app = express();

// ✅ Middleware
app.use(express.json());

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://cms-portfolio-frontend.vercel.app/", // replace with real Vercel URL
    ],
    credentials: true,
  })
);

// ✅ Static uploads
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// ✅ Health check routes (REQUIRED for Render debugging)
app.get("/", (req, res) => {
  res.send("Backend running");
});

app.get("/api", (req, res) => {
  res.json({ message: "API working" });
});

// ✅ API Routes
app.use("/api/intro", require("./routes/introRoutes"));
app.use("/api/projects", require("./routes/projectRoutes"));
app.use("/api/experience", require("./routes/experienceRoutes"));
app.use("/api/about", require("./routes/aboutRoutes"));
app.use("/api/education", require("./routes/educationRoutes"));
app.use("/api/skills", require("./routes/skillRoutes"));
app.use("/api/contact", require("./routes/contactRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));

// ✅ Connect DB (do NOT crash server if it fails)
connectDB();

// ✅ Start server (Render assigns PORT)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
