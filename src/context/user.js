import React, { useState, useContext, useEffect, useCallback } from "react"
import { useHistory } from "react-router-dom"
import { MessageContext } from "../context/message"

const baseUrl = "http://localhost:3001/api/v1"
const UserContext = React.createContext()

function UserProvider({children}) {
  const [user, setUser] = useState(null);
  const {setMessage} = useContext(MessageContext)
  // const history = useHistory();
  

  const getCurrentUser = async () => {
      const resp = await fetch(baseUrl + "/me")
      if (resp.status === 200) {
          const data = await resp.json()
          // setUser(data)
      } else {
        const errorObj = await resp.json()
        setMessage(errorObj.error)
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