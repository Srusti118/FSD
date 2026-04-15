const express = require("express");
const  app = express() ;
const path = require("path")

app.get("/" ,  (req,res) =>
{
  res.send(`<img src = "lion.jpg">`);
});

// app.use(express.static(__dirname)); //most imp server ne folder mukyu 
//                                     // doesnt send the sub folder 

// if subfolder ma chhe then use 
app.use(express.static(path.join(__dirname , "public")));


app.listen(3000);

