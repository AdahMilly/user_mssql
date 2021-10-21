
import axios from "axios";
import { setUserAndToken } from "../../utils/setUser";
import authActionCreators from "../actionCreators/auth.actions";

const { REACT_APP_API_URL } = process.env;

export const signUp = (user) => {
    return (dispatch) => {
        axios.post(`${REACT_APP_API_URL}/auth/registerUser`, user)
            .then(({ data }) => {
                const { token, user } = data;

                localStorage.setItem("token", token)
                dispatch({
                    type: "registerUser",
                    user
                })
            })
            .catch(error => {
                console.log(error);
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


// export const loadUser = () => {
//     return (dispatch, getState) => {
//       const token = getState().auth.token;
//       if (token) {
//         dispatch({
//           type: "USER_LOADED",
//           token,
//         });
//       } else return null;
//     };
//   };