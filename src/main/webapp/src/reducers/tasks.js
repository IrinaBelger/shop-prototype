const initialState = {
    tasksList: [],
    active_task: 1,
    search_value: ""
};

export default function  tasks (state = initialState, action) {
    if (action.type === 'FETCH_TASKS') {
        // console.log('try to sort tasks', action.payload);
        return { ...state, tasksList: action.payload.sort((a,b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()), active_task: action.payload[0].id};
    }
    else if (action.type === 'ADD_TASK') {
        const newTaskList = [
            ...state.tasksList,
            action.payload
        ];
        return {
            ...state,
            tasksList: newTaskList.sort((a,b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
        };
    }

    else if (action.type === 'SELECT_TASK') {
        return { ...state, active_task: action.payload }
    }

    else if (action.type === 'READ_TASK') {
        return { ...state, active_task: action.payload }
    }

    else if (action.type === 'EDIT_TASK') {
        return {
            ...state,
            tasksList: state.tasksList.map(
                (task, id) => task.id === action.payload.id ? {...task, title: action.payload.title, description: action.payload.description}
                    : task
            )
        }
    }
    else if (action.type === 'DELETE_TASK') {
        console.log('Try to delete task reducer ----', action.payload.id);
        return {
            ...state,
            tasksList: state.tasksList.map(
                (task, id) => task.id === action.payload.id ? {...task !== action.payload}
                    : task
            ),
            active_task: state.tasksList[0].id
        }
    }
    else if (action.type === 'COMPLETE_TASK') {
        console.log('Try to delete task reducer ----', action.payload.id);
        return {
            ...state,
            tasksList: state.tasksList.map(
                (task, id) => task.id === action.payload.id ? {...task !== action.payload}
                    : task
            )
        }
    }
    else if (action.type === 'SEARCH_TASKS') {
        return {
            ...state,
            tasksList: [
                ...state.tasksList
            ],
            search_value: action.payload.value
        };
    }
    return state;
}