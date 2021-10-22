import { ERROR, GET_USERS_, LOADING, SUCCESS } from "../types";



const getUsersLoading = () => ({
    type: `${GET_USERS_}${LOADING}`
})

const getUsersSuccess = (users = []) => ({
    type: `${GET_USERS_}${SUCCESS}`,
    payload: {
        users
    }
})

const getUsersError = () => ({
    type: `${GET_USERS_}${ERROR}`,

})

const usersActionCreators = {

    getUsersLoading,
    getUsersSuccess,
    getUsersError
}

export default usersActionCreators;