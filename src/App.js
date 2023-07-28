import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { useState } from "react"

import Home from "./components/Home"
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import PostCard from "./components/PostCard";
import PostForm from "./components/PostForm";
import PostsContainer from "./containers/PostsContainer";
import CommentsList from "./components/CommentsList";
import Notification from "./components/Notification";

function App() {
  const [error, setError] = useState(null);
  const handleError = (errorMsg) => setError(errorMsg)

  return (
    <div className="App">
      <Router>
        <Notification error={error} />
        <Navbar />
        <Header slogan="Travel Blog" storename="The world's finest blog!"/>
        <Routes>
          <Route path="/posts/new" element={<PostForm handleError={handleError}/>} />
          <Route path="/posts/:postId/comments" element={<CommentsList handleError={handleError}/>} />
          <Route path="/posts/:id" element={<PostCard handleError={handleError}/>} />
          <Route path="/posts" element={<PostsContainer />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// added handleError to <PostCard /> unsure of this.....
