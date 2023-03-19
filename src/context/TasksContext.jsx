import { createContext, useReducer } from "react";
import { TasksReducer } from "./TasksReducer";

// Initial state to initialize the context
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

// I instantiate the context
export const TasksContext = createContext(initialState);

// Creo un componente que retorne el Provider junto con el contexto 
// I create a component that returns the Provider together with the context
export const TasksContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(TasksReducer, initialState);

    // funciones que le pasaran la accion adecuada al reducer 
    // functions that will pass the appropriate action to the reducer
    function addTask (newTask){
        dispatch({type:'ADD_TASK', payload: newTask});
    }

    function updateState (task){
        dispatch({type:'UPDATE_STATE', payload: task});
    }

    function deleteTask(task){
        dispatch({type:'DELETE', payload: task});
    }

    return(
        <TasksContext.Provider value={{tasks: state.tasks, addTask, updateState, deleteTask}}>
            {children}
        </TasksContext.Provider>
    );
}