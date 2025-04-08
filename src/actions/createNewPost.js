
export default async function (formData) {
    let envURL = import.meta.env.VITE_DB_URL
    let postTitle = formData.get('newPostTitle')
    let postBody = formData.get('newPostBody')
    let postAuthor = formData.get('newPostAuthor')

    let URL = envURL + "/new-post/"
    try {
        let createPost = await fetch(URL, {
            method: "POST",
            body: JSON.stringify({
                title: postTitle,
                body: postBody,
                authorId: postAuthor
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        if(!createPost) {
          throw new Error('error creating info')
        }
        const parsePost = await createPost.json()
        console.log(parsePost)
        } catch(error) {
            console.log(error.message)
        }
}