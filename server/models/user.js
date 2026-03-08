const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
{
  workosId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  firstName: { type: String },
  lastName: { type: String },
  profilePicture: { type: String }
},
{ timestamps: true }
);
const User = mongoose.model("User", userSchema);
module.exports = User;