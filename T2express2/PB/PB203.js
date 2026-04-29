const express = require("express");
const app = express();
const cp = require("cookie-parser");
app.use(cp());

//to ensure postd.html can be viewed in server
app.use(express.static(__dirname, {"index" : "postd.html"}));

//post method
app.use(express.urlencoded({"extended":true}))


app.post("/calc" , (req,res) =>{

    var n1 = req.body.n1;
    var n2 = req.body.n2;
    var op = req.body.sel;

    if(n1<0 || n2<0 || !n1 || !n2)
    {
        res.send(`<h1> Please enter the valid number </h1>`)
    }

    else if (!op)
    {
        res.send(`<h1> You have not selected any formula </h1>`)
    }
    else
    {

      res.cookie("n1" , n1 , {maxAge : 50000});
      res.cookie("n2" , n2 , {maxAge : 50000});

      //fetch from cookie
      n1 = parseInt(req.cookies.n1);
      n2 = parseInt(req.cookies.n2);



    if (op == "add")
    {
        result = n2 + n1
    }

    else if (op == "sub")
    {
        result = n1 - n2
    }

     else if (op == "mul")
    {
        result = n1 * n2
    }
    
     else if (op == "div")
    {
        result = n1 / n2
    }

    res.send(`${op} is ${result}`);

      

    }




});

app.listen(3001)