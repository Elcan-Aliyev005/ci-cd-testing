import { useEffect, useState } from "react"


function App() {

const [state, setState]= useState<string>("")




useEffect(()=>{
  setState('Americano')
},[])


  return (
    <div>{state}</div>
  )
}

export default App

