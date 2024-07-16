import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

function MyApp(){
  return(
    <div>
      <h1>customapp</h1>
    </div>
   
  )
  
}
// const anotherUser = "this is new user"
// const ReactElement = React.createElement(
//   'a',
//   {href: 'https://google.com',target: '_blank'},
//   'click to open google'
// )

ReactDOM.createRoot(document.getElementById('root')).render(

 
  <React.StrictMode>
    <App />
    <MyApp/>
    
  </React.StrictMode>,
)
