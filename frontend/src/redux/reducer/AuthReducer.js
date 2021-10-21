import { ERROR, LOADING, SIGN_IN_, SUCCESS } from "../types";

const initialState = {
    user: {},
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
        case "loginUser":
            try {
                return {
                    ...state,
                    user: action.user
                };

            } catch (error) {
                console.log(error);
            } break

        default: return state
    }
}

export default authReducer