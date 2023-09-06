import React from 'react'
import { useRouteError } from 'react-router-dom'
const Error = () => {
    const err = useRouteError()
    console.log(err)
    return (
        <div>something went wrong tryagain later please?</div>
    )
}

export default Error