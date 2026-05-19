import express from "express";
import { marked } from "marked";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  const md = "# Hello, Marked.js!\n\nThis is rendered by marked.";
  const html = marked(md);
  res.send(html);
});

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
