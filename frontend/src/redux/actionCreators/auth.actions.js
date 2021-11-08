import { ERROR, LOADING, SIGN_IN_,SIGN_UP, SUCCESS } from "../types";

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

const userSignUpLoading = () => ({
    type: `${SIGN_UP}${LOADING}`,
})

const userSignUpSuccess = (user) => ({
    type: `${SIGN_UP}${SUCCESS}`,
    payload: {
        user
    }
})

const userSignUpError = () => ({
    type: `${SIGN_UP}${ERROR}`,
})

const authActionCreators = {
    userSignUpLoading,
    userSignUpSuccess,
    userSignUpError,
    userSignInSuccess,
    userSignInLoading,
    userSignInError
}

export default authActionCreators;