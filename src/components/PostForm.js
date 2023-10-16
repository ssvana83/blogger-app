import { useState } from "react"
import { useNavigate } from "react-router-dom"

const PostForm = ({ handleError }) => {
    const [post, setPost] = useState({
        title: "",
        content: "",
        mediaUrl: "",
        deleteTime: ""
    });
    const navigate = useNavigate()

    const handleChange = (e) => {
        setPost({
            ...post,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        if ([post.title, post.content, post.mediaUrl, post.deleteTime].some(val => val.trim() === "")) {
            alert("You must fill in all the information please!")
        }

        fetch("/api/v1/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ title: post.title, content: post.content, media_url: post.mediaUrl, delete_time: post.deleteTime })
        })
            .then((resp) => {
                if (resp.status === 201) {
                    navigate("/posts")
                } else {
                    resp.json().then(errorObj => handleError(errorObj.error))
                }
            })
            .catch(err => handleError(err.message))
    }
    return (
        <>
            <h3>Create a new post</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input onChange={handleChange} type="text" name="title" value={post.title} required /><br />
                <label htmlFor="content">Content</label>
                <input onChange={handleChange} type="text" name="content" value={post.content} required /><br />
                <label htmlFor="mediaUrl">Media Url</label>
                <input onChange={handleChange} type="text" name="mediaUrl" value={post.mediaUrl} required /><br />
                <label htmlFor="deleteTime">Delete DateTime</label>
                <input onChange={handleChange} type="datetime-local" name="deleteTime" value={post.deleteTime} required /><br />
                <input type="submit" value="Create Post" />
            </form>
        </>
    )
}

export default PostForm

// .then((resp) => {
//     if (resp.status === 201) {
//          navigate("/posts")
//     } else {
//         debugger
//      resp.json().then(errorObj => handleError(errorObj.error))
//     }
// })
// .catch(err => handleError(err.message))