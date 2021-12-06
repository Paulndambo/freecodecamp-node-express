const http = require("http");
const { readFileSync } = require('fs')

//html files
const homePage = readFileSync("./express/index.html")

const server = http.createServer((req, res) => {
    console.log("The Server is Running");
    const url = req.url;
    if (url === "/") {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(homePage)
        res.end();
    } else if (url === "/contact") {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write('<h1>Contact Page</h1>')
        res.end();
    } else {
        res.writeHead(404, { 'content-type': 'text/html' })
        res.write('<h1>Page Not Found!</h1>')
        res.end();
    }

})

server.listen(5000)