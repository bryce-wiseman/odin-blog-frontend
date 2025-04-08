import { useState } from 'react'
import '../styles/App.css'

function Header() {
    let status = localStorage.getItem('userToken')

    let data
    if(status) {
        data = <><p>Logged in as: {localStorage.getItem('currentUserName')}</p>
        <button className='signout-btn' onClick={() => {
            localStorage.removeItem('userToken')
            localStorage.removeItem('currentUserName')
            localStorage.removeItem('currentUserID')
            let path = String(window.location.href)
            path = path.replace('/blog', '/')
           window.location.href = path
        }}>Sign Out</button>
        </>
    } else {
        data = <div>Not Logged In</div>
    }

    return (
        <>
        <div id='header' >
            <h2 className='brand-name'>Ramblr</h2>
            <div className='login-status'>{data}</div>
        </div>
        </>
    )
}

export default Header