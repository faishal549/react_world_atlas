import { NavLink, useRouteError } from "react-router-dom"

export const ErrorPage =()=>{

    const error = useRouteError()
    console.log(error)
    return (<>
        <h1>{error.data}</h1>
        <h1> STATUS: {error.status}</h1>
        <h1> RESPONSE : {error.statusText}</h1>
        <NavLink to="/">
            <h2>Go Back</h2>
        </NavLink>
        </>
    )
}