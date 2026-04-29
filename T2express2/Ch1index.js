const express = require("express");
const  app = express()   // returns an object

app.get("/" , (req,res) =>
{

res.set('content-type' , 'text/html');
// res.type('text/html')
// res.setHeader('content-type' , 'text/html')
res.write('<h1>Hello world </h1>');
res.end("Last line"); //should not use it 
//res.send("Last line"); // will send the header again so thats the issue
//res.send() //will work like end only . 
});

app.get("/aboutUs" , (req,res) =>
{
    // res.set('content-type' , 'text/html');
    // res.write('<h1>About Us </h1>');
    // res.send()
    res.send('<h1>About Us </h1>') 

    
});

app.get("/api" , (req,res) =>
{
    var s1 = {
        "name" : "Srusti" ,
         "roll no" : 20
    }

    // res.send("data" + s1); //data [object object] as string + object
    res.send(s1)
    // res.send() cant write send twice as ek vaar with arguement chhe 

    
});


app.listen(3000 , "localhost" , 100 , console.log("Server Started"));