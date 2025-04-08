export default async function getOnePost(formData) {
    let idNum = formData.get('postID')
    let URL = "http://localhost:5432/posts/" + idNum
    try {
        let findPost = await fetch(URL)
        if(!findPost) {
          throw new Error('error gathering info')
        }
        const parsePost = await findPost.json()
        console.log(parseUser)
        } catch(error) {
            console.log(error.message)
        }
          
        }