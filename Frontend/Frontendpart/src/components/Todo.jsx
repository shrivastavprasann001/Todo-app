// here all the todos are rendered 

//todos is a array of objects 
export function Todo({ todos }) {
    return <div>
        {todos.map(function (todo) {
            return <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button>{todo.completed == true ? "completed" : "Mark as completed"}</button>
            </div>
        })}
    </div>
}