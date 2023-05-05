import React from 'react'
import { useState } from 'react'
import { Status } from '../types'



const AddTaskModal = ({ visible, onClose } : {visible: boolean, onClose: () => void}) => {
    const [task, setTask] = useState('')
    const [status, setStatus] = useState(Status.TODO)
    const [notes, setNotes] = useState('')

    if (!visible) return null;

    

    const handleOnClose = (e: React.MouseEvent<HTMLElement>) => {
        const target = e.target as HTMLButtonElement;
        if (target.id === 'bg' || target.id === 'submit' || target.id === 'close') {
            onClose();
        }
        return;
    }

    return (
    <div id='bg' onClick={handleOnClose} className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
        <div className="bg-white flex p-2 rounded-lg w-1/2">
            <div className='flex-1 text-gray-700 p-20'>
                <h1 className='text-3xl pb-2 font-latoBold'>add task</h1>
                <p className='text-lg text-gray-500'>add a task to the board!</p>
                <div className="mt-6">
                    <div className="pb-4">
                        

                        <label htmlFor="name" className="block text-lg py-2">
                            task
                        </label>
                        <input type="text" name="task" id="task" className="w-full border-2 border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:border-teal-500" placeholder='task...' onChange={(e) => setTask(e.target.value)}/>

                        <label htmlFor="task" className="block text-lg py-2">
                            status
                        </label>
                        <select name="status" id="status" className="w-full border-2 border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:border-teal-500" value={status} onChange={(e) => setStatus(+e.target.value)}>
                            <option value={Status.TODO}>todo</option>
                            <option value={Status.INPROGRESS}>in progress</option>
                            <option value={Status.DONE}>done</option>
                        </select>

                        <label htmlFor="notes" className="block text-lg py-2">
                            notes (optional)
                        </label>
                        <input type="text" name="notes" id="notes" className="w-full border-2 border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:border-teal-500" placeholder='additional notes' onChange={(e) => setNotes(e.target.value)}/>
                        <div className='flex justify-between'>
                            <button id='submit' className="bg-teal-500 text-white text-lg py-2 px-4 rounded-lg mt-4 hover:bg-teal-600" onClick={handleOnClose}>
                                add task
                            </button>
                            <button id='close' className='bg-red-400 py-2 px-4 mt-4 text-white rounded-lg'>close</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    );
}

export default AddTaskModal