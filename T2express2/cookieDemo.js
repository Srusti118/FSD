// server creates the cookie , stored in client's PC
// cookie response ma set thai [res.cookie]
// stores in chrome / storage / cookies
// cookie request ma thi read thai  [req.cookies] 's' chhe
// cookie expire at the end of the session . 
// sensitive data stores in session . As cookie no data can be seen everywhere
// session ---> server ma store thai 

// cookie ma expiry , maxAge , 
// res ma j delete can be done 

const express = require("express");
const app = express();
const cp = require("cookie-parser"); //middleware chhe

app.use(cp()) ; //() chhe global middleware by using app.use()

app.get("/" , (req , res)=>
{
    res.cookie("abc" , "some data"); //seting cookie comp am j thai 
                                     // cant res.cookie.abc = "hi"
    res.send(req.cookies); //getting the cookies 
                          // everything will be in string type [key as well as value]
    
});

app.listen(3000);