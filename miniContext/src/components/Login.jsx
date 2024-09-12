// eslint-disable-next-line no-unused-vars
import React,{useState, useContext} from 'react'
import UserContext from '../context/userContext'

const Login = () => {
   
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    // eslint-disable-next-line no-unused-vars
    const{setUser} = useContext(UserContext)
    const handleSubmit =(e)=>{
        e.preventDefault()
        setUser({username, password})
    }
  return (
    <div>
        <h1>Login</h1>
        <input type="text"
        value={username} 
        onChange={(e)=>setUsername(e.target.value)}
         placeholder='username'
         />

        <input type="password"
        value={password}
         placeholder='password'
         onChange={(e)=>setPassword(e.target.value)}
         />
        <button onClick={handleSubmit}>Submit</button>

    </div>
  )
}

export default Login