const mongoose = require("mongoose");
const URL = require("../model/URL");
const path = require("path");
const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
async function HandleGetAllUser(req, res) {
  const allUser = await URL.find({});

  if (!allUser || allUser == " ") {
    res.status(400).json({ message: "Error as allUser is not Valid" });
  }

  const User = allUser.map(
    (url) => `<tr><td>${url.shortId}</td>
  <td>${url.redirectURL}</td>
  <td>${url.visitHistory.length}</td></tr>`
  );
  /*
  res.end(`<html><head><style> table { width: flexible; border-collapse: collapse; }
  th, td { border: 10px solid black; padding: 8px; text-align: left; }
  th { background-color: #f2f2f2; }</style></head>
  <body>
  <h2>All Users</h2>
  <table>
     <tr><th>ShortId</th>
      <th>RedirectedURl</th>
      <th>Clicks</th>${User} 
      </table>
      
      </body></html>`);
*/
  res.render("index", { url: allUser });
}

module.exports = { HandleGetAllUser };
