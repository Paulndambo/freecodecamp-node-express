const express = require("express")
const app = express();
const PORT  = process.env.PORT | 5000

const taskRouter = require("./routes/tasks")


//middlesware

app.use(express.json())

//routes
app.get("/", (req, res) => {
	res.send("Todo App")
})


app.use("/api/v1/tasks", taskRouter)


app.listen(PORT, (req, res) => {
	console.log(`Server Running On http://localhost:${PORT}`)
})
