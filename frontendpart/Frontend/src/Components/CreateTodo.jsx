//1st way- we can store the data in Backend using React hook
//but due to this hook we render infinite render so we will use useEffect hook
//2nd way- we can use dom manipulation like 
/*fetch("http://localhost:5000/todos", {
                method: "POST",
                body: JSON.stringify({
                    title: document.getElementById("title"),
                    description: document.getElementById("des"),
                }),
                headers: {
                    "Content-Type": "application/json"

                }*/
import { useState } from "react"
export function CreateTodo() {
    // We Use useState hook to store the data in backend
    const [title, setTitle] = useState([""])
    const [description, setdescription] = useState([""])
    return <div>
        <h1>Todo Application</h1>
        <input id="title" style={{
            padding: 10,
            margin: 10,
            fontSize: 25,
            fontWeight: "bold"
        }} type="text" placeholder="Title" onChange={(e) => {
            const value = e.target.value;
            setTitle(value)
        }} ></input><br />
        <input id="des" style={{
            padding: 10,
            margin: 10,
            fontSize: 25,
            fontWeight: "bold"
        }} type="text" placeholder="Description" onChange={(e) => {
            const value1 = e.target.value
            setdescription(value1)
        }}></input><br />
        <button style={{
            padding: 10,
            margin: 10,
            fontSize: 25,
            fontWeight: "bold"
        }} type="submit" onClick={() => {
            fetch("http://localhost:5000/todos", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description,
                }),
                headers: {
                    "Content-Type": "application/json"

                }
            }).then(async (res) => {
                const json = await res.json()
                alert("Todo Added")
            })
        }}> Add a Todo</button>
    </div >
}

