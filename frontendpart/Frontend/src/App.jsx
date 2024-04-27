import { useState } from 'react'
import { CreateTodo } from './Components/CreateTodo'
import { Todo } from './Components/Todo'

function App() {
  //hit the backend and get the current todos from the database
  const [todos, setTodos] = useState([]);
  //fetch the todos from the backend
  const data = fetch("http://localhost:5000/todos", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
  data.then(async (data) => {
    const respons = await data.json()
    setTodos(respons)
  })
  return (
    <div>
      <CreateTodo />
      <Todo todos={todos}></Todo>
    </div>
  )
}
export default App
