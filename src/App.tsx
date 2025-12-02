import { useEffect, useState } from "react"


function App() {

const [state, setState]= useState<string>("")




useEffect(()=>{
  setState(323233232)
},[])


  return (
    <div>{state}</div>
  )
}

export default App

