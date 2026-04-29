// Write an express.js script to define one JSON array of 3 objects 
// having members
// ‘name’ and ‘height’. height must be sorted descending order 
// according to name.

const express = require("express");
const  app = express()  

var students1 = [
    {
        "name" : "a1" , 
        "height" : 10
    } ,
    {
        "name" : "a2" , 
        "height" : 33
    } ,
    {
        "name" : "a3" , 
        "height" : 30
    } 

] ;


app.get("/" , (req,res) =>
{
    res.send(students1) //1 run krsu to sorted print thase as object same jagya pr kre chhe ,to avoid this parse stringyfy and all
}
);


// to avoid that 1
var s1 = JSON.parse(JSON.stringify(students1))
var sortedSt = s1.sort((a,b) => b.height - a.height) ;
console.log(s1)

app.get("/sort" , (req,res) =>
{
    res.send(s1) 
}
);

app.listen(3000 , "localhost" , 100 , console.log("server started"));