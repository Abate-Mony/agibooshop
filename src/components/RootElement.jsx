import React from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import SideBar from './SideNav'
import NavFooter from './NavFooter'
import WithRouter from '../withRouter'
import NotificationPopUp from '../components/NotificationPopUp';

const RootElement = () => {
    const navigation = useNavigation()
    return (
        <div>
            {/* <NotificationPopUp /> */}
            <SideBar />
            <WithRouter />
            <NavFooter />
            {
                navigation.state == "loading" ? "please wait loading page" : <Outlet />
            }
        </div>
    )
}

export default RootElement