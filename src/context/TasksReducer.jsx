
export const TasksReducer = (state, action) => {
    switch(action.type) {
        case('ADD_TASK') : {

            return {
                ...state,
                tasks: [...state.tasks, action.payload],
            }
        }

        case('UPDATE_STATE') : {

            state.tasks.map((task) => { 
                if(task.id === action.payload.id) {
                    task.done = !task.done;
                }
            });

            return {
                ...state
            }
        }

        case('DELETE') : {

            let restTasks = state.tasks.filter((task) => task.id !== action.payload.id);
            return {
                ...state,
                tasks: restTasks
            }
            
        }

    }
}