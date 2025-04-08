
export default async function getAllComments() {
  let envURL = import.meta.env.VITE_DB_URL
    let URL = envURL + "/comments"
    try {
        let comments = await fetch(URL, {
          method: "GET",
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + localStorage.getItem('userToken')
          },
          token: localStorage.getItem('userToken')
        })
        if(!comments) {
          throw new Error('error gathering info')
        }
        const parseComments = await comments.json()
        console.log(parseComments)

        let commentArr = parseComments.comments       
        localStorage.setItem('commentList', JSON.stringify(commentArr))
        } catch(error) {
            console.log(error.message)
        }
        }