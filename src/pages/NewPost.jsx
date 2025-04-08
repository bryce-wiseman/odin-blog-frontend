import Header from "./Header.jsx"
import createNewPost from "../actions/createNewPost.js"

function NewPostPage() {
let currentAuthor = localStorage.getItem('currentUserID')

    return(
        <>
        <Header />
        <div>Write a New Post</div>
        <form action={createNewPost}>
            <label htmlFor="newPostTitle">Post Title: </label>
            <input type="text" name="newPostTitle" id="newPostTitle" required />
            <br />
            <label htmlFor="newPostBody">Post Body: </label>
            <textarea name="newPostBody" id="newPostBody" cols="30" rows="10" required ></textarea>
            <br />
            <input type="hidden" name="newPostAuthor" value={currentAuthor} required />
            <button type="submit">Create Post</button>
        </form>
        <button onClick={() => {
            let path = window.location.href
            path = path.replace('/new-post', '/blog')
            window.location.href = path
        }}>Back to Blog</button>
        </>
    )
}

export default NewPostPage