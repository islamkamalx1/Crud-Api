const express = require("express");

const app = express();

const port = 3000;

//routes

app.get("/", (req, res) => {
  res.send("Hello node api")
});

app.listen(port, () => {
  console.log("node api app is running on port 3000");
});
