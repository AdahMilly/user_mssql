import { PROJECT_CREATE_, ERROR, LOADING, SUCCESS } from "../types";

const initialState = {
    project: {},
    projectCreateLoading: false,
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


        default: return state
    }
}

export default projectReducer