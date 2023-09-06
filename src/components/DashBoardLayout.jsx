import React from 'react'
import { Outlet } from 'react-router-dom'

const DashBoardLayout = () => {
    return (
        <div>DashBoardLayout

            <div>
                <Outlet />

            </div>
        </div>
    )
}

export default DashBoardLayout