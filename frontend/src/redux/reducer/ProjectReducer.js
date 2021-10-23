import { PROJECT_CREATE_, ERROR, LOADING, SUCCESS, GET_PROJECTS_, DELETE_PROJECT_ } from "../types";

const initialState = {
    projects: [],
    projectCreateLoading: false,
    projectsLoading: true
}

const projectReducer = (state = initialState, action) => {

    switch (action.type) {
        case `${PROJECT_CREATE_}${LOADING}`:
            return {
                ...state,
                projectCreateLoading: true,
            };
        case `${PROJECT_CREATE_}${SUCCESS}`:
            return {
                ...state,
                projectCreateLoading: false,
            };
        case `${PROJECT_CREATE_}${ERROR}`:
            return {
                ...state,
                projectCreateLoading: false,
            };
        case `${GET_PROJECTS_}${LOADING}`:
            return {
                ...state,
                projectsLoading: true,
            }
        case `${GET_PROJECTS_}${SUCCESS}`:
            return {
                ...state,
                projects: action.payload.projects,
                projectsLoading: false
            }
        case `${GET_PROJECTS_}${ERROR}`:
            return {
                ...state,
                projectsLoading: false

            }
        case `${DELETE_PROJECT_}${LOADING}`:
            return {
                ...state,
                projectLoading: true,
            }
        case `${DELETE_PROJECT_}${SUCCESS}`:
            let projects = [...state.projects]
            const projectId = action.payload.projectId
            // remove deleted 
            projects = projects.filter((item) => item._id !== projectId);
            return {
                ...state,
                projects: projects,
                projectLoading: false
            }
        case `${DELETE_PROJECT_}${ERROR}`:
            return {
                ...state,
                projectLoading: false

            }


        default: return state
    }
}

export default projectReducer