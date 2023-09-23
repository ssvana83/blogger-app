import { NavLink } from 'react-router-dom'

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
    return (
        <div>
            <nav class="navbar navbar-expand-lg custom-navbar">
            <NavLink
                activestyle={{
                    fontWeight: "bolder",
                    color: "red"
                }}
                exact
                style={style}
                to="/"
            >Home</NavLink>

            <NavLink
                activestyle={{
                    fontWeight: "bolder",
                    color: "red"
                }}
                exact
                style={style}
                to="/posts"
            >Posts</NavLink>

            <NavLink
                activestyle={{
                    fontWeight: "bolder",
                    color: "red"
                }}
                exact
                style={style}
                to="/posts/new"
            >New Post</NavLink>
            </nav>
        </div>
    )
}

export default Navbar;