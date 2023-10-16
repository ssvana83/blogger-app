import {useState, useEffect} from 'react'
import PostsList from "../components/PostsList"
const PostsContainer = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("/api/v1/posts")
        .then(r => r.json())
        // .then(data => setPosts(data.data.map(p => p.attributes)))
        .then(data => setPosts(data))
        .catch(err => alert(err))  
    }, []);

  return (
    <div>
        <h2>Posts</h2>
        <PostsList posts={posts} />
    </div>
  )
}

export default PostsContainer

// this was before proxy line added fetch("http://localhost:3001/posts")
// this used to be on line 9; .then(data => setPosts(data))