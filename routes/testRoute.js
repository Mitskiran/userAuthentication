const express = require("express");
const { HandleGetAllUser } = require("../controller/testController");

const router = express.Router();

router.route("/").get(HandleGetAllUser);

module.exports = router;
