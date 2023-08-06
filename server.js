const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/add-product", (req, res, next) => {
  //   console.log("in another middleware!");
  res.send(
    "<form action ='/product' method='POST'><input type='text' name='title' placeholder='product name' /><br><input type='number' name='quantity' placeholder='QTY' /><br><input type='submit' value='submit' /></form>"
  );
});

app.use("/product", (req, res, next) => {
  console.log(req.body.title);
  console.log(req.body.quantity);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  //   console.log("in another middleware!");
  res.send("<h1>Hello from express!</h1>");
});

app.listen(3000);
