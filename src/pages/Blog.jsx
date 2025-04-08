import getAllPosts from '../actions/getAllPosts.js'
import getAllComments from '../actions/getAllComments.js'
import createNewComment from '../actions/createNewComment.js'
import Header from './Header.jsx'

function PostBox(props) {
    let commentList = JSON.parse(localStorage.getItem('commentList'))
    let currentUser = localStorage.getItem('currentUserName')
    
    return (
        <div className='post-container' id={props.arr.id}>
            <div className='post-top-row'>
                <p>@{props.arr.authorName}</p>
            </div>
            <div className='post-mid-row'>
                <h4 className='post-title'>{props.arr.title}</h4>
                <p className='post-body'>{props.arr.body}</p>
            </div>
            <div className='post-bot-row'>
                <h6 className='post-time'>{props.arr.timestamp}</h6>
                <button className='comment-btn' onClick={() => {document.getElementById('comment-form').classList.toggle('hidden')}}>Comment</button>
            </div>
            <button onClick={(e) => {
                 let parentID = e.target.parentElement.id
                 let parentDiv = document.getElementById(parentID)

                if(e.target.innerHTML == 'Show Comments') {
                    e.target.innerHTML = 'Hide Comments'
                commentList.forEach((comObj) => {
                    if(comObj.postId == parentID) {
                        let commentBox = document.createElement('div')

                        let commentUser = document.createElement('h5')
                        commentUser.classList = 'comment-user'
                        commentUser.innerHTML = '@' + comObj.authorName
                        commentBox.appendChild(commentUser)

                        let commentBody = document.createElement('p')
                        commentBody.classList = 'comment-body'
                        commentBody.innerHTML = comObj.body
                        commentBox.appendChild(commentBody)

                        commentBox.classList = 'comment-container'
                        commentBox.id = 'comment-container'
                        parentDiv.append(commentBox)
                    }
                })
                } else {
                    e.target.innerHTML = 'Show Comments'
                    while (parentDiv.lastChild.classList == 'comment-container') {
                        parentDiv.removeChild(parentDiv.lastChild)
                    }
                    
                }
                
            }}>Show Comments</button>
            <form action={createNewComment} id='comment-form' className='hidden'>
                    <input type="text" name="comment-input" id="comment-input" />
                    <input type="hidden" name="postID" value={props.arr.id}/>
                    <input type="hidden" name="username" value={currentUser}/>
                    <button type="submit">Send</button>
                </form>
        </div>
    )
}

function Blog() {
    getAllPosts()
    getAllComments()
    let postList = JSON.parse(localStorage.getItem('postList'))

    let userSignedIn = localStorage.getItem('userToken')
    
    return(
        <>
        <Header />
        <div className='main-section'>
            <div className='all-posts-container'>
                {userSignedIn && 
                postList.map((post) => (
                    <PostBox arr={post} key={post.id}/>
                ))}
            </div>
            {!userSignedIn && <p>Please sign in to view posts</p>}
        </div>
       
        </>
    )
}

export default Blog