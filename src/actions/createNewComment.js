
export default async function createNewComment(formData) {
    let envURL = import.meta.env.VITE_DB_URL
    let user = formData.get('username')
    let comment = formData.get('comment-input')
    let postID = formData.get('postID')

    let URL = envURL + "/new-comment/"
    try {
        let createComment = await fetch(URL, {
            method: "POST",
            body: JSON.stringify({
                author: user,
                comment: comment,
                postID: postID
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        if(!createComment) {
          throw new Error('error creating info')
        }
        const parseComment = await createComment.json()
        console.log(parseComment)
        } catch(error) {
            console.log(error.message)
        }
}