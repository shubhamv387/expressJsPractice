const path = require("path");
const rootDir = require("../util/path");

exports.errorPage = (req, res, next) => {
  // res.status(404).sendFile(path.join(__dirname, "views", "404.html"));

  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
};
