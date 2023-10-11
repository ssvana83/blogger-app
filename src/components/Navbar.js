import { NavLink } from 'react-router-dom'
import {UserContext} from '../context/user'
import {useContext} from 'react'

const style = {
    width: "60%",
    margin: "5% 0 1%",
    padding: "1em",
    textDecoration: "none",
    color: "black",
    backgroundColor: "lightblue",
    fontWeight: "bold",
    verticalAlign: "center"
}

const Navbar = () => {
    const {user} = useContext(UserContext)
    return (
        <div>
            <NavLink
                activestyle={{
                    fontWeight: "bolder",
                    color: "red"
                }}
                style={style}
                to="/"
            >Home</NavLink>

            <NavLink
                activestyle={{
                    fontWeight: "bolder",
                    color: "red"
                }}
                
                style={style}
                to="/posts"
            >Posts</NavLink>
            {user ? (
            <>
                <NavLink
                activestyle={{
                    fontWeight: "bolder",
                    color: "red"
                }}
                    
                    style={style}
                    to="/posts/new"
                >New Post</NavLink>
                <NavLink
                activestyle={{
                    fontWeight: "bolder",
                    color: "red"
                }}
                    
                    style={style}
                    to="/profile"
                >Profile</NavLink>
                <NavLink
                activestyle={{
                    fontWeight: "bolder",
                    color: "red"
                }}
                    
                    style={style}
                    to="/profile"
                >Profile</NavLink>
                <NavLink
                activestyle={{
                    fontWeight: "bolder",
                    color: "red"
                }}
                    
                    style={style}
                    to="/signout"
                >Sign Out</NavLink>
                </>
                ) : (
                    <>
                    <NavLink
                activestyle={{
                    fontWeight: "bolder",
                    color: "red"
                }}
                   
                    style={style}
                    to="/signin"
                >Sign In</NavLink>
                <NavLink
                activestyle={{
                    fontWeight: "bolder",
                    color: "red"
                }}
                   
                    style={style}
                    to="/signup"
                >Sign Up</NavLink>
            </>
        )}
    </div>
    )
}

export default Navbar;