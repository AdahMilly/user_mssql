import { Button } from "@mui/material"
import { Redirect } from "react-router"

const SignOut = () => {
    return <>
    <Button>Sign Out</Button>
    <Redirect to='/signin' />
    </>
}

export default SignOut