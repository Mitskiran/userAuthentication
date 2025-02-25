const express = require("express");
const router = express.Router();

const {
  HandleGetAllUser,
  HandlecreateNewUserRequest,
} = require("../controller/userController");

router.route("/").get(HandleGetAllUser).post(HandlecreateNewUserRequest);

module.exports = router;
