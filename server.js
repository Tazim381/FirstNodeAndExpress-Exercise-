const express = require("express");
const port = 5000;
const server = express();

server.listen(port, () => {
  //console.log($(port));
});
server.get("/name", (req, res) => {
  res.send("Tazim");
});

server.get("/identity", (req, res) => {
  res.send({
    name: "Tazim",
    age: "24",
  });
});
