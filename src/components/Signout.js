import {useEffect, useContext} from 'react'
import {UserContext} from '../context/user'
import { useNavigate } from "react-router-dom"

const Signout = () => {
  const {signout} = useContext(UserContext);
  const navigate = useNavigate()

  useEffect(() => {
    const handleSignout = async () => {
      const doesThisWork = await signout()
      if (doesThisWork) {
        navigate("/signin")
      }
    }
    handleSignout()
  }, [signout, navigate]);

  return (
    <div>Loading...</div>
  )
}

export default Signout;