import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import { useState } from 'react'

function App() {

  const [auth, setAuth] = useState(localStorage.getItem('isAuth') === 'true' ? true : false)


  return (
    <Router>
      <Navbar isAuth={auth} setIsAuth={setAuth}/>
      <Routes>
        <Route path="/" element={<Home isAuth={auth}/>} />
        <Route path="/board" element={<Home isAuth={auth}/>} />
        <Route path="/login" element={<Login setIsAuth={setAuth}/>} />
      </Routes>
    </Router>
  )
}

export default App
