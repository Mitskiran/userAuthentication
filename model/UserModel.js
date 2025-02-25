const mongoose = require("mongoose");
const validate = require("validator");

const userModel = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "first name is Mandatory"],
    },
    lastName: {
      type: String,
      required: [true, "Last name is Mandatory"],
    },
    gender: {
      type: String,
      required: [(true, "Gender is Required")],
    },
    email: {
      type: String,
      required: [true, "Email name is Mandatory"],
      unique: [true],
      validator: validate.isEmail,
    },
    City: {
      type: String,
    },
  },
  { timestamps: true }
);
mongoose.models = {};
module.exports = mongoose.model("user", userModel);
