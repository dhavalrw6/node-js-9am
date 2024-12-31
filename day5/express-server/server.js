const express = require('express');

const app = express();

const port = 8081;

app.get('/', (req, res) => {
    let file = __dirname + '/index.html';
    console.log(file);
    return res.sendFile(file);
})

app.get('/about', (req, res) => {
    let file = __dirname + '/about.html';
    return res.sendFile(file);
})

app.listen(port, (err) => {
    if (!err) {
        console.log("server start on Port.");
        console.log("http://localhost:" + port);
    }
})
