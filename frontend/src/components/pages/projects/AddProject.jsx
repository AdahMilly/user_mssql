import {React, useState} from "react"

import { Button, TextField } from "@mui/material"
import { Send } from "@material-ui/icons"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles({
    formStyle: {
        margin: "0px auto",
        padding: "30px",
        borderRadius: "9px",
        boxShadow: "0px 0px 12px -3px #000000",
        display: "flex",
        justifyContent:"space-between"
    },
    submitButton: {
        marginLeft:"20px"
    }
})

const AddProject = () => {

    const classes = useStyles()
    const [project, setProject] = useState({
        name: "",
        technology:"",
        isComplete: false
    })

    const handleSubmit = e => {
        e.preventDefault()
        console.log(project)
        setProject({
            name: "",
            technology: "",
            isComplete: false
        })
    }
    return <>
        <form className={classes.useStyles} onSubmit={handleSubmit}>
            <TextField
                id="enter-project"
                variant="outlined"
                label="addProject"
                autoFocus
                fullWidth
                value={project.name}
                onChange={(e) => setProject({...project, name: e.target.value, date: new Date()})}
            />
            <Button color="primary" variant="contained" type="submit">
                <Send />
            </Button>
        </form>
    </>
}

export default AddProject