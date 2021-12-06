const express = require("express");
const path = require("path");
const app = express()
const PORT = process.env.PORT || 5000

app.use(express.static("./express/public"))

//app.get("/", (req, res) => {
//    res.send("Hello World")
//    console.log("Hello World")
//})


app.all("*", (req, res) => {
    res.status(404).send("Resource Not Found")
})

app.listen(PORT, () => {
    console.log(`Server Running on http://localhost:${PORT}`)
})