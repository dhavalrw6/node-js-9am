const bodyParser = require('body-parser');
const express = require('express');
const db = require('./config/database');
const path = require('path');
const port = 8081;

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('assets/client'));
app.use(express.static('assets/admin'));
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/uploads', express.static(path.join(__dirname + '/uploads')))

app.use('/', require('./routers'));


app.listen(port, (err) => {
    if (!err) {
        db();
        console.log("server start.");
        console.log("http://localhost:" + port)
    }
})