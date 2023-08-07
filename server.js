const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

const shopRouter = require("./routes/shop");
const adminRouter = require("./routes/admin");
const contactRouter = require("./routes/contact");
const rootDir = require("./util/path");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, "public")));

app.use("/admin", adminRouter);
app.use("/shop", shopRouter);
app.use(contactRouter);

app.use((req, res, next) => {
  // res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

app.listen(3000);
