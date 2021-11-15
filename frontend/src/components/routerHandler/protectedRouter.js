import React from "react"
import { Route, Redirect, withRouter } from "react-router-dom"

const ProtectedRouter = ({
    component: Projects,
    ...rest }) => {

    const isAuthenticated = JSON.parse(localStorage.getItem("isAuthenticated"))
    return (
        (<>
            <Route
                {...rest} component={(props) => (
                    isAuthenticated ? (
                        <Projects {...props} />
                    ) : (
                        <Redirect to={{ pathname: '/signin', state: { from: props.location } }} />
                    )
                )}
            />
        </>)

    )
}

export default withRouter(ProtectedRouter)