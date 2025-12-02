import { useEffect, useState } from "react"


function App() {

const [state, setState]= useState<string>("")




useEffect(()=>{
  setState(32323)
},[])


  return (
    <div>{state}</div>
  )
}

export default App

