const express = require("express")
const app = express();

app.use(express.json())

app.get("/todos", (req, res) => {
    res.send("Todo")
})
app.post("/todos", (req, res) => {

})

app.get("/completed", (req, res) => {

})

app.listen(5000, () => {
    console.log("port is listening at port number 5000")
})