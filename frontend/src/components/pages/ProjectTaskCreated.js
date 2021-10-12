import { withRouter } from "react-router-dom"

import ListProjects from "./projects/ListProjects"
import ListTasks from "./tasks/ListTasks"


const ProjectTaskCreated = () => {
    return <div>
        <ListProjects />
        <ListTasks />
    </div>
}


export default withRouter(ProjectTaskCreated)