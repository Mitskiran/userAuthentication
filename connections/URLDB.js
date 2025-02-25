const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectURLDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.URL_URL);
    console.log(`Connection established ${mongoose.connection.host}`);
  } catch (Error) {
    console.log({
      Message: "Error occured at connecting URL DB",
      Error: Error,
    });
  }
};

module.exports = connectURLDB;
