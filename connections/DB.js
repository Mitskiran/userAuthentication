const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const connectDB = async () => {
  try {
    const`` connection = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connection established ${mongoose.connection.host}`);
  } catch (Err) {
    console.log("Error", Err);
  }
};

module.exports = connectDB;
