import { useReducer, useState } from "react"

const HookUseReducer = () => {

    const [number, dispatch] = useReducer((state, action) => {
        return Math.random(state)
    })

    const initialTasks = [
        { id: 1, text: "Dormir" },
        { id: 2, text: "Comer" }
    ]

    const taskReducer = (state, action) => {
        switch (action.type) {
            case "ADD":
                const newTask = {
                    id: Math.floor(Math.random() * 1000),
                    text: taskText
                }
                setTastText('')

                return [...state, newTask]

            case "DELETE":
                return state.filter((task) => task.id !== action.id)
            default:
                return state;
        }

    }
    const [taskText, setTastText] = useState('')
    const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks)


    const handleSumbit = (e) => {
        e.preventDefault()

        dispatchTasks({ type: "ADD" })
    }

    const removeTask = (id) => {
        dispatchTasks({type: "DELETE", id})
    }


    return (
        <div>
            <h2>useReducer</h2>
            <p>Número: {number}</p>
            <button onClick={dispatch}>Alterar número!</button>
            <h3>Tarefas: </h3>
            <form onSubmit={handleSumbit}>
                <input type="text" onChange={(e) => setTastText(e.target.value)} value={taskText}  placeholder="Digite a nova tarefa!"/>
                <input type="submit"/>
            </form>
            {tasks.map((task) => {
                console.log(task.id, task.text);
                return <li key={task.id} onDoubleClick={()=> removeTask(task.id)}>{task.text}</li>;
            })}
            <hr />
        </div>
    )
}

export default HookUseReducer