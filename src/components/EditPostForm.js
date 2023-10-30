import { useState } from "react"

const EditPostForm = ({ postObj, handleUpdate }) => {
    const [post, setPost] = useState({
        // id: postObj.id, **Should this be here??
        title: postObj.title,
        content: postObj.content,
        media_url: postObj.media_url,
    });

    const handleChange = (e) => {
        setPost({
            ...post,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        if ([post.title, post.content].some(val => val.trim() === "")) {
            alert("You must fill in all the information please!")
        }
        fetch(`/api/v1/posts/${postObj.id}`, {
            
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
                <input onChange={handleChange} type="text" name="mediaUrl" value={post.media_url} /><br />
                <input type="submit" value="Edit Post" />
            </form>
        </>
    )
}


export default EditPostForm