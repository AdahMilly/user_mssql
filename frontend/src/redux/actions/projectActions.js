
import axios from "axios";
import projectActionCreators from "../actionCreators/project.actions";

export const createProject = (project, callback = () => null) => {
    return (dispatch) => {
        dispatch(projectActionCreators.createProjectLoading())
        axios.post(`${process.env.REACT_APP_PROJECT_TASK_URL}/project/create`, project)
            .then((res) => {
                dispatch(projectActionCreators.createProjectSuccess())
                callback()
            })
            .catch(error => {
                dispatch(projectActionCreators.createProjectError())
                callback(error);
            })
    }
}

export const getProjects = (params, callback = () => null) => {
    return (dispatch) => {
        dispatch(projectActionCreators.getProjectsLoading())
        axios.get(`${process.env.REACT_APP_PROJECT_TASK_URL}/project/all`)
            .then((res) => {
                const { projects } = res.data;
                dispatch(projectActionCreators.getProjectsSuccess(projects))
            })
            .catch(error => {
                dispatch(projectActionCreators.getProjectsError())
                callback(error)
            })
    }
}
export const deleteProject = (id, callback = () => null) => {
    return (dispatch) => {
        dispatch(projectActionCreators.deleteProjectLoading())
        axios.delete(`${process.env.REACT_APP_PROJECT_TASK_URL}/project/delete/${id}`)
            .then((res) => {
                dispatch(projectActionCreators.deleteProjectSuccess(id))
                callback()
            })
            .catch(error => {
                dispatch(projectActionCreators.deleteProjectError())
                callback(error);
            })
    }
}