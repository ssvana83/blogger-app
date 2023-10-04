import React, { useState, useContext, useEffect, useCallback } from "react"
import { useHistory } from "react-router-dom"
import { MessageContext } from "../context/message"

const baseUrl = "http://localhost:3001/api/v1"
const UserContext = React.createContext()

function UserProvider({children}) {
  const [user, setUser] = useState(null);
  const {setMessage} = useContext(MessageContext)
  // const history = useHistory();
  

  const getCurrentUser = useCallback(async () => {
    try {
      const resp = await fetch(baseUrl + "/me")
      if (resp.status === 200) {
          const data = await resp.json()
          // setUser(data)
      } else {
        const errorObj = await resp.json()
        setMessage(errorObj.error)
      }
    } catch (e) {
        setMessage(e.message)
    }
   }, [setMessage])
  //  using a try catch

  const login = async (userInfo) => {
    try {
      const resp = await fetch("" + baseUrl + "/login", {
        method: "POST", 
        headers: {
            "Content_Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userInfo)
      })
    if (resp.status === 202) {
        const data = await resp.json()
        setUser(data)
        // history.push("/profile")
    } else {
        const errorObj = await resp.json()
        setMessage(errorObj.error)
    }
  } catch(e) {
    setMessage(e.message)
  }
  }

  const signup = async (userInfo) => {
    try {
      const resp = await fetch("" + baseUrl + "/signup", {
        method: "POST", 
        headers: {
            "Content_Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userInfo)
      })
    if (resp.status === 201) {
        const data = await resp.json()
        setUser(data)
        // history.push("/profile")
    } else {
        const errorObj = await resp.json()
        setMessage(errorObj.error)
    }
  } catch(e) {
    setMessage(e.message)
  }
  }

  const signout = async () => {
    try {
      const resp = await fetch("" + baseUrl + "/signout", {
        method: "DELETE"
      })
      setUser(null)
      // history.push("/login")
    } catch(e) {
      setMessage(e.message)
    }
  }
  
  return (
      <UserContext.Provider value={{user, setUser, getCurrentUser}}>
            {children}
      </UserContext.Provider>
  )
}


export {UserContext, UserProvider}




// using context folder with files containing a user and message componant to store seperately.
// 
// 
// 
// 
// 
// 
// 