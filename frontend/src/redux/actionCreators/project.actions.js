import { ERROR, LOADING, PROJECT_CREATE_, SUCCESS } from "../types";

const createProjectLoading = () => ({
    type: `${PROJECT_CREATE_}${LOADING}`,
})

const createProjectSuccess = () => ({
    type: `${PROJECT_CREATE_}${SUCCESS}`,
})

const createProjectError = () => ({
    type: `${PROJECT_CREATE_}${ERROR}`,
})

const projectActionCreators = {
    createProjectSuccess,
    createProjectLoading,
    createProjectError
}

export default projectActionCreators;