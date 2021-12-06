const express = require("express");

const app = express()
const PORT = process.env.PORT || 5000

// req => middleware => res

const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const ip = req.ip;
    const time = new Date().getFullYear()
    console.log(method, url, ip, time)
    next()
}

app.get("/", logger, (req, res)=> {
    res.send("Home")
})

app.get("/about", logger, (req, res) => {
    res.send("About")
})

app.listen(PORT, () => {
    console.log(`Server Running on http://localhost:${PORT}`)
})