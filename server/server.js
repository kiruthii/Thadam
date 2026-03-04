const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(express.json());

mongoose.connect(process.env.DB_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch(() => console.log("DB Error"));

app.get("/", (req, res) => {
  res.send("Server Started");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
