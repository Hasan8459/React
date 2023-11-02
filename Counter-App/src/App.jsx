import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increase = ()=>
  {
    setCount(count+1)
  }

  useEffect(()=>
  {
    document.title=`Count is ${count}`
  },[count])

  return (
    <>
     <h2>Count : {count} </h2>
     <button onClick={increase} >Increase</button>
      
    </>
  )
}

export default App
