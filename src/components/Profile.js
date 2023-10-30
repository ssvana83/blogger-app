import React, {useContext} from 'react'
import {UserContext} from "../context/user"
import {Redirect} from "react"


const Profile = () => {
  const {user} = useContext(UserContext)

  if (!user) return <Redirect  to="/login" />
// this uses the react componenet Redirect to create an if/else that states if no user found redirect to 
// the login page
  return (
    <div>
      <h2>{user.username} Profile</h2> 
      <h4>{user.email} </h4>
      
    </div>
  )
}

export default Profile;