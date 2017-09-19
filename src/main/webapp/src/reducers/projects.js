const initialState = {
    active_project: 1,
    projectsList: []
};

export default function  projects (state = initialState, action) {
    if (action.type === 'FETCH_PROJECTS') {
        return { ...state, projectsList: action.payload };
    }
    else if (action.type === 'ADD_PROJECT') {
        return {
            ...state,
            projectsList: [
                ...state.projectsList,
                action.payload
            ],
            active_project: action.payload.id
        };
    }
    else if (action.type === 'SELECT_PROJECT') {
        return { ...state, active_project: action.payload }
    }
    else if (action.type === 'EDIT_PROJECT') {
        console.log(action.payload);
        return {
            ...state,
            projectsList: state.projectsList.map(
                (project, id) => project.id === action.payload.id ? {...project, title: action.payload.title}
                    : project
            )
        }
    }
    else if (action.type === 'DELETE_PROJECT') {
        return {
            ...state,
            projectsList: state.projectsList.map(
                (project, id) => project.id === action.payload.id ? {...project !== action.payload}
                    : project
            )
        }
    }
    return state;
}