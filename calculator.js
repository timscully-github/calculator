// jshint esversion:6

const express = require("express");

const app = express();

app.get("/", function(req, res){
  res.send("This is the root");
});

app.listen(3000, function() {
  console.log("Starting server on port 3000");
});
