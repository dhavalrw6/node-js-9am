const fs = require('fs');
const requestHandler = (req, res) => {
    console.log(req.url);
    let fileName = ''
    switch (req.url) {
        case '/':
            fileName = 'index.html';
            break;
        case '/about':
            fileName = 'about.html';
            break;
        case '/contact':
            fileName = 'contact.html';
            break;
        default:
            fileName = 'error.html';
    }

    fs.readFile(fileName, (err, result) => {
        if (!err) {
            res.end(result);
        }
    })

}

module.exports = requestHandler;