import { useState, useEffect } from "react"
import { Link, useParams, useLocation, useNavigate } from "react-router-dom"
import CommentForm from './CommentForm'
import CommentsList from './CommentsList'
import EditPostForm from "./EditPostForm"

const PostCard = ({ post }) => {
  const { id } = useParams()
  const location = useLocation()
  const [postObj, setPostObj] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [comments, setComments] = useState([]);
  const navigate = useNavigate();
  

  useEffect(() => {
    if (!post) {
      fetch(`/api/v1/posts/${id}`) 
        .then(resp => resp.json())
        .then(post => {
          setPostObj(post)
          setComments(post.comments)
        })
    }
  }, [post, id]);

  const addNewComment = (commentObj) => {
    setComments(currentComments => [commentObj, ...currentComments])
  }

  const handleUpdate = (updatedPostObj) => {
    setEditMode(false)
    setPostObj(updatedPostObj)
  }

  const handleClick = (e) => {
    if (e.target.name === "delete") {
      fetch(`/api/v1/posts/${postObj.id}`, {
        method: "DELETE",
      })
      .then(r => {
        if (r.ok) {
          console.log('post successfully deleted');
          
          navigate("/posts");
        } else {
          console.error('failed to delete post');
        }
      })
      .catch(error => {
        console.error('network error:', error);
      });
    } else {
      setEditMode(true);
    }
  }

  const handleDelete = (post) => {
    console.log(postObj)
    fetch('/api/v1/posts/${postObj.id}', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json'}
    }) 
  }

  const finalPost = post ? post : postObj
  if (!finalPost) return <h1>Loading...</h1>
  return (
    <div>
      {!editMode ? <>
        <h3>Title: <Link to={`/posts/${finalPost.id}`}>{finalPost.title}</Link></h3>
        <h4>Content: {location.pathname !== "/posts" ? finalPost.content : `${finalPost.content.slice(0, 20)}...`}</h4>
        <h4>Post written by: {finalPost.user.username}</h4>
        {finalPost.mediaUrl ? <img src={finalPost.mediaUrl} alt="Media explanation here" /> : null}
        {location.pathname !== "/posts" ? <>
          <button name="edit" id="edit-btn" onClick={handleClick}>Edit</button>
       
          <br></br>
          <br></br>
          <button name="delete" id="delete" onClick={(e) => handleClick(e)} >Delete</button>
        </> : null}
      </> : <EditPostForm postObj={finalPost} handleUpdate={handleUpdate} />}
      <hr />
      <hr />
      {location.pathname !== "/posts" ? (<>
        <CommentForm addNewComment={addNewComment} postId={finalPost.id} />
        <br />
        <hr />
        <hr />
        <CommentsList comments={comments} />
      </>) : null}
    </div>
  )
}

export default PostCard

// const handleClick = (e) => {
//   if (e.target.name === "delete") {
//     fetch(`http://localhost:3001/posts/${postObj.id}`, {
//       method: "DELETE"
//     })
//       .then(() => navigate("/posts"))
//   } else {
//     setEditMode(true)
//   }
// }


// this was initial fetch at line 39 for handleClick
// fetch('/api/v1/posts/${postObj.id}'

