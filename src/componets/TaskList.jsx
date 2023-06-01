import TaskCard from './TaskCard'
import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'
//clg

//Creado con el comando rfce
function TaskList() {
  const {tasks} = useContext(TaskContext)
  if (tasks.length === 0) {
    return <h1 className='text-white text-4xl font-bold text-center'>No hay tareas aun</h1>;
  }
  return (
    <div className="grid grid-cols-3 gap-2">
      {tasks.map((t) => (
        <TaskCard key={t.id} task={t}/>
      ))}
    </div>
  );
}

export default TaskList;
