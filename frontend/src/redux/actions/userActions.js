
import axios from "axios";
import usersActionCreators from "../actionCreators/users.actions";

export const getUsers = (params, callback = () => null) => {
    return (dispatch) => {
        dispatch(usersActionCreators.getUsersLoading())
        axios.get(`${process.env.REACT_APP_API_URL}/users`)
            .then((res) => {
                const { users } = res.data;
                dispatch(usersActionCreators.getUsersSuccess(users))
            })
            .catch(error => {
                dispatch(usersActionCreators.getUsersError())
                callback(error)
            })
    }
}