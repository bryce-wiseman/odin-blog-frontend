import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '../styles/App.css'
import SignupPage from './Signup.jsx'
import LoginPage from './Login.jsx'
import Blog from './Blog.jsx'
import VerifyPage from './Verify.jsx'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/verify' element={<VerifyPage />} />
        <Route path='/sign-up' element={<SignupPage />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
