const z = require("zod")

const creattodo = z.object({
    task: String(),
    description: String()
})

const updatetodo = z.object({
    id: String()
})
module.exports = {
    creattodo, updatetodo
}