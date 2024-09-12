// eslint-disable-next-line no-unused-vars
import React,{useContext} from "react"
import UserContext from "../context/userContext"
 

function Profile() {
  // eslint-disable-next-line no-undef
  const{user} = useContext(UserContext)
  
    if(!user) return <div>Please Login</div>

    return <div>Welcome <b>{user.username}{user.password}</b></div>
}

export default Profile