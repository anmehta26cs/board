import { Task } from '../types'

const Card = ({task} : {task: Task}) => {
  return (
    <div>
        <div className="bg-white rounded-md p-2">
            <div className="flex justify-between items-center">
                <h1 className="text-lg font-bold">{task.title}</h1>
                <p className="text-sm text-gray-500">{task.createdAt}</p>
            </div>
            <p className="text-sm text-gray-500">{task.notes}</p>
        </div>

    </div>
  )
}

export default Card