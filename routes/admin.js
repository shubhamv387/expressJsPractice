const express = require("express");

const router = express.Router();
const productController = require("../controller/products");

router.get("/add-product", productController.getAddProducts);

router.post("/add-product", productController.postAddProducts);

module.exports = router;
