// backend/server.js
import express from "express";
import cors from "cors";
import { getRandomQuote } from "./quotes.js";

const app = express();
const PORT = 3000;

// Enable CORS
app.use(cors());

// Test route
app.get("/", (req, res) => {
  res.send("Welcome to the Quote Generator API");
});

// Quote route
app.get("/api/quote", (req, res) => {
  const quote = getRandomQuote();
  res.json({ quote });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
