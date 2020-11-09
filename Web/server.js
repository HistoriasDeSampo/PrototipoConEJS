//jshint esversion:6

const express = require("express");

const app = express();

app.set('view engine', 'ejs');

app.use(express.static("public"));

app.get("/", function(req, res){
  //res.render("index", {PageTitle: "Wellcome"});
  res.redirect("/machines-turnabout");
})

app.get("/machines-turnabout", function(req, res){
  const msgs = require("./language/machines/en.json");
  res.render("pages/machines", {msg:msgs});
})

app.get("/juicio-de-las-maquinas", function(req, res){
  const msgs = require("./language/machines/es.json");
  res.render("pages/machines", {msg:msgs});
})


app.listen(process.env.PORT || 3000, function(){
  console.log("Server started on port 3000");
});
