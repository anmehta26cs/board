import React from 'react'
import { useState } from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase-config'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import AddTaskModal from './AddTaskModal'

const Navbar = ({isAuth, setIsAuth} : {isAuth : boolean, setIsAuth: React.Dispatch<React.SetStateAction<boolean>>}) => {

    const [showModal, setShowModal] = useState(false)

    const handleModalClose = () => {
        setShowModal(false)
    }

    const handleModalClick = () => {
        setShowModal(true)
    }

    const navigate = useNavigate()

    const logout = () => {
        signOut(auth).then(() => {
            localStorage.clear()
            setIsAuth(false)
            console.log("Logged out")
            navigate('/login')
        }).catch((error) => {
            console.log(error)
        })
    }

  return (
    <div>
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <Link to="/" className="font-semibold text-xl tracking-tight">task board</Link>
            </div>
            { isAuth ?
            <div>
                <button className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0" onClick={ handleModalClick }>add task</button>
                <button className="inline-block text-sm px-4 py-2 leading-none rounded text-white border-white hover:border-transparent mt-4 lg:mt-0" onClick={logout}>logout</button>
            </div>
                :
            <div>
                <Link to="/login" className="inline-block text-sm px-4 py-2 leading-none rounded text-white border-white hover:border-transparent mt-4 lg:mt-0">login</Link>
            </div>
            }
        </nav>
    <AddTaskModal visible={showModal} onClose={handleModalClose}/>
    </div>
  )
}

export default Navbar