const express = require("express");
const { createTodo, updateTodo } = require("./zod.validate");
const { todo } = require("./db");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors")

app.use(express.json())
app.use(cors())


app.post("/todos", (req, res) => {
    const Userdata = req.body;
    // console.log(Userdata)

    //zod verification
    // const ZodValidateData = createTodo.safeParse(Userdata);
    // console.log(ZodValidateData)
    // console.log(ZodValidateData.success)

    // if (!ZodValidateData.success) {
    //     res.status(411).json({
    //         msg: "You have entered wrong credentials"
    //     })
    // } else {
    //     res.json("right")
    // }
    //database 
    const user = new todo({
        title: Userdata.title,
        description: Userdata.description,
        completed: false,
    });
    user.save().then((result) => {
        console.log("record saved successfully")
    }).catch((err) => {
        console.log("Error in database")
    })
    res.json({
        msg: "Todo has been created and saved successfully in databse"
    })
})

// update the Todo
app.put("/completed", (req, res) => {
    const updatedTodo = req.body;
    const ZodUpdatedData = updatedTodo.safeParse(req.body);
    if (!ZodUpdatedData.success) {
        req.json({
            msg: "Todo has been updated"
        })
    } return;
    // mark as completed
    const id = req.body.id;
    const findUser = todo.update({
        _id: id
    },
        {
            completed: true
        })
    res.json({
        msg: "Todo has been updated"
    })
})

// get all todo on screen 
app.get("/todos", async (req, res) => {
    const todos = await todo.find();
    res.json(todos)
})

app.listen(5000, () => {
    console.log("port is listening at port number 5000")
})