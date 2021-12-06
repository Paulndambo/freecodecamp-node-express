const express = require("express");
const morgan = require("morgan");

const peopleRouter = require("./routes/people");
const authRouter = require("./routes/auth");

const app = express()
const PORT = process.env.PORT || 5000
let {people} = require("./data")

//static assets
app.use(express.static('./methods-public'))

//parse form data
app.use(express.urlencoded({extended: false}))

app.use(express.json())

app.use("/api/people", peopleRouter)
app.use("/api/auth", authRouter)



app.listen(PORT, () => {
    console.log(`Server Running on http://localhost:${PORT}`)
})