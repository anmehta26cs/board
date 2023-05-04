import React from 'react'
import { useState } from 'react'
import AddTaskModal from './AddTaskModal'

const Navbar = ({isAuth, setIsAuth} : {isAuth : boolean, setIsAuth: React.Dispatch<React.SetStateAction<boolean>>}) => {

    const [showModal, setShowModal] = useState(false)

    const handleModalClose = () => {
        setShowModal(false)
    }

    const handleModalClick = () => {
        setShowModal(true)
    }

  return (
    <div>
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-semibold text-xl tracking-tight">task board</span>
            </div>
            {/* <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <div className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        <button onClick={handleModalClick}>Add Task</button>
                    </div>
                </div>
            </div> */}
            <div>
                <button className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0" onClick={ handleModalClick }>add task</button>
            </div>
        </nav>
    <AddTaskModal visible={showModal} onClose={handleModalClose}/>
    </div>
  )
}

export default Navbar