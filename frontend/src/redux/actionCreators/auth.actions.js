import { ERROR, LOADING, SIGN_IN_, SUCCESS } from "../types";

const userSignInLoading = () => ({
    type: `${SIGN_IN_}${LOADING}`,
})

const userSignInSuccess = (user) => ({
    type: `${SIGN_IN_}${SUCCESS}`,
    payload: {
        user
    }
})

const userSignInError = () => ({
    type: `${SIGN_IN_}${ERROR}`,
})

const authActionCreators = {
    userSignInSuccess,
    userSignInLoading,
    userSignInError
}

export default authActionCreators;