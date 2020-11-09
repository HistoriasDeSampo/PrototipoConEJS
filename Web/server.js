//jshint esversion:6

const express = require("express");

const app = express();

app.set('view engine', 'ejs');

app.use(express.static("public"));

app.get("/", function(req, res){
  res.render("index", {PageTitle: "Wellcome"});
})

app.get("/machines-turnabout", function(req, res){
  res.render("pages/machines", {PageTitle: "The Machine Turnabout"});
})

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
