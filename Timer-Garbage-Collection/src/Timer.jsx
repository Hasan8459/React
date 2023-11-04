import { useState,useEffect } from "react"

function Timer(){
    const [Count, setCount] = useState(1)

  useEffect(()=>{
   const Intravelid = setInterval(()=>{
      setCount((prevCount) =>{
         return (prevCount + 1 )})
    },1000)

    const cleanup = ()=>{
      clearInterval(Intravelid)
    }
    return cleanup
  },[])

  return (
    <>
    <h2>Timer Start</h2>
    <h1>{Count} </h1>
    </>
  )
}

export default Timer