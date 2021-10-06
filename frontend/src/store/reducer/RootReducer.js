import { combineReducers } from "redux";
import ProjectReducer from "./ProjectReducer";

const rootReducer = combineReducers({
    projects : ProjectReducer
})

export default rootReducer