import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

async function getdata()
{
  try {
    let ans = await axios.get(`https://reqres.in/api/users`)
    return ans
  } catch (error) {
    return error
    console.log(error)
  }
}

function App() {
  const [loading,setloading] = useState(false)
  const [todos,settodos] = useState([])
  const [error,seterror] = useState(null)

async function GetTodos()
  {
    setloading(true)
    try { 
      let resp = await getdata()
      //console.log(resp.data.data)
      settodos(resp.data.data)
      
      setloading(false)
    } catch (error) {
      seterror(error)
      setloading(false)
    }
   
  }

  useEffect(()=>{
    GetTodos()
  },[])

  if(loading)
  {
    return <h1>Loading .....</h1>
  }
  if(error)
  {
    return <h1>Something went wrong</h1>
  }
  

 return (
    <>
      {/* <h2>Gets Post on Click</h2>
      <button onClick={GetTodos} >Get Post</button> */}
      <div className='something'>
      {todos && todos.length > 0 && 
      
        todos.map((todo)=>(
            <div key={todo.id} >
              
              <img src={todo.avatar} alt="photo" />
              <h2>Name : {todo.first_name + todo.last_name}</h2>
              <p>email :  {todo.email} </p>

            </div>
      ))
      }
      </div>
    </>
  )
}

export default App
