const path = require("path");

const express = require("express");
const jsonServer = require("json-server");
const demodata = require("./db.json");

const router = jsonServer.router(demodata);
const server = jsonServer.create();
server.use("/static", express.static(path.join(__dirname, "public")));

server.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
require("dotenv").config();
server.use(router);
const port = process.env.MY_PORT || process.env.PORT;
server.listen(port, () => {
  console.log(`Running server on port ${port} ...`);
});
