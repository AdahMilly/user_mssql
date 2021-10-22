import {  ERROR, LOADING, SUCCESS, GET_USERS_ } from "../types";

const initialState = {
    users: [],
    usersLoading: true
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case `${GET_USERS_}${LOADING}`:
            return {
                ...state,
                usersLoading: true,
            }
        case `${GET_USERS_}${SUCCESS}`:
            return {
                ...state,
                users: action.payload.users,
                usersLoading: false
            }
        case `${GET_USERS_}${ERROR}`:
            return {
                ...state,
                usersLoading: false

            }


        default: return state
    }
}

export default usersReducer