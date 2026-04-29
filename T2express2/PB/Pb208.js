const express = require("express");
const app = express();
const cp = require("cookie-parser");
app.use(cp());
app.use(express.urlencoded({"extended":true}));
app.use(express.static(__dirname, {"index" : "PB208.html"}));

app.post("/saveCookie" , (req,res) =>
{
  const {un,em,Gender} = req.body ;
  const registered = {un,em,Gender};
  res.cookie("registered" , registered , {"maxAge" : 15000});
  res.send(`You submitted form 
    <a href="/details" > View Details </a>`)
});

//href thi ave chhe and je post na thai e get thai (surf more on this)
app.get("/details" , (req,res) =>
{
  res.send(`Name : ${req.cookies.registered.un} <br> <br>
    Email : ${req.cookies.registered.em} <br> <br>
    Gender : ${req.cookies.registered.Gender}`)
});

app.listen(3001);