import { combineReducers } from "redux";
import projectReducer from "./ProjectReducer";
import authReducer from "./AuthReducer";
import usersReducer from "./userReducer";
import taskReducer from "./taskReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    projects: projectReducer,
    users: usersReducer,
    tasks: taskReducer
})

export default rootReducer