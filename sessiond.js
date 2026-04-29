const express = require("express");
const app = express();
const session = require("express-session");

//server side code lakhye chhe 
app.use(session(
    {
        secret : "mykey" ,     //passcode hase to j enter kri shake chhe , 
        resave : false , //cannot update session information
        saveUninitialized : false , //value vagar no data save nai thai
        cookie : {"maxAge" : 1*24*60*60*100}  // 1 day sudhi last krse -- cookie for session Id
    }
));

app.get("/" , (req,res) =>
{
    if(!req.session.visits){
        req.session.visits = 1
        res.send(`<h1>Hello first time user</h1>`);
    }
    else{
        req.session.visits++;
        res.send(`<h1> you visited ${req.session.visits} times </h1>`);
    }

});

app.listen(3001);