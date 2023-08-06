const express = require("express");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  //   console.log("in another middleware!");
  res.send(
    "<form action ='/admin/add-product' method='POST'><input type='text' name='title' placeholder='product name' /><br><input type='number' name='quantity' placeholder='QTY' /><br><input type='submit' value='submit' /></form>"
  );
});

router.post("/add-product", (req, res, next) => {
  console.log(req.body.title);
  console.log(req.body.quantity);
  res.redirect("/shop");
});

module.exports = router;
