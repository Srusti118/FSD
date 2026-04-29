const express = require("express");
const app = express();

app.use(express.static(__dirname, {"index" : "PB153.html"}));

app.get("/login" , (req,res) =>{

    if(req.query.rem == "yes")
        r = "yes"
    else 
        r = "no"

    res.send(`username : ${req.query.un} <br> 
        Password : ${req.query.pw} <br> 
        Remeber me : ${r} <br>
        Submit me : ${req.query.sub? "yes" : "no"} <br>
        <form action = "/">
        <input type = "submit" value = "logout">
        </form>
        `)
});

app.listen(3000)









// get - query 
// post - body