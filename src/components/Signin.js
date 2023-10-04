import {useState, useContext} from "react"
// import {useHistory} from "react-router-dom"
import {UserContext} from "../context/user"
import {MessageContext} from "../context/message"

const Signin = () => {
    const {setUser, login} = useContext(UserContext);
    const {setMessage} = useContext(MessageContext);
    
    const [userObj, setUserObj] = useState({
        email: "",
        password: ""
    });

    // const history = useHistory()

    const handleChange = ({target: {name, value}}) => {
        setUserObj({
            ...userObj,
            [name]: value
        })
    }
    // syntax for target so that you dont need to state e.target.name etc etc

    const handleSubmit = e => {
        e.preventDefault()
        if ([userObj.email, userObj.password].some(val => val.trim() === "")) {
            setMessage({message: "You must fill in all the information please!", color: "red"})
        }
        login(userObj)
    }
// pass into login the userObj since thats our info
    // dont need fetch call in handlesubmit function since we have a login function via useContext. so just import
    // login as useContext
    return (
        <>
            <h3>Signin</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Email</label>
                <input onChange={handleChange} type="text" name="email" value={userObj.email} required/><br />
                <label htmlFor="species">Password</label>
                <input onChange={handleChange} type="password" name="password" value={userObj.password} required/><br />
                <input type="submit" value="Signin" />
            </form>
        </>
    )
}

export default Signin