const express = require("express");
const color = require("colors");
const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
  res.send({ message: "welcome to shophouse app" });
});

app.listen(PORT, () => {
  console.log(`Server is listening at ${PORT}`.bgCyan.white);
});
