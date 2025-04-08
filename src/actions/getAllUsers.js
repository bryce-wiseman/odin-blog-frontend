

export default async function getAllUsers() {
  let envURL = import.meta.env.VITE_DB_URL
    let URL = envURL + "/users/"
    try {
        let allUsers = await fetch(URL)
        if(!allUsers) {
          throw new Error('error gathering info')
        }
        const parseUsers = await allUsers.json()
        console.log(parseUsers)
        } catch(error) {
            console.log(error.message)
        }
          
        }