const express = require("express");
const app = express();
const port = 3000;

app.get("/api/delay/:milliseconds", (req, res) => {
  const delay = parseInt(req.params.milliseconds);

  setTimeout(() => {
    res.send("Response after delay");
  }, delay);
});

// Default route if no delay is provided
app.get("/api/delay", (req, res) => {
  const delay = 1000;

  setTimeout(() => {
    res.send("Response after default delay");
  }, delay);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
