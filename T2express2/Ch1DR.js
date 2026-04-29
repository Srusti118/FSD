//Dynamic Routing
const express = require("express");
const  app = express() ;

app.get("/day/:day" ,  (req,res) =>
{
  res.send(req.params); //will work like end only . 
})

app.get("/month/:month" ,  (req,res) =>
{
  res.send(`Month is ${req.params.month}`);  //json object nu fetch kryu
});

app.get("/day/:d/month/:m/year/:y" , (req,res) =>
{
  res.send(`write whatever`);  
});

//last ma here as or aiya catch thai jase
app.all(/\w*/ ,  (req,res) =>
{
  res.status(404).send("Error")
})

app.listen(3000);

