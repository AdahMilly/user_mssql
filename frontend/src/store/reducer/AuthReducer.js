import jwtDecode from "jwt-decode"



const initialState = {
    user: {},
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        // case "USER_LOADED":
        case "registerUser":
            return {
                ...state,
                user: action.user
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