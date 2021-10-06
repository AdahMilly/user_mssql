import { Button } from "@material-ui/core"

import { useState } from "react"

const ExpandMinimize = (props) => {

    const handleClick = () => {
        setOpen(!open)
    }

    const [open,setOpen] = useState(false)
    return <>
    <Button onClick={handleClick}>
        {props.title}
    </Button>
    {
        open && <div>{props.children}</div>
    }
    </>
 }

export default ExpandMinimize