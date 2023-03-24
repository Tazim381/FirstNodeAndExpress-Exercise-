import express from "express";
import sayHi from "./modules.js";
const port = 5000;
const server = express();

server.listen(port, () => {
  //console.log($(port));
});

server.get("/sayHi", (req, res) => {
  res.send(sayHi("Tisha don't like me"));
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
