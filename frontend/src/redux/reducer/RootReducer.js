import { combineReducers } from "redux";
import projectReducer from "./ProjectReducer";
import authReducer from "./AuthReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    projects : projectReducer
})

export default rootReducer