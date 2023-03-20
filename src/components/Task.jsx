import React, { useContext } from 'react';
import { TasksContext } from '../context/TasksContext';
import { MdOutlineDoneOutline } from 'react-icons/md'
import { ImCross } from 'react-icons/im'

export const Task = ({taskItem}) => {

  // I bring what I am going to use from the context
  const { updateState, deleteTask } = useContext(TasksContext);

  return (
    <div className='TaskItem text-center rounded my-5'>
        <h2>{taskItem.title}</h2>
        <p>{taskItem.description}</p>
        <p>{taskItem.done ? <>Finished <MdOutlineDoneOutline/></> : <>Pending <ImCross/></>}</p>
        <button type="button" className="btn btn-success my-2 mx-2" style={{width: '90px'}} onClick={() => updateState(taskItem)}>Done</button>
        <button type="button" className="btn btn-danger my-2" style={{width: '90px'}} onClick={() => deleteTask(taskItem)}>Delete</button>
    </div>
  )
}
