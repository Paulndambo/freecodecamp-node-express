const express = require("express");
const morgan = require("morgan");

const app = express()
const PORT = process.env.PORT || 5000
const logger = require("./logger")
const authorize = require("./authorize");
// req => middleware => res

//app.use(logger)
//app.use([logger, authorize])

app.use(morgan('tiny'))

app.get("/", (req, res)=> {
    res.send("Home")
})

app.get("/about", (req, res) => {
    res.send("About")
})

app.get("/products", (req, res) => {
    res.send("Products")
})

app.listen(PORT, () => {
    console.log(`Server Running on http://localhost:${PORT}`)
})