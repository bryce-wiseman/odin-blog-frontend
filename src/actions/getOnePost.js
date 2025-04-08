export default async function getOnePost(formData) {
  let envURL = import.meta.env.VITE_DB_URL
    let idNum = formData.get('postID')
    let URL = envURL + "/posts/" + idNum
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