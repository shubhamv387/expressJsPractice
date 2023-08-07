const path = require("path");
const rootDir = require("../util/path");

exports.getAddProducts = (req, res, next) => {
  //   console.log("in another middleware!");
  // res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
};

exports.postAddProducts = (req, res, next) => {
  // console.log(req.body.title);
  // console.log(req.body.quantity);
  res.redirect("/shop");
};

exports.getProducts = (req, res, next) => {
  // console.log("in another middleware!");
  // console.log(req.body);
  res.sendFile(path.join(rootDir, "views", "shop.html"));
};
