const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Todos");
const TodoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,

})
const todo = mongoose.model("Todo", TodoSchema)
module.exports = { todo }