const express = require("express");
const app = express();

app.get("/" , (req,res,next) =>
{
    console.log("Hello 1");
    // res.send("<h1>Home </h1>" + new Date().toLocaleTimeString()) //bad practice dont send here error nai ave 
                                                                    // also take careif consecutive 2 vaar res.send na ave
    next();
});

app.get("/" , (req,res,next) =>
{
    console.log("Hello 2");
    next();
});


app.get("/" , (req,res) =>
{
    console.log("Final");
    res.send("<h1>Final </h1>" + new Date().toLocaleTimeString())
});

app.listen(3005);
