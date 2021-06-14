const express = require("express");
const app = express();
app.use(express.json());
const PORT = 3000;

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server is listening on localhost:${PORT}`);
});
