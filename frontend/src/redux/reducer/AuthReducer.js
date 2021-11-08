import { ERROR, LOADING, SIGN_IN_, SIGN_UP, SUCCESS } from "../types";

const initialState = {
    user: {},
    signUpLoading: false,
    singInLoading: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case `${SIGN_IN_}${LOADING}`:
            return {
                ...state,
                singInLoading: true,
                user: {}
            };
        case `${SIGN_IN_}${SUCCESS}`:
            return {
                ...state,
                singInLoading: false,
                user: action.payload.user
            };
        case `${SIGN_IN_}${ERROR}`:
            return {
                ...state,
                singInLoading: false,
            };
        case `${SIGN_UP}${LOADING}`:
            return {
                ...state,
                singUpLoading: true,
                user: {}
            };
        case `${SIGN_UP}${SUCCESS}`:
            return {
                ...state,
                singUpLoading: false,
                user: action.payload.user
            };
        case `${SIGN_UP}${ERROR}`:
            return {
                ...state,
                singUpLoading: false,
            };

        default: return state
    }
}

export default authReducer