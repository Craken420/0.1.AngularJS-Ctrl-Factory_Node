// Required Modules
var express    = require("express");
var morgan     = require("morgan");
var app        = express();
var port = process.env.PORT || 3000;

var CryptoJS = require('crypto-js')
// var encrypted = CryptoJS.AES.encrypt('string', 'key');
// var encrypted = CryptoJS.SHA256(encrypted);
// console.log(encrypted)
// console.log(encrypted)

app.use(morgan("dev"));
app.use(express.static("./app"));

app.get("/", function(req, res) {
    res.sendFile("./app/index.html");
});

// Start Server
app.listen(port, function () {
    console.log( "Express server listening on port " + port);
});