// File: /api/getReviews.js
export default async function handler(req, res) {
  const { placeId } = req.query;

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${process.env.GOOGLE_API_KEY}`;

  const response = await fetch(url);
  const data = await response.json();

  res.setHeader("Cache-Control", "s-maxage=600, stale-while-revalidate"); // Cache for 10 min
  res.status(200).json(data);
}
