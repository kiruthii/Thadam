const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema(
  {
    firstname: { type: String, required: true, trim: true },
    lastname: { type: String, required: true, trim: true },
    profilePicture: { type: String, default: "https://placehold.co/150" },
    primaryEmail: { type: String, required: true, unique: true, lowercase: true },
    secondaryEmail: { type: String, lowercase: true },
    primaryContactNo: { type: String, required: true },
    secondaryContactNo: { type: String },
    role: { type: String, enum: ['Lead', 'Prospect', 'Client', 'Partner'], default: 'Prospect'},
    designation: { type: String },
    company: { type: String },
    address: {
      street: { type: String },
      number: { type: String },
      postCode: { type: String },
      city: { type: String },
      state: { type: String },
      country: { type: String },
    },
    socialMedia: {
      linkedin: { type: String },
      twitter: { type: String },
      youtube: { type: String },
    },
    lastContactedDate: { type: Date },
    referredBy: { type: String },
  },
  { timestamps: true },
);

const customer = mongoose.model("Customer", customerSchema);

module.exports = customer;
