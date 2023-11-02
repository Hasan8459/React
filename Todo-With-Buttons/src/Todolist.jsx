import axios from "axios"
import React from "react"

export default function Todolist({tasks,fetchTasks})
{
    
    const DeleteTask = async(id)=>
    {
        try {
        await axios.delete(`http://localhost:5000/tasks/${id}`)
        fetchTasks()
        } catch (error) {
           console.log(error) 
        }
    }

    return(
        <div>
            {tasks.map((task)=>(
                <div key={task.id}>
                <span>{task.title} </span>
                <button onClick={()=> DeleteTask(task.id)} >Delete</button>
                </div>
            ))}
        </div>
    )
}