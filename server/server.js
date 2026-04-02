require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const customerRoutes = require("./routes/customerRoutes");
const authRoutes = require("./routes/authRoutes");
const userRoutes=require("./routes/userRoutes")
const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("DB Error:", err));

app.get("/", (req, res) => {
  res.send("Server Started");
});

app.use("/api", customerRoutes);
app.use("/", authRoutes);
app.use("/api/users",userRoutes );

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});