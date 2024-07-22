import { useState } from 'react'


function App() {
  const [color, setColor] = useState("grey")
  // const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 border-2 rounded-2xl" style={{backgroundColor:"white"}}>
        <div className="flex border flex-wrap justify-center rounded-3xl px-4 py-2">
          <button onClick={()=>setColor("red")} className="outline px-4 py-2 rounded-3xl" style={{backgroundColor: 'red'}}>red</button>
        </div>
        <div className="flex border flex-wrap justify-center rounded-3xl px-4 py-2">
          <button onClick={()=>setColor("green")} className="outline px-4 py-2 rounded-3xl" style={{backgroundColor: 'green'}}>green</button>
        </div>
        <div className="flex border flex-wrap justify-center rounded-3xl px-4 py-2">
          <button onClick={()=>setColor("yellow")} className="outline px-4 py-2 rounded-3xl" style={{backgroundColor: 'yellow'}}>yellow</button>
        </div>
        <div className="flex border flex-wrap justify-center rounded-3xl px-4 py-2">
          <button onClick={()=>setColor("white")} className="outline px-4 py-2 rounded-3xl" style={{backgroundColor: 'white'}}>white</button>
        </div>
        <div className="flex border flex-wrap justify-center rounded-3xl px-4 py-2">
          <button onClick={()=>setColor("grey")} className="outline px-4 py-2 rounded-3xl" style={{backgroundColor: 'grey'}}>grey</button>
        </div>
        <div className="flex border flex-wrap justify-center rounded-3xl px-4 py-2">
          <button onClick={()=>setColor("brown")} className="outline px-4 py-2 rounded-3xl" style={{backgroundColor: 'brown'}}>brown</button>
        </div>
      </div>
    </div>
    
  )
}

export default App
