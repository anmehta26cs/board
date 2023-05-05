import CardContainer from "../components/CardContainer"
import { Status, Task } from "../types"

const Home = ({isAuth, tasks} : {isAuth : boolean, tasks: Task[]}) => {

    if (!isAuth) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
              <h1 className="text-4xl font-semibold mb-4">welcome to task board</h1>
              <p className="text-xl mb-6">please log in to manage your tasks</p>
            </div>
          );
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