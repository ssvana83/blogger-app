import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { useEffect, useContext } from "react"
// useState removed since we arent stroing state locally anymore since context changes
import {UserContext} from './context/user'

import Home from "./components/Home"
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import PostCard from "./components/PostCard";
import PostForm from "./components/PostForm";
import PostsContainer from "./containers/PostsContainer";
import CommentsList from "./components/CommentsList";
import Notification from "./components/Notification";

function App() {
  const {getCurrentUser, user} = useContext(UserContext)
  // now we need to access function of get currentuser

  useEffect(() => {
    if (!user) {
      getCurrentUser()
    }
    },[user])
  // dont want dependency array listed so use callback in user.js

  // const [error, setError] = useState(null);
  // const handleError = (errorMsg) => setError(errorMsg)
  // can remove these above and take out error calls in return paths below since 
  // handling errors and messages with context

  return (
    <div className="App">
      <Router>
        <Notification  />
        <Navbar />
        <Header slogan="Travel Blog" storename="The world's finest blog!"/>
        <Routes>
          <Route path="/posts/new" element={<PostForm />} />
          <Route path="/posts/:postId/comments" element={<CommentsList />} />
          <Route path="/posts/:id" element={<PostCard />} />
          <Route path="/posts" element={<PostsContainer />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// added handleError to <PostCard /> unsure of this.....

// Route order matters! The route thats more specific goes higher then more generic route....
