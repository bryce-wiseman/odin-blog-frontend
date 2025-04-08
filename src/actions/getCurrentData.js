export default async function getCurrentData() {
    let URL = "http://localhost:5432/api/check-user/"
    try {
        let currentUser = await fetch(URL, {
          method: "GET",
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + localStorage.getItem('userToken')
          },
          token: localStorage.getItem('userToken')
        })
        if(!currentUser) {
          throw new Error('error gathering info')
        }
        const userData = await currentUser.json()
        localStorage.setItem('currentUserName', userData.authData.user.username)
        localStorage.setItem('currentUserID', userData.authData.user.id)
        console.log(userData)
        } catch(error) {
            console.log(error.message)
        }
          
        }