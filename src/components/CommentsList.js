import CommentCard from "./CommentCard"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

const CommentsList = ({ comments }) => {
    const { postId } = useParams()
    const [commentsList, setCommentsList] = useState(null)

    useEffect(() => {
        if (!comments) {  
            fetch(`api/vi/posts/${postId}/comments`) 
                .then(resp => { 
                    if (resp.status === 200) {
                        resp.json()
                            .then(comments => setCommentsList(comments)) 
                    } else { 
                        resp.json()
                            .then((error => console.log(error)))
                    }
                })
                .catch(error => console.log(error)) 
        }
    }, [postId]) 
    if (!comments && !commentsList) return <h2>The data you tried to access does not exist!</h2>
    const finalCommentsList = comments ? comments : commentsList
    const renderComments = finalCommentsList?.map(comment => <CommentCard key={comment.id} comment={comment} />)
    return (
        <div>{renderComments}</div>
    )
}

export default CommentsList

