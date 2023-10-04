import React, { useState } from "react"


const MessageContext = React.createContext()

function MessageProvider({children}) {
  const [message, setMessage] = useState(null);
  
  return (
      <MessageContect.Provider value={{message, setMessage}}>
            {children}
      </MessageContect.Provider>
  )
}


export {messageContext, MessageProvider}
