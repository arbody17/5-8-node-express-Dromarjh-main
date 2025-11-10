// backend/quotes.js
import { getRandomInt } from "./utils/random.js";

const quotes = [
  "Talk is cheap. Show me the code.",
  "Programs must be written for people to read, and only incidentally for machines to execute.",
  "Simplicity is the soul of efficiency.",
  "Before software can be reusable it first has to be usable.",
  "Code is like humor. When you have to explain it, it’s bad."
];

export function getRandomQuote() {
  const index = getRandomInt(quotes.length);
  return quotes[index];
}
export function getAllQuotes() {
  return quotes;
} 