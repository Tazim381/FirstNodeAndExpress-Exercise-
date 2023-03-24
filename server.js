import express from "express";
const port = 5000;
const server = express();

server.listen(port, () => {
  //console.log($(port));
});
server.get("/name", (req, res) => {
  res.send("Seaum Ahmed Tazim ");
});

server.get("/identity", (req, res) => {
  res.send({
    name: "Tazim",
    age: "24",
  });
});
