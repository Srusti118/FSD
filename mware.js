const express = require("express");
const app = express();
function f1(req,res,next)
{
    console.log("Hello from middleawre " + new Date().toLocaleTimeString());
   // next() //ensures k function call thai and not get stuck to the fuction
}

//must write before app.get(routes)
app.use(f1); //global middleware

app.get("/" , (req,res) =>
{
    res.send("<h1>Home </h1>" + new Date().toLocaleTimeString())
});

app.get("/about" , (req,res) =>
{
    res.send("<h1>About </h1>" + new Date().toLocaleTimeString())
});

app.listen(3005);