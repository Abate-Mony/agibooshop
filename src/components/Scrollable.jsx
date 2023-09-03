import React from 'react'

const Scrollable = ({ children ,className}) => {
    return (
        <div
            className={`flex flex-wrap overflow-x-auto overflow-y-hidden ${className}`}
        >
            {children}
        </div>
    )
}

export default Scrollable