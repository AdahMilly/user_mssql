import { ERROR, GET_PROJECTS_, LOADING, PROJECT_CREATE_, SUCCESS } from "../types";

const createProjectLoading = () => ({
    type: `${PROJECT_CREATE_}${LOADING}`,
})

const createProjectSuccess = () => ({
    type: `${PROJECT_CREATE_}${SUCCESS}`,
})

const createProjectError = () => ({
    type: `${PROJECT_CREATE_}${ERROR}`,
})

const getProjectsLoading = () => ({
    type: `${GET_PROJECTS_}${LOADING}`
})

const getProjectsSuccess = (projects = []) => ({
    type: `${GET_PROJECTS_}${SUCCESS}`,
    payload: {
        projects
    }
})

const getProjectsError = () => ({
    type: `${GET_PROJECTS_}${ERROR}`,

})

const projectActionCreators = {
    createProjectSuccess,
    createProjectLoading,
    createProjectError,
    getProjectsLoading,
    getProjectsSuccess,
    getProjectsError
}

export default projectActionCreators;