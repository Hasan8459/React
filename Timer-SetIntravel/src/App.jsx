import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  
  const [count,setcount] = useState(0)

  useEffect(()=>{
   const intravelID = setInterval(()=>{
      setcount(count+1)
    },1000)
    function clearSome()
    {
      clearInterval(intravelID)
    }
    return clearSome
  },[count])
 
  return (
    <>
    <h2>Timer-With-SetIntravel</h2>
    <h1>{count}</h1>
    </>
  )
}

export default App
