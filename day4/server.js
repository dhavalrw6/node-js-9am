const http = require('http');
const request = require('./requestHandler');

const port = 8081;



const server = http.createServer(request);

server.listen(port, (err) => {
    if (err) {
        console.log("Server Not start.");
        return false;
    }
    console.log("server start.");
    console.log("http://localhost:" + port);

})