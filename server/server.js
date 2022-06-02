const path = require("path");
// Requiring module
const express = require("express");
const jsonServer = require("json-server");
const demodata = require("./db.json");
// Creating express object
const router = jsonServer.router(demodata);
const server = jsonServer.create();
server.use("/static", express.static(path.join(__dirname, "public")));
// const app = express();
server.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Defining port number
const PORT = 3000;

server.use(router);

server.listen(PORT, () => {
  console.log(`Running server on PORT ${PORT}...`);
});
