const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema(
  {
    firstname: { type: String, required: true, trim: true },
    lastname: { type: String, required: true, trim: true },

    profilePicture: {
      type: String,
      default: "https://placehold.co/150",
    },

    primaryEmail: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    secondaryEmail: { type: String, lowercase: true },

    primaryContactNo: { type: String, required: true },
    secondaryContactNo: { type: String },

    contactType: {
      type: String,
      enum: [
        "Lead",
        "Prospect",
        "Client",
        "Partner",
        "Networking",
        "Referral",
        "Other",
      ],
      default: "Prospect",
    },

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
      github: { type: String },
      facebook: { type: String },
      instagram: { type: String },
    },

    additionalSocialLinks: [
      {
        label: { type: String },
        url: { type: String },
      },
    ],

    lastContactedDate: { type: Date },
    referredBy: { type: String },

    createdBy: { type: String, required: true },
  },
  { timestamps: true },
);

const customer = mongoose.model("Customer", customerSchema);

module.exports = customer;
