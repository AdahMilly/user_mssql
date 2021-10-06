import React from 'react'
import "./SideBar.css"

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
                <Link className={ classes.linkStyle} to="/projecttaskcreated">
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
            <Button className="acc-btn">
                <Link className={classes.linkStyle} to="/progress">
                    Account    
                </Link>
            </Button>
        </div>
    )
}

export default SideBar
