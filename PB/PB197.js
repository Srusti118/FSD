// write a sript to meet foll requirements. 
// 1) create index.html page and open it on localhost
// 2) after clicking submit button, it should jump to 
// savesessionpage.store username in session.
// 3) After saving session, redirect to fetchsession page and read session 
// value. put a logout link button here.
// 4) destroy the session on this page and redirect to index.html

const express = require("express");
const app = express();
const session = require("express-session");

app.use(express.static(__dirname, {"index" : "PB197.html"}));

app.use(session(
    {
        secret : "mykey"
    }
));

app.get("/savesession" , (req,res) =>
{
   req.session.user = req.query.un ;
   res.redirect("/fetchsession");
   //as we are redirecting , anything below this is unreachable !
});

app.get("/fetchsession" , (req,res) =>
{
   res.send(`Username is ${req.session.user} <br><br>
    <a href = "/logout"> LOGOUT </a>`) 
});

app.get("/logout" , (req,res) =>
{
    req.session.destroy();
    res.redirect("/");
});

app.listen(3001);

