const express = require('express');

const app = express();

app.set('view engine','ejs');
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.post("/",(req,res) =>{
    console.log(req.body);
});

app.get("/login",(req,res) =>{
    res.render("login");
});

// app.post("/login",(req,res) =>{
//     console.log("abc");
//     console.log(req.body);
// })

app.listen(3000);
