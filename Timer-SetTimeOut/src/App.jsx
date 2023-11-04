import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(()=>{
    setTimeout(() => {
      setCount(count+1)
    }, 1000);
  },[count])

  return (
    <>
      <h2>Timer-With-SetTimeOut</h2>
      
      <h2>{count}</h2>
     </>
  )
}

export default App
