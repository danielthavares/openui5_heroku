var express = require("express");
var path = require("path");

var app = express();
app.use(express.static(path.join(__dirname, "dist")));

var port = process.env.PORT || 5000;
app.listen(port);

console.info("Server started " + port);
