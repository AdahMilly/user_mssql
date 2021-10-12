import React from "react"
import {Route, Redirect, withRouter} from "react-router-dom"

const ProtectedRouter = ({ 
    isAuthenticated,
    component:Component,
     ...rest}) => (
    (<>
    <Route 
    {...rest} component={(props) => (
        isAuthenticated ? (
            <Component {...props}/>
        ): (
            <Redirect to = '/signin'/>
        )
    )}
    />
    </>)
    
)

export default withRouter(ProtectedRouter)