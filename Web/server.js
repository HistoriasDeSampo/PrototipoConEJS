//jshint esversion:6

const express = require("express");

const app = express();

app.set('view engine', 'ejs');

app.use(express.static("public"));

app.get("/", function(req, res){
  const msgs = require("./language/index/es.json")
  res.render("index", {msg:msgs});
  //res.redirect("/juicio-de-las-maquinas");
})

app.get("/en", function(req, res){
  const msgs = require("./language/index/en.json")
  res.render("index", {msg:msgs});
  //res.redirect("/juicio-de-las-maquinas");
})

app.get("/the-diurnal-origin", function(req, res){
  const msgs = require("./language/machines/en.json");
  res.render("pages/machines", {msg:msgs});
})

app.get("/el-origen-de-las-diurnas", function(req, res){
  const msgs = require("./language/machines/es.json");
  res.render("pages/machines", {msg:msgs});
})


app.listen(process.env.PORT || 3000, function(){
  console.log("Server started on port 3000");
});
