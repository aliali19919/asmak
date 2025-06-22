const express = require("express");
const cors = require("cors");
require("dotenv").config();

const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/api/getReviews", async (req, res) => {
  const { placeId } = req.query;
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${process.env.GOOGLE_API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.setHeader("Cache-Control", "s-maxage=600, stale-while-revalidate");
    res.status(200).json(data);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to fetch reviews", detail: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running at http://localhost:${PORT}`);
});
