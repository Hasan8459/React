import { useState } from "react";
import axios from "axios";

function AddTask({fetchTasks})
{
    const [inputgot,setinputgot] = useState("")
    

    const AddTask = async()=>
    {
        try {
            await axios.post(`http://localhost:5000/tasks`,{
                title:inputgot,
                completed:false,
            });
            fetchTasks()
            setinputgot("")
        } catch (error) {     
        }
    }

    return(
        <div>
            <input type="text" value={inputgot} onChange={(e)=>setinputgot(e.target.value)}/>
            <button onClick={AddTask} >Add</button>
        </div>
    )
}

export default AddTask;