const express = require("express");

const router = express.Router();

const contactUsController = require("../controller/contactUs");

router.get("/contact-us", contactUsController.getContactUs);

router.post("/success", contactUsController.getSuccess);

module.exports = router;
