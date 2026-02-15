require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

/* ---------- Middleware ---------- */
app.use(cors());
app.use(express.json());

/* ---------- Database ---------- */
connectDB();

/* ---------- Routes ---------- */
app.use("/auth", require("./routes/auth"));
app.use("/issues", require("./routes/issues"));

/* ---------- Health Check ---------- */
app.get("/", (req, res) => {
  res.status(200).json({ message: "API running" });
});

/* ---------- Server ---------- */
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
