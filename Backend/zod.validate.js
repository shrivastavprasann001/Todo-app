const z = require("zod")

const createTodo = z.object({
    title: String(),
    description: String()
})

const updateTodo = z.object({
    id: String()
})
module.exports = {
    createTodo, updateTodo
}