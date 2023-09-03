import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideNav'
import NavFooter from './NavFooter'

const RootElement = () => {
  return (
    <div>
     <SideBar/>
      <NavFooter />
      <Outlet/>
    
    </div>
  )
}

export default RootElement