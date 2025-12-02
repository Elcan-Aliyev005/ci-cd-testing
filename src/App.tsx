import { useEffect, useState } from "react"


function App() {

const [state, setState]= useState<string>("")




useEffect(()=>{
  setState('Salam')
},[])


  return (
    <div>{state}</div>
  )
}

export default App

