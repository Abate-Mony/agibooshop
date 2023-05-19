import React, { useState } from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import { Brand, TopBar } from '../components'
const AuthLogin = () => {
    const [active, setActive] = useState(0);
    const buttomItems = [
        {
            name: "Login",
            to: "auth"
        },
        {
            name: "Register",
            to: "auth/register"
        },

    ]
    return (
        <>
            <TopBar name={"auth"} />
            <div className='min-h-[calc(100vh-3rem)] flex flex-col items-center justify-center  '>
                <Brand />
                <ul className='flex min-h-[2.2rem]  gap-2 w-[400px] md:w-[500px]   mb-6 mt-4 max-w-[calc(100vw-2.5rem)]'>
                    {
                    buttomItems.map(({name,to},index)=>(
                        <li className={`flex-1 flex bg-orange-400 rounded-xl cursor-pointer over `} key={index} onClick={()=>setActive(index)}> <NavLink
                        to={`/${to}`} 
                        className={`w-full shadow-lg  grid rounded-lg bg-blue-400 place-items-center ${active===index?"bg-blue-800":"bg-blue-200"}`}
                        >{name}</NavLink> </li>
                    ))
                    }
                </ul>
                <Outlet />

            </div>
        </>
    )
}

export default AuthLogin