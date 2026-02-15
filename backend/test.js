const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("HELLO WORLD");
});

app.listen(5001, () => console.log("Test server running on 5001"));
