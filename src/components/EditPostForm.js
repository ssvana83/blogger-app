import { useState } from "react"

const EditPostForm = ({ postObj, handleUpdate }) => {
    const [post, setPost] = useState({
        title: postObj.title,
        content: postObj.content,
        mediaUrl: postObj.mediaUrl,
    });

    const handleChange = (e) => {
        setPost({
            ...post,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        if ([post.title, post.content, post.deleteTime].some(val => val.trim() === "")) {
            alert("You must fill in all the information please!")
        }
        fetch(`http://localhost:3001/posts/${postObj.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(post)
        })
            .then((res) => res.json())
            .then(data => handleUpdate(data))
    }
    
    return (
        <>
            <h3>Edit Post</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input onChange={handleChange} type="text" name="title" value={post.title} required /><br />
                <label htmlFor="content">Content</label>
                <input onChange={handleChange} type="text" name="content" value={post.content} required /><br />
                <label htmlFor="mediaUrl">Media Url</label>
                <input onChange={handleChange} type="text" name="mediaUrl" value={post.mediaUrl} /><br />
                <label htmlFor="deleteTime">Delete DateTime</label>
                <input onChange={handleChange} type="datetime-local" name="deleteTime" value={post.deleteTime} required /><br />
                <input type="submit" value="Edit Post" />
            </form>
        </>
    )
}


export default EditPostForm