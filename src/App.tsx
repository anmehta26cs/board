import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import AddTask from './pages/AddTask'
import Navbar from './components/Navbar'
import { useState } from 'react'
import { Status, Task } from './types'

function App() {

  const [auth, setAuth] = useState(localStorage.getItem('isAuth') === 'true' ? true : false)
  const [tasks, setTasks] = useState<Task[]>([{
    id: 1,
    title: 'task 1',
    status: Status.DONE,
    createdAt: 123,
    notes: 'notes 1'
}])


  return (
    <Router>
      <Navbar isAuth={auth} setIsAuth={setAuth} setTasks={setTasks}/>
      <Routes>
        <Route path="/" element={<Home isAuth={auth} tasks={tasks}/>} />
        <Route path="/board" element={<Home isAuth={auth} tasks={tasks}/>} />
        <Route path="/add-task" element={<AddTask isAuth={auth} setTasks={setTasks}/>} />
        <Route path="/login" element={<Login setIsAuth={setAuth}/>} />
      </Routes>
    </Router>
  )
}

export default App
