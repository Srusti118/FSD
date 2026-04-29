const express = require("express");
const  app = express() ;
const path = require("path");
app.use(express.static(path.join(__dirname ,"../frontend")));

app.listen(3000);

// //earlier when we had multiple folders
// const express = require("express");
// const  app = express() ;
// const path = require("path");

// //if index.html hou to normall thai jai without second arguement
// //app.use(express.static(path.join(__dirname ,"html") , {"index" : "abc.html"}));
// app.use(express.static(path.join(__dirname ,"html")));
// app.use(express.static(path.join(__dirname , "css")));
// app.use(express.static(path.join(__dirname , "js")));
// app.use(express.static(path.join(__dirname , "public")));

// // app.get("/" , (req,res)=>{
// //     res.sendFile(__dirname + "/index.html");
// // })