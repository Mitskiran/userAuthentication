const express = require("express");
const {
  generateShortURL,
  fetchLongURL,
} = require("../controller/urlController");
const router = express.Router();

router.route("/").post(generateShortURL);
router.route("/:id").get(fetchLongURL);
module.exports = router;
