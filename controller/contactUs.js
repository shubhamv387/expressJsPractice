const path = require("path");
const rootDir = require("../util/path");

exports.getContactUs = (req, res, next) => {
  //   console.log("in another middleware!");
  //res.sendFile(path.join(__dirname,'../', "views", "contact-us.html"));
  res.sendFile(path.join(rootDir, "views", "contact-us.html"));
};

exports.getSuccess = (req, res, next) => {
  res.send("<h1>Form successfuly filled</h1>");
};
