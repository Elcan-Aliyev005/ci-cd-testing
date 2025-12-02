import { useEffect, useState } from "react"


function App() {

const [state, setState]= useState<string>("")




useEffect(()=>{
  setState('Hello world2')
},[])


  return (
    <div>{state}</div>
  )
}

export default App

