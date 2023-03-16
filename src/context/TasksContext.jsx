import { createContext, useReducer } from "react";
import { TasksReducer } from "./TasksReducer";

const initialState = {
    tasks: [
        {
            id: new Date().getTime(),
            title: 'Task Monday',
            description: 'Runing',
            done: false
        }
    ]

};

export const TasksContext = createContext(initialState);

export const TasksContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(TasksReducer, initialState);

    function addTask (newTask){
        dispatch({type:'ADD_TASK', payload: newTask});
    }

    return(
        <TasksContext.Provider value={{tasks: state.tasks, addTask}}>
            {children}
        </TasksContext.Provider>
    );
}