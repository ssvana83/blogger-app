import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";


const CommentCard = ({ comment }) => {
  const { id } = useParams()
  const [commentObj, setCommentObj] = useState(null);
  useEffect(() => {
    if (!comment) {
      fetch(`/api/v1/comments/${id}`)
        .then(resp => resp.json())
        .then(comment => setCommentObj(comment))
    }
  }, [comment, id]);

  const finalComment = comment ? comment : commentObj
  if (!finalComment) return <h1>Loading...</h1>
  return (
    <div>
      <h4>Content: {finalComment.content}</h4>
      <p>Rating: {finalComment.rating}</p>
      <p>Comment created by: {finalComment.user_id}</p>
    </div>
  )
}

export default CommentCard