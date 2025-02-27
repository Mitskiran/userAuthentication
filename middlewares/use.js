const express = require("express");
const app = express();


function middlewareCall() {
    const jsonmiddleware = app.use(express.json());
    const urlencodedmiddleware = app.use(express.urlencoded({ extended: false }));
}


module.exports = { middlewareCall }