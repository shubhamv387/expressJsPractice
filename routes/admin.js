const express = require("express");
const path = require("path");
const router = express.Router();

// const rootDir = require("../util/path");

router.get("/add-product", (req, res, next) => {
  //   console.log("in another middleware!");
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
});

router.post("/add-product", (req, res, next) => {
  console.log(req.body.title);
  console.log(req.body.quantity);
  res.redirect("/shop");
});

module.exports = router;
