const bodyParser = require('body-parser');
const express = require('express');

const port = 8081;

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('assets/client'));
app.use(express.static('assets/admin'));
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', require('./routers'));


app.listen(port, (err) => {
    if (!err) {
        console.log("server start.");
        console.log("http://localhost:" + port)
    }
})