const mongoose = require("mongoose");
const shortId = require("shortid");
const URL = require("../model/URL");

async function generateId() {
  const { nanoid } = await import("nanoid");
  return nanoid(8);
}

async function generateShortURL(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "URL is Required" });

  const shortID = shortId(8);

  const urlCreated = await URL.create({
    shortId: shortID,
    redirectURL: body.url,
    visitedHistory: [],
  });
  console.log("URLCREATED", urlCreated);

  return res.json({ id: shortID });
}

async function fetchLongURL(req, res) {
  try {
    const shortId = req.params.id;
    if (!shortId) return res.status(400).json({ error: "ShortId is Required" });
    console.log("*", shortId, "*");

    const fetchedURL = await URL.findOneAndUpdate(
      { shortId: shortId.trim() },
      {
        $push: {
          visitHistory: { timestamps: Date.now() },
        },
      },
      { new: true }
    );
    console.log("Fetched URL", fetchedURL);
    //console.log(fetchedURL.visitHistory.length);
    if (!fetchedURL.redirectURL) {
      return res.status(404).json({ error: "Short URL not found" });
    } else {
      res.redirect(fetchedURL.redirectURL);
    }
  } catch (Error) {
    console.log("Error Occured");
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = { generateShortURL, fetchLongURL };

/*
how will you import
*/
