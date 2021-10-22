import { TASK_CREATE_, ERROR, LOADING, SUCCESS, GET_TASKS_, COMPLETE_TASK_ } from "../types";

const initialState = {
    tasks: [],
    taskCreateLoading: false,
    tasksLoading: true
}

const taskReducer = (state = initialState, action) => {

    switch (action.type) {
        case `${TASK_CREATE_}${LOADING}`:
            return {
                ...state,
                taskCreateLoading: true,
            };
        case `${TASK_CREATE_}${SUCCESS}`:
            return {
                ...state,
                taskCreateLoading: false,
            };
        case `${TASK_CREATE_}${ERROR}`:
            return {
                ...state,
                taskCreateLoading: false,
            };
        case `${GET_TASKS_}${LOADING}`:
            return {
                ...state,
                tasksLoading: true,
            }
        case `${GET_TASKS_}${SUCCESS}`:
            return {
                ...state,
                tasks: action.payload.tasks,
                tasksLoading: false
            }
        case `${GET_TASKS_}${ERROR}`:
            return {
                ...state,
                tasksLoading: false

            }
        case `${COMPLETE_TASK_}${LOADING}`:
            return {
                ...state,
                tasksCompleteLoading: action.payload.task_id,
            }
        case `${COMPLETE_TASK_}${SUCCESS}`:
            const taskIndex = state.tasks.findIndex(task => task._id === action.payload.task?._id)
            const _tasks = [...state.tasks]
            _tasks[taskIndex] = action.payload.task

            return {
                ...state,
                tasks: _tasks,
                tasksCompleteLoading: false
            }
        case `${COMPLETE_TASK_}${ERROR}`:
            return {
                ...state,
                tasksCompleteLoading: false
            }



        default: return state
    }
}

export default taskReducer