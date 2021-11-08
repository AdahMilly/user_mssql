
import axios from "axios";
import { setUserAndToken } from "../../utils/setUser";
import authActionCreators from "../actionCreators/auth.actions";

const { REACT_APP_API_URL } = process.env;

export const signUp = (credentials, callback = () => null) => {
    return (dispatch) => {

        dispatch(authActionCreators.userSignUpLoading())

        axios.post(`${REACT_APP_API_URL}/auth/registerUser`, credentials)
            .then(res => {

                const { user, token } = res.data;

                setUserAndToken(user, token)
                dispatch(authActionCreators.userSignUpSuccess(user))
                callback()
            })
            .catch(error => {
                callback(error)
                dispatch(authActionCreators.userSignUpError())
            })
    }
}

export const signIn = (credentials, callback = () => null) => {
    return (dispatch) => {

        dispatch(authActionCreators.userSignInLoading())

        axios.post(`${REACT_APP_API_URL}/auth/loginUser`, credentials)
            .then(res => {

                const { user, token } = res.data;

                setUserAndToken(user, token)
                dispatch(authActionCreators.userSignInSuccess(user))
                callback()
            })
            .catch(error => {
                callback(error)
                dispatch(authActionCreators.userSignInError())
            })
    }
}
