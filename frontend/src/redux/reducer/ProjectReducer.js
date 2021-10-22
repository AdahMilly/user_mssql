import { PROJECT_CREATE_, ERROR, LOADING, SUCCESS, GET_PROJECTS_ } from "../types";

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


        default: return state
    }
}

export default projectReducer