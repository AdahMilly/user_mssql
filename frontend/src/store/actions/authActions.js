
import axios from "axios";
import {URL} from "../../backend/index";

export const signUp = (user) => {
    return(dispatch) => {
        axios.post(`${URL}auth/registerUser`, user)
        .then(token => {

            localStorage.setItem("token", token.data)
            dispatch({
                type: "registerUser",
                token: "token.data"
            })
        })
        .catch(error => {
            console.log(error.response);
        })
    }
}