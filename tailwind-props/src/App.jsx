

import './App.css'
import Card from './components/Card'

function App() {
 let myObj={
  name: "kartik",
  age:26,
 }

  return (
    <>
      
    <h1 className="bg-yellow-600 text-black font-bold mb-4">
      Test Card
    </h1>

    <Card showObj={myObj} name="kartik" btntext="btn1"/>
    <Card />
    
    </>
    
  )
}

export default App
