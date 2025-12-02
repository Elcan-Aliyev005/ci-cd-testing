import { useEffect, useState } from "react"


function App() {

const [state, setState]= useState<string>("")




useEffect(()=>{
  setState(195)
},[])


  return (
    <div>App</div>
  )
}

export default App