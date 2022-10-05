// https://funny-lime-sea-urchin.cyclic.app
var express = require("express");
var app = express();

var path = require("path");
var HTTP_PORT = process.env.PORT || 8080;

function getit_started() {
    console.log("Express http server listening on: " + HTTP_PORT);
}

app.use(express.static('public'));


app.get("/", function (req, res) {
    var html;
    html = "<h1> Declaration (Instructions: text size in heading 2):</h1>"
    html += "<br>Name: Kelvin Vora<br><br>Student Number: 157616210<br><br>"
    html += "<a style=font-size:20px href= /test1>Go to test1</az>"

    res.send(html);
});

app.get("/test1", function(req, res) {
    res.sendFile(path.join(__dirname, "./views/test1.html"));
});

app.listen(HTTP_PORT, getit_started);