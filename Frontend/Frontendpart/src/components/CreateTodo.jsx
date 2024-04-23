export function CreateTodo() {
    return <div>
        <h1>Todo Application</h1>
        <input style={{
            padding: 10,
            margin: 10,
            fontSize: 25,
            fontWeight: "bold"
        }} type="text" placeholder="Title"></input><br />
        <input style={{
            padding: 10,
            margin: 10,
            fontSize: 25,
            fontWeight: "bold"
        }} type="text" placeholder="Description"></input><br />
        <button style={{
            padding: 10,
            margin: 10,
            fontSize: 25,
            fontWeight: "bold"
        }} type="submit"> Add a Todo</button>
    </div >
}

