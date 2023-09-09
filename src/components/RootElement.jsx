import React from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import SideBar from './SideNav'
import NavFooter from './NavFooter'
import WithRouter from '../withRouter'
import NotificationPopUp from '../components/NotificationPopUp';
import Slider from './Slider'
import useOpenClose from '../store/useOpenClose'
import Cart from '../pages/Cart'
import Footer from './Footer'
import NavBar from './NavBar'

const RootElement = () => {
    const navigation = useNavigation()
    const { isOpen, close } = useOpenClose()
    return (
        <>
            <NavBar/>

            <Cart />
            <WithRouter />

            <NavFooter />
            {
                navigation.state == "loading" ? "please wait loading page" : <Outlet />
            }
            <Footer />
        </>
    )
}

export default RootElement