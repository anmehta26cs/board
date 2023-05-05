import CardContainer from "../components/CardContainer"
import { Status, Task } from "../types"

const tasks : Task[] = [
    {
        id: 1,
        title: 'task 1',
        status: Status.DONE,
        createdAt: 123,
        notes: 'notes 1'
    },
]

const Home = ({isAuth} : {isAuth : boolean}) => {

    if (!isAuth) {
        return (
            <div>Not logged in</div>
        )
    }

  return (
    <div className='flex items-start'>
        <CardContainer heading={Status.TODO} tasks={tasks}/>
        <CardContainer heading={Status.INPROGRESS} tasks={tasks}/>
        <CardContainer heading={Status.DONE} tasks={tasks}/>
    </div>
  )
}

export default Home