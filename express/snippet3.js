const express = require("express");
const app = express()
const PORT = process.env.PORT || 5000


app.get("/", (req, res) => {
    res.send("Hello World")
    console.log("Hello World")
})

app.get("/about", (req, res) => {
    res.send("About Page")
})

app.all("*", (req, res) => {
    res.status(404).send("Resource Not Found")
})

app.listen(PORT, () => {
    console.log(`Server Running on http://localhost:${PORT}`)
})