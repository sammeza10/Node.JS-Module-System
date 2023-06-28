const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/api/buba-gump", (req, res) => {
  res.json({ message: "pong" });
});

app.post("/api/buba-gump", (req, res) => {
  const message = req.body.message;
  if (message === "ping") {
    res.json({ message: "pong" });
  } else if (message === "pong") {
    res.json({ message: "ping" });
  } else {
    res.status(400).json({ error: "Invalid move" });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
