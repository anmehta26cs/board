import { Status, Task, statusToString } from "../types";
import Card  from "./Card";



const CardContainer = ({heading, tasks} : {heading: Status, tasks: Task[]}) => {


    const ContainerHeading = () => {
        return (
            <div className='m-4 justify-between flex'>
                <div>
                    <h1 className="text-xl font-bold">{statusToString(heading)}</h1>
                </div>
                <p>{tasks.length === 1 ? '1 task' : `${tasks.length} tasks`}</p>
            </div>
        )
    }

    return (
        <div className="bg-gray-200 m-2 rounded-md flex-1 h-[calc(100vh-2rem)]">
            <ContainerHeading />
            <div className="flex flex-col gap-2 p-2">
                {tasks.map((task) => {
                    return (
                        <Card key={task.id} task={task}/>
                    )
                })}
            </div>
        </div>
    )
}

export default CardContainer