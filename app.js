var express = require("express");
var parser = require("body-parser");
var api = require("./routes/routes.js");
var app = express();

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.use(express.static("./static"));
app.use("/api", api);


var server = app.listen(8000, function() {
console.log("ExpressJS server running on port 8000");
});