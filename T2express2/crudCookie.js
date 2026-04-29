const express = require("express");
const app = express();
const cp = require("cookie-parser"); //middleware chhe

app.use(cp()) ; 

app.get("/" , (req , res)=>
{
    res.cookie("fname" , "srusti");
    res.cookie("lname" , "patel");
    res.cookie("abc" , "some data");

    //tarat delete
    res.clearCookie("abc"); //deletes a cookie , deleted by server

    //thoda time pachhi jate j delete thai jai 
    //exoree na jagya pr biju kasu b lakhsu to b error nai ave just cookie delete nai thai 
    res.cookie("hobby" , "tennis" , {"expires" : new Date(Date.now()+5000)}); //5000 here is in millisecond

    //thoda time pachhi jate j delete thai jai 
    res.cookie("marks" , 99 , {"maxAge" : 2000});
    console.log(req.cookies.fname);
    
    res.send(req.cookies); 
    
});

app.listen(3000);

//RELOAD KRIS TO PACHHI DELETED COOKIE B AI JASE
//COOKIE NA NAME MA NO SPACE