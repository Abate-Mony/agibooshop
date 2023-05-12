import { MdOutlineClose } from "react-icons/md"
import Brand from "./Brand"
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from "../actions/openSidebar"
import { useNavigate } from "react-router-dom"
const SideBar = () => {
const navigate=useNavigate();
  const isOpen = useSelector(state => state.sideBar.isOpen)

  const dispatch = useDispatch()
  const toggleSideBar = () => dispatch(actions.toggle());

  const list = [

    {

      value: "Home", link: "/"
    },
    {

      value: "OurStore", link: "/ourstore"
    },
    {

      value: "Contact Us", link: "contact-us"
    },
    {

      value: "About us", link: "about-us"
    },
    {

      value: "Whatsapp ", link: "/"
    },

    // "Home","Store","Contact Us","About Us","whatSapp us"
  ]
  return (
    <div className={`${isOpen ? "visible" : "invisible"} text-white transition-[visibility] duration-300 inset-0 top-[-10px] bg-slate-400 fixed z-[20] bg-opacity-50  select-none`}
      onClick={toggleSideBar}
    >
      <div className="w-full flex flex-col md:w-[300px] md:max-w-[calc(100vw-2rem)]  h-full bg-white-" onClick={(e) => e.stopPropagation()}>
        <div className="flex  pt-4 items-center flex-none justify-between px-4 bg-black">
          <Brand />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: isOpen ? 1 : 0 }}
          >

            <MdOutlineClose size={30} className="cursor:pointer" onClick={toggleSideBar} />
          </motion.span>
        </div>
        <div className="flex-1 bg-black flex items-center justify-center">
          <ul className="text-md" >
            {list.map((item, index) => {
              return (
                <motion.li  onClick={()=>{
                
                navigate(item.link);
                toggleSideBar()
                }}
                  animate={{ x: isOpen ? 0 : -500 }}
                  transition={{ delay: index * .1 }}
                  className="text-xl font-medium  text-center leading-8" key={index}>{item.value}</motion.li>
              )
            })}

          </ul>

        </div>
      </div>
    </div>
  )
}

export default SideBar