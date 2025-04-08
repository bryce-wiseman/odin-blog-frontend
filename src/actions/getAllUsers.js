

export default async function getAllUsers() {
    let URL = "http://localhost:5432/api/users/"
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