import React, { useContext, useState } from 'react'
import { TasksContext } from '../context/TasksContext';

export const Form = () => {

    // I bring what I am going to use from the context
    const {addTask} = useContext(TasksContext);

    const [loading, setLoading] = useState(false);
    const [ready, setReady] = useState(false);

    // function that stored new task and send to function addTask that it contain the dispatch correspond
    const handleSubmit = e => {
        e.preventDefault();
        const newTask = {
            id: new Date().getTime(),
            title: e.target.title.value,
            description: e.target.description.value,
            done: false
        }
        addTask(newTask);

        setLoading(true)
        setTimeout(() => {
            setLoading(false);

            setReady(true);
            setTimeout(() => {
                setReady(false);
            }, 1500);

        }, 2000);

    }

    return (
        <div className='container w-50 mx-auto'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputTitle" className="form-label">Title</label>
                    <input type="text" name='title' className="form-control" id="exampleInputTitle" aria-describedby="Title of task" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputDescription" className="form-label">Description</label>
                    <textarea className="form-control" name='description' id="exampleInputDescription"></textarea>
                </div>
                <button type='submit' className="btn btn-primary">Save</button>
                {
                    loading && <h2>Guardando...</h2>
                }
                {
                    ready && <h2>Nueva tarea guardada</h2>
                }
            </form>
        </div>
    )
}
