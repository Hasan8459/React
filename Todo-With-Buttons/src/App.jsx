import { useState ,useEffect} from 'react'
import axios from 'axios'
import './App.css'
import AddTask from './AddTask'
import Todolist from './Todolist'

function App() {
  const [tasks,settasks]     = useState([])
  const [loading,setloading] = useState(false)
  const [error,seterror]     = useState(null)
  const [page,setpage]       = useState(1)

  const fetchTasks = async ()=>
  {
    setloading(true)
    try {
      const responce = await axios.get(`http://localhost:5000/tasks?_limit=3&_page=${page}`)
      settasks(responce.data)
    } catch (error) {
      seterror(error)
    }
    finally{
      setloading(false)
    }
  }

  useEffect(()=>{

    fetchTasks()
  },[page])

  return (
    <>
    <div className='App'>
      {error && <div>Error : {error} </div>}

      {loading ? (<div></div>) : (
        <Todolist tasks={tasks} fetchTasks={fetchTasks}/>
      )}
        <AddTask fetchTasks={fetchTasks}/>
        <button disabled={page === 1} onClick={()=> setpage(page-1)} >Prev</button>
        <span>{page} </span>
        <button  onClick={()=> setpage(page+1)} >Next</button>

    </div>
     
    </>
  )
}

export default App
