const express = require("express");
const app = express();
const port = 3000;

// Root route
app.get("/api/age/:name", (req, res) => {
  const name = req.params.name;

  if (!name) {
    return res
      .status(400)
      .json({ error: "Missing parameter 'name' was expected." });
  }

  const age = Math.floor(Math.random() * 100) + 1; // Generate a random age between 1 and 100
  const days = age * 365; // Calculate age in days

  res.json({ name, age, days });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
