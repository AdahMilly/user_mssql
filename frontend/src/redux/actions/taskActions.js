
import axios from "axios";
import tasksActionCreators from "../actionCreators/tasks.actions";

export const createTask = (task, callback = () => null) => {
    return (dispatch) => {
        dispatch(tasksActionCreators.createTaskLoading())
        axios.post(`${process.env.REACT_APP_PROJECT_TASK_URL}/task/create`, task)
            .then((res) => {
                dispatch(tasksActionCreators.createTaskSuccess())
                callback()
            })
            .catch(error => {
                dispatch(tasksActionCreators.createTaskError())
                callback(error);
            })
    }
}

export const getTasks = (params, callback = () => null) => {
    return (dispatch) => {
        dispatch(tasksActionCreators.getTasksLoading())
        axios.get(`${process.env.REACT_APP_PROJECT_TASK_URL}/task/all?project_id=${params.project_id}`)
            .then((res) => {
                const { tasks } = res.data;
                dispatch(tasksActionCreators.getTasksSuccess(tasks))
            })
            .catch(error => {
                dispatch(tasksActionCreators.getTasksError())
                callback(error)
            })
    }
}

export const completeTask = (task, callback = () => null) => {
    return (dispatch) => {
        dispatch(tasksActionCreators.completeTaskLoading(task._id))
        axios.put(`${process.env.REACT_APP_PROJECT_TASK_URL}/task/complete/${task._id}`)
            .then((res) => {
                dispatch(tasksActionCreators.completeTaskSuccess(task))
                callback()
            })
            .catch(error => {
                dispatch(tasksActionCreators.completeTaskError())
                callback(error);
            })
    }
}