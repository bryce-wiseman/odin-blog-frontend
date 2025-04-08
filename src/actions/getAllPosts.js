
export default async function getAllPosts() {
    let URL = "http://localhost:5432/api/posts/"
    try {
        let allPosts = await fetch(URL, {
          method: "GET",
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + localStorage.getItem('userToken')
          },
          token: localStorage.getItem('userToken')
        })
        if(!allPosts) {
          throw new Error('error gathering info')
        }
        const parsePosts = await allPosts.json()
        console.log(parsePosts)

        let postArr = parsePosts.blogposts       
        localStorage.setItem('postList', JSON.stringify(postArr))
        } catch(error) {
            console.log(error.message)
        }
          
        }