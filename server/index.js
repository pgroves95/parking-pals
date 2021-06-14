const express = require("express");
const app = express();
const path = require("path");
app.use(express.json());
const PORT = process.env.PORT || 3001;

app.get("/api", (req, res) => {
  res.json({ message: "AMAZINGGGGGG" });
});

app.listen(PORT, () => {
  console.log(`Server is listening on localhost:${PORT}`);
});
