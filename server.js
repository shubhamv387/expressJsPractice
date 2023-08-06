const http = require("http");
const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("in the middleware!");
  next();
});
app.use((req, res, next) => {
  console.log("in another middleware!");
  // res.send("<h1>Hello from express!</h1>"); // Content-Type = text/html
  res.send({ key1: "value" }); // Content-Type = application/json
});

app.listen(3000);
