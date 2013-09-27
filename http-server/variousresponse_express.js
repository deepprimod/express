var express = require("express");
var http = require("http");
var app = express();

app.all("*", function(request, response, next) {
  response.writeHead(200, { "Content-Type": "text/plain" });
  next();
});

app.get("/", function(request, response) {

  response.end(request.method + "Welcome to alen deep sir's homepage!");
});

app.get("/about", function(request, response) {
  response.end("Welcome to the about page!");
});
app.get("/hello/:xyz", function(req, res) {
  res.end("Hello, " + req.params.xyz + ".");
  // Fun fact: this has security issues
});

app.get("*", function(request, response) {
  response.end("404!");
});
app.get("/pqr", function(request, response) {
	response.redirect("/about");
});

http.createServer(app).listen(1337);