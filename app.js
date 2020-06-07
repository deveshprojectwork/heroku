// in sublime
var express = require("express");
var port = process.env.PORT || 3000;
var app = express();
app.get("/", function (req, res) {
 res.send(JSON.stringify({ Hello: "World this is my workd"}));
});
app.listen(port, function () {
 console.log(`Example app listening on port !`);
});