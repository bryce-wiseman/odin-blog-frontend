
export default async function getOneUser(id) {
  let envURL = import.meta.env.VITE_DB_URL
    let idNum = id
    let URL = envURL + "/users/" + idNum
    console.log(idNum)
    try {
        let findUser = await fetch(URL)
        if(!findUser) {
          throw new Error('error gathering info')
        }
        const parseUser = await findUser.json()
        console.log(parseUser)
        return parseUser
        } catch(error) {
            console.log(error.message)
        }
          
        }