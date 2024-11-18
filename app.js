const express = require('express');
const checkPassword = require('./routes/checkPassword');
// const addAccount = require('./models/login');
const db = require("./models/dbConnect");
const app = express();

app.set('view engine','ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//connect to the database




app.get("/login",(req,res) =>{
    res.render("login");
});

app.post("/",(req,res) =>{
    console.log(req.body);
});


app.use(checkPassword);
// app.use(addAccount);
// app.use(db);

app.listen(3000);
