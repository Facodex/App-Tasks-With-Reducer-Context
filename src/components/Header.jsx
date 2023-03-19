import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {TasksContext} from '../context/TasksContext';

export const Header = () => {

  const {tasks, addTask} = useContext(TasksContext);

  return (
    <div className='row pt-3'>

      <div className="col-md-6 d-flex justify-content-start">
        <Link to='/' className='text-light titleLink'>
          <h2 className='title'>APP TASKS</h2>
        </Link>
      </div>

      <div className="col-md-6 d-flex justify-content-end">
        <Link to='/form'>
          <button type="button" className="btn btn-secondary">Add Task</button>
        </Link>
      </div>




    </div>
  )
}
