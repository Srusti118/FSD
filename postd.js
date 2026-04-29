const express = require("express");
const app = express();
app.use(express.urlencoded({"extended":true}))

app.use(express.static(__dirname, {"index" : "postd.html"}));

app.post("/calc" , (req,res) =>{

    n1 = parseInt(req.body.n1)
    n2 = parseInt(req.body.n2)

    if (req.body.sel == "add"){
        result = n2 + n1
    }
    else if (req.body.sel == "sub")
    {
        result = n1 - n2
    }
     else if (req.body.sel == "mul")
    {
        result = n1 * n2
    }
     else if (req.body.sel == "div")
    {
        reqult = n1 / n2
    }


    res.send(`${req.body.sel} of  
         ${n1} 
        and ${n2} is ${result} 
        `)
});

app.listen(3000)









// get - query 
// post - body