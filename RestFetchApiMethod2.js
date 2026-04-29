//run this 
const express = require("express");
const app = express();
const api = require("./RestApiMethod2.js");

app.use("/" , api); //if not written router doesnt run
app.listen(3001,() =>
    console.log("Server Started")

)