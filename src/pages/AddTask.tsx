import React, { useEffect } from 'react'
import { useState } from 'react'
import { Status, Task } from '../types'
import { useNavigate } from 'react-router-dom'

const AddTask = ({ isAuth, setTasks }: { isAuth : boolean, setTasks: React.Dispatch<React.SetStateAction<Task[]>> }) => {
    const [task, setTask] = useState('')
    const [status, setStatus] = useState(Status.TODO)
    const [notes, setNotes] = useState('')

    const navigate = useNavigate()

    useEffect(() => {
        if (!isAuth) {
            navigate('/login')
        }
    }, [isAuth, navigate])

    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!task) {
            alert('Please enter a task')
            return
        }

        const newTask: Task = {
            id: Math.floor(Math.random() * 10000),
            title: task,
            status: status,
            createdAt: +Date.now(),
            notes: notes
        }
        setTasks((prevTasks) => [...prevTasks, newTask])
        navigate('/')

    }

    return (
        <div className='flex justify-center items-center'>
        <div className="flex p-2 rounded-lg w-1/2">
            <div className='flex-1 text-gray-700 p-20'>
                <h1 className='text-3xl pb-2 font-latoBold'>add task</h1>
                <p className='text-lg text-gray-500'>add a task to the board!</p>
                <form onSubmit={handleOnSubmit} className="p-6">
                    <label htmlFor="task" className="block text-lg py-2">
                        task
                    </label>
                    <input value={task} type="text" name="task" id="task" className="w-full border-2 border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:border-teal-500" placeholder='task...' onChange={(e) => setTask(e.target.value)} />

                    <label htmlFor="status" className="block text-lg py-2">
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
                    <textarea id="notes" value={notes} className="w-full border-2 border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:border-teal-500" onChange={(e) => setNotes(e.target.value)} />

                    <div className='flex justify-between'>
                        <button type="submit" id='submit' className="bg-teal-500 text-white text-lg py-2 px-4 rounded-lg mt-4 hover:bg-teal-600">
                            add task
                        </button>
                    </div>
                </form>
            </div>

        </div>
        </div>
    )
}

export default AddTask