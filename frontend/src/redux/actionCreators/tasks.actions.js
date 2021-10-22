import { 
    ERROR, 
    GET_TASKS_, 
    LOADING, 
    TASK_CREATE_,
    COMPLETE_TASK_,
    SUCCESS 
} from "../types";

const createTaskLoading = () => ({
    type: `${TASK_CREATE_}${LOADING}`,
})

const createTaskSuccess = () => ({
    type: `${TASK_CREATE_}${SUCCESS}`,
})

const createTaskError = () => ({
    type: `${TASK_CREATE_}${ERROR}`,
})

const getTasksLoading = () => ({
    type: `${GET_TASKS_}${LOADING}`
})

const getTasksSuccess = (tasks = []) => ({
    type: `${GET_TASKS_}${SUCCESS}`,
    payload: {
        tasks
    }
})

const getTasksError = () => ({
    type: `${GET_TASKS_}${ERROR}`,

})

const completeTaskLoading = (task_id) => ({
    type: `${COMPLETE_TASK_}${LOADING}`,
    payload:{
        task_id
    }
})

const completeTaskSuccess = (task) => ({
    type: `${COMPLETE_TASK_}${SUCCESS}`,
    payload:{
        task
    }
})

const completeTaskError = () => ({
    type: `${COMPLETE_TASK_}${ERROR}`,
})

const tasksActionCreators = {
    createTaskSuccess,
    createTaskLoading,
    createTaskError,
    getTasksLoading,
    getTasksSuccess,
    getTasksError,
    completeTaskSuccess,
    completeTaskLoading,
    completeTaskError,
}

export default tasksActionCreators;