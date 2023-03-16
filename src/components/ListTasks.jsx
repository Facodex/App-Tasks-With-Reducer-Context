import React, { useContext } from 'react'
import { TasksContext } from '../context/TasksContext'
import { Task } from './Task'

export const ListTasks = () => {

  const {tasks} = useContext(TasksContext);
    
  return (
    <div className='container w-50 mx-auto'>

      {tasks?.map((taskItem) => (<Task taskItem={taskItem}  key={taskItem.id}/>))}

    </div>
  )
}
