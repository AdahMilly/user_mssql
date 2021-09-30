import React from 'react'

import { Link } from 'react-router-dom'

import { Button } from '@mui/material'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  linkStyle: {
    color: '#00000',
    textDecoration:'none'
  },
});


const SideBar = () => {

    const classes = useStyles()
    return (
        <div className="sidebar">
            <Button color="inherit">
                <Link className={ classes.linkStyle} to="/addproject">
                    Dashboard
                </Link>
            </Button>
            <Button color="inherit">
                <Link className={classes.linkStyle} to="/projects">
                    Projects
                </Link>
            </Button>
            <Button color="inherit">
                <Link className={classes.linkStyle} to="/tasks">
                    Tasks
                </Link>
            </Button>
        </div>
    )
}

export default SideBar
