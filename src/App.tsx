import { useEffect, useState } from "react"


function App() {

const [state, setState]= useState<string>("")




useEffect(()=>{
  setState('Salam')
},[])


  return (
    <div>App</div>
  )
}

export default App

