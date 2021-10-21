
import axios from "axios";

const {REACT_APP_API_URL} = process.env;

export const signUp = (user) => {
    return(dispatch) => {
        axios.post(`${REACT_APP_API_URL}auth/registerUser`, user)
        .then(({data}) => {
            const {token, user} = data;
            console.log(data);

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

export const signIn = (credentials) => {
    return(dispatch) => {
        axios.post(`${REACT_APP_API_URL}auth/loginUser`, credentials)
        .then(token => {
            console.log(token);

            localStorage.setItem("token", token.data)
            dispatch({
                type: "loginUser",
                token: "token.data"
            })
        })
        .catch(error => {
            console.log(error.response);
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