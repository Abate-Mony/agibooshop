import { MdShoppingBasket, MdHome, MdFavorite } from "react-icons/md"
import { AiOutlineShoppingCart, AiOutlineMessage, AiOutlineUser } from "react-icons/ai"
import { BiCategoryAlt } from 'react-icons/bi'
import { NavLink, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { toggleMessage as toggle } from "../actions/openMessageBox";
import { useEffect } from "react"
import { calculateTotal } from "../actions/cartItems"
import { motion } from "framer-motion"
const NavFooter = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const toggleMessage = () => dispatch(toggle());
    const { totalAmount, cartItem } = useSelector(state => state.cartItems)
    useEffect(() => {
        dispatch(calculateTotal())
    }, [totalAmount, cartItem])
    const NavLinkContainer = ({ children, to }) => {
        return (
            <NavLink
                to={to}
                className={({ isActive }) => isActive ? "justify-center font-montserrat font-medium tracking-tight w-1/5  items-center flex flex-col group  active" : "justify-center font-montserrat font-medium tracking-tight w-1/5  items-center flex flex-col group"}

            >
                <div
                    className="grid place-items-center transition-all duration-500  rounded-full group-[.active]:!bg-black/5 px-4 p-4"
                >
                    {children}
                </div>
            </NavLink>
        )
    }
    return (
        <div
            className="fixed  bottom-0 sm:py-4 z-10 w-full sm:w-fit sm:translate-y-1/2 sm:rounded-md sm:left-6 sm:bottom-1/2 min-h-[3rem] pb-4 bg-white shadow left-0"
        >
            <div className="flex sm:justify-center sm:items-center sm:flex-col grid-flow-col gap-4 px-4">

                <NavLinkContainer to={"/"}>
                    <MdHome size={25} />
                    <p className={` text-xs font-montserrat font-medium text-slate-900 tracking-tight leading-normal select-none`}>Home</p>
                </NavLinkContainer>
                <NavLinkContainer to={"/categories"}>
                <BiCategoryAlt size={25} />
                        <p className="text-xs font-montserrat font-medium text-slate-900 tracking-tight leading-normal select-none ">category</p>
                   </NavLinkContainer>
          
                <span className="justify-center font-montserrat font-medium tracking-tight bg-black relative shadow sm:shadow-2xl  flex-none h-[60px] rounded-full mt-[-25px] sm:mr-[-60px] sm:w-[60px]  sm:mt-0 text-white hover:bg-opacity-80 transition-all duration-300  w-[60px]  items-center flex flex-col " onClick={() => navigate("/cart")} >
                    <AiOutlineShoppingCart size={25} />
                    <p className="text-xs font-montserrat font-medium text-slate-900 tracking-tight leading-normal select-none">Cart</p>
                    <motion.div
                        key={cartItem}
                        animate={{ scale: [1.5, 0.7, 2, 1] }}
                        transition={{ duration: 2 }}

                        className="absolute -top-0 text-white -right-0 w-4 h-4 flex justify-center items-center rounded-full text-xs bg-red-400">{totalAmount}</motion.div>
                </span>
                <NavLinkContainer to={"/user"}>
                <AiOutlineUser size={25} />
                        <p className="text-xs font-montserrat font-medium text-slate-900 tracking-tight leading-normal select-none">user</p>
                      </NavLinkContainer>
       
                <NavLink className="justify-center font-montserrat font-medium tracking-tight w-1/5  items-center flex flex-col " onClick={toggleMessage}>
                    <AiOutlineMessage size={25} />
                    <p className="text-xs font-montserrat font-medium text-slate-900 tracking-tight leading-normal select-none">message</p>
                </NavLink>
            </div>


        </div>
    )
}

export default NavFooter