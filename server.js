const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");

// 🔹 Load .env reliably (Windows/OneDrive safe)
require("dotenv").config({ path: path.resolve(__dirname, ".env") });

// 🔹 Debug: check if MONGO_URI is loaded
console.log("ENV KEYS:", Object.keys(process.env));
console.log("MONGO_URI VALUE:", process.env.MONGO_URI);

if (!process.env.MONGO_URI) {
  console.error("❌ MONGO_URI is missing in your .env file!");
  process.exit(1); // stop server if URI missing
}

// 🔹 Connect to MongoDB
connectDB();

const app = express();

// 🔹 Middleware
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://your-frontend.vercel.app", // ADD LATER
    ],
    credentials: true,
  })
);
app.use(express.json());

app.use("/uploads", express.static(path.join(__dirname, "uploads")));
// 🔹 Routes
app.use("/api/intro", require("./routes/introRoutes"));
app.use("/api/projects", require("./routes/projectRoutes"));
app.use("/api/experience", require("./routes/experienceRoutes"));
app.use("/api/about", require("./routes/aboutRoutes"));
app.use("/api/education", require("./routes/educationRoutes"));
app.use("/api/skills", require("./routes/skillRoutes"));
app.use("/api/contact", require("./routes/contactRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));

// 🔹 Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
