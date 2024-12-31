const express = require('express');
const db = require('./config/database');
const bodyParser = require('body-parser');
const userModel = require('./models/userSchema');

const app = express();

const port = 3000;

app.set('view engine', 'ejs');
// {extended:true} is used to parse the json data
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/user/create', (req, res) => {
    // console.log(req.body);
    // res.end("data submited.");

    let obj = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        terms: req.body.terms
    }

    userModel.create(obj).then((data) => {
        console.log(data);
        console.log("User Created.");
        return res.redirect('/');
    }).catch((err) => {
        console.log(err.message);
        return res.end(err.message);
    })
})

app.get('/', (req, res) => {
    return res.render('index');
})


app.listen(port, (err) => {
    if (!err) {
        db;
        console.log("server started.");
        console.log("http://localhost:" + port);
    }
})