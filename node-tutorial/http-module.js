const http = require("http");

const server = http.createServer((req, res)=> {
	if(req.url=== '/'){
		res.end("Welcome to Node Coding!!!!!!")
	}
	if (req.url=== '/about') {
		res.end("We are a growing company though!!.")
	}
})

server.listen(5000)