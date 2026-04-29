// write an express.js script to load an HTML file having username and 
// password and submit button. On clicking submit button. It should 
// jump on "check" page using "POST" method. If username is "admin" 
// , then jump on next middleware to print "welcome… admin" , if 
// username is not "admin" , then stay on same middleware to print 
// "warning msg" in red color.

//password k secret key ave t post j use kro 
const express = require("express");
const app = express();
app.use(express.urlencoded({"extended":true}))

app.get("/" , (req,res)=>
{
   res.send(`<html>
    <form method = "POST" action = "/check">
    <input type="text" name="username1">
    <input type = "password" name="password1">
    <input type ="submit" value="submit1">
    </form></html>`)
});

app.post("/check" , (req,res,next)=>
{
    if(req.body.username1 == "admin")
    {
        console.log("Username is admin");
        next()
    }

    res.send(`<h1 style = "color:red"> Warning </h1>`)

});

app.post("/check" , (req,res,next)=>
{
    res.send("<h1>Welcome..end</h1>");
    next()
});
app.post("/check" , (req,res)=>
{});


app.listen(3000)