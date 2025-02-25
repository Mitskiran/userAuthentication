const mongoose = require("mongoose");
const userModel = require("../model/UserModel");
const user = require("../model/UserModel");

async function HandleGetAllUser(req, res) {
  try {
    const allDBUsers = await user.find({});
    return res.status(200).json(allDBUsers);
  } catch (err) {
    console.log(`Error Logged ${err}`);

    return res
      .status(500)
      .json({ message: "Internal Server Error", error: err.message })
      .end();
  }
}

async function HandlecreateNewUserRequest(req, res) {
  const { firstName, lastName, email, city } = req.body;
  if (!firstName) {
    return res.status(400).json({ message: "FirstName is Required" });
  }
  if (!lastName) {
    return res.status(400).json({ message: "lastName is Required" });
  }
  if (!email) {
    return res.status(400).json({ message: "email is Required" });
  }
  if (!city) {
    return res.status(400).json({ message: "city is Required" });
  }

  try {
    const RegisterUser = await user.create(req.body);
    return res.status(200).json({ message: "User Created", RegisterUser });
  } catch (error) {
    return res
      .status(404)
      .json({ message: "Unable to Create User", Error: error.message })
      .end();
  }
}
module.exports = { HandleGetAllUser, HandlecreateNewUserRequest };
