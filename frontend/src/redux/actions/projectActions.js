
import axios from "axios";

console.log(process.env);

export const createProject = (project) => {
    return(dispatch) => {
        axios.post(`${process.env.REACT_APP_PROJECT_TASK_URL}/create/createProject`, project)
        .then(({data}) => {
            const {project} = data;
            console.log(data);

            localStorage.setItem("project")
            dispatch({
                type: "createProject",
                project
            })
        })
        .catch(error => {
            console.log(error);
        })
    }
}