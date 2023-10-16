import CommentCard from "./CommentCard"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

const CommentsList = ({ comments }) => {
    const { postId } = useParams()
    const [commentsList, setCommentsList] = useState(null)

    useEffect(() => {
        if (!comments) {  //if we dont have comments
            fetch(`api/vi/posts/${postId}/comments`) //then fetch from post, id, comments
                .then(resp => { 
                    if (resp.status === 200) {
                        resp.json()
                            .then(comments => setCommentsList(comments)) //set commentslist to use comments
                    } else { 
                        resp.json()
                            .then((error => console.log(error)))
                    }
                })
                .catch(error => console.log(error)) //catch/error added in case the user tries to access unknown
        }
    }, [postId]) //when postId loads, refresh. be sure to list every dependency array here
// took ,comments out of dependency array above
    //since we need to specify comments(prop) or commentslist(state variable), we create a variable finalCommentsList
    //now we can create ternary operator that says if you have prop, use prop, otherwise use state variable
    if (!comments && !commentsList) return <h2>The data you tried to access does not exist!</h2>
    const finalCommentsList = comments ? comments : commentsList
    //if we have comments store comments, or else store commentsList
    // now we can operate on finalCommentsList using .map
    const renderComments = finalCommentsList?.map(comment => <CommentCard key={comment.id} comment={comment} />)
    return (
        <div>{renderComments}</div>
    )
}

export default CommentsList

//need a fetch here since url exisists and only gives the comments for specific posts
// I need to extract the id so useParams
// need to fetch (useEffect), need to store info in state(useState), extract id from url (useParams)
// explanation for fetch:
// if we dont have a comment list