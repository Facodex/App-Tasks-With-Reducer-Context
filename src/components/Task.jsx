import React from 'react'

export const Task = ({taskItem}) => {

  return (
    <div className='TaskItem text-center rounded my-5'>
        <h2>{taskItem.title}</h2>
        <p>{taskItem.description}</p>
        <p>{taskItem.done ? 'Finished' : 'Pending'}</p>
        <button type="button" className="btn btn-success my-2 mx-2" style={{width: '90px'}}>Done</button>
        <button type="button" className="btn btn-danger my-2" style={{width: '90px'}}>Delete</button>
    </div>
  )
}
