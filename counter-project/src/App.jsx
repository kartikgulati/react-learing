import { useState } from 'react'

import './App.css'

function App() {


  //let counter = 5

  let [counter,setCounter] = useState(0)

  const addValue= () =>{
    console.log("clicked", counter, 'random' ,Math.random())
    setCounter(counter+1)
  }

  const removeValue = () =>{
    console.log("clicked", counter, 'random' ,Math.random())
    setCounter(counter-1 )
  }

  return (
    <>
      <h1>Counter Project</h1>
      <h2>Counter value:{counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br/>
      <button onClick={removeValue}>remove value</button>

    </>
  )
}

export default App
