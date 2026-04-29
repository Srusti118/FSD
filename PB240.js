const express = require("express")
const app = express();
const multer = require("multer");

const upload = multer({ dest: "uploads"});

app.set("view engine" , "ejs");

app.get("/home" , (req,res) => {
    res.render("PB240");
})  // "/home" no path get j thai ! dont use post for this

app.post("/upload" , upload.array("myfile") , (req,res) => {
    if(req.files){
        res.type("text/html");
        for(i=0;i<req.files.length;i++){
            res.write(`<h1> ${req.files[i].originalname} is uploaded </h1>`);
        }

        res.send()
    }
    else
        res.send("No file")
})

app.listen(3000);