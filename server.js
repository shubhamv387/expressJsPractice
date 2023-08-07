const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

const shopRouter = require("./routes/shop");
const adminRouter = require("./routes/admin");
const contactRouter = require("./routes/contact");
const rootDir = require("./util/path");

const errorPageController = require("./controller/error404");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, "public")));

app.use("/admin", adminRouter);
app.use("/shop", shopRouter);
app.use(contactRouter);

app.use(errorPageController.errorPage);

app.listen(3000);
