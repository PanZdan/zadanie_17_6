var express = require("express");
var app = express();

app.set("view engine", "pug");//kreator widoków
app.set("views", "./views");//katalog widoków

app.get("/", function(req, res) {
  res.render("index");
});

app.get("/auth/google", function(req, res) {
  const response = {
    login: req.query.login
  };
  res.render("loginsite", response);
});

app.listen(3000);
app.use(function(req, res, next) {
  res.status(404).send("Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!");
});
