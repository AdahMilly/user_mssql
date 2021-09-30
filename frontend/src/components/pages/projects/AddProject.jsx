import { Button, TextField } from "@mui/material"
import { Send } from "@material-ui/icons"
import { makeStyles } from "@mui/material"

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
    return <>
        <form className={classes.useStyles}>
            <TextField
                id="enter-project"
                variant="outlined"
                label="addProject"
                autoFocus
                fullWidth
            />
            <Button color="primary" variant="contained" type="submit">
                <Send />
            </Button>
        </form>
    </>
}

export default AddProject