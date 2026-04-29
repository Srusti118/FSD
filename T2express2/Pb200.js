const express = require("express");
const app = express();
const cp = require("cookie-parser");

app.use(cp());

app.use(express.static(__dirname ,{index :"PB200.html"}));

app.get("/submit" , (req,res) =>
{
    // var name = req.query.name;
    // ...... can continue like this , here the name of variable can be anything .__dirname

    // but the better alternative :
    // here the name of variablewill be same as the value of input field

    var{name , email , mess , rating} = req.query ; 
    var feedback = {name , email , mess , rating} ;

    res.cookie("feedback" , feedback , {maxAge:10000});
    res.send(`<a href = "/show"> Show feedback </a>`);
}) ;

app.get("/show" , (req,res) =>
{
    res.send(`
        User name : ${req.cookies.feedback.name} <br> <br>
        Email : ${req.cookies.feedback.email} <br> <br>
        Message : ${req.cookies.feedback.mess} <br> <br>
        Rating : ${req.cookies.feedback.rating} <br> <br>

        <form action = "/">
        <input type = "submit" value="Logout">
        </form>

        `)
}) ;

app.listen(5000);