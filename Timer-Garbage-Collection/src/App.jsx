import { useState } from 'react'
import './App.css'
import Timer from './Timer'

function App() {
  
  const [show,setshow] = useState(false)
 
  return (
    <>
    <button onClick={()=>
      setshow(!show)} >{show ? "Hide" : "Show"} Timer</button>
    {!show && <h2>Timer stop</h2>}
    {show && <Timer/> }
    </>
  )
}


export default App
