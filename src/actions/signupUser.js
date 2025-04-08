export default async function (formData) {
    let email = formData.get('emailSignup')
    let username = formData.get('usernameSignup')
    let password = formData.get('passwordSignup')
    
    let URL = "http://localhost:5432/api/sign-up/"
    
    if(username && password && email) {
    try {
        let createUser = await fetch(URL, {
            method: "POST",
            body: JSON.stringify({
                email: email,
                username: username,
                password: password
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        if(!createUser) {
          throw new Error('error creating info')
        }
        const parseUser = await createUser.json()
        console.log(parseUser)
        } catch(error) {
            console.log(error.message)
        }
    } else {
        alert('Please fill out all fields')
    }
}