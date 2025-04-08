export default async function getAuthor(idNum) {
  let envURL = import.meta.env.VITE_DB_URL
    let URL = envURL + "/users/" + idNum
    try {
        let findUser = await fetch(URL)
        if(!findUser) {
          throw new Error('error gathering info')
        }
        const parseUser = await findUser.json()
        console.log(parseUser)
        } catch(error) {
            console.log(error.message)
        }
          
        }