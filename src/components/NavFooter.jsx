import { MdShoppingBasket, MdHome, MdFavorite } from "react-icons/md"
import { AiOutlineShoppingCart, AiOutlineMessage, AiOutlineUser } from "react-icons/ai"
import { BiCategoryAlt } from 'react-icons/bi'
import { NavLink, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { toggleMessage as toggle } from "../actions/openMessageBox";
import { useEffect } from "react"
import { calculateTotal } from "../actions/cartItems"
import { motion } from "framer-motion"
import useOpenClose from "../store/useOpenClose"
const NavFooter = () => {
    const { open } = useOpenClose()

    const navigate = useNavigate();
    const dispatch = useDispatch()
    const toggleMessage = () => dispatch(toggle());
    const { totalAmount, cartItem } = useSelector(state => state.cartItems)
    useEffect(() => {
        dispatch(calculateTotal())
    }, [totalAmount, cartItem])
    const NavLinkContainer = ({ to, icon: Icon, text }) => {
        return (
            <NavLink
                to={to}
                className={"justify-center  font-montserrat font-medium tracking-tight w-1/5  items-center flex flex-col group "}
            >
                {({ isActive, isPending }) => (
                    <div
                        className="grid place-items-center transition-all duration-500  rounded-full "
                    >
                        <Icon
                            size={25}
                            color={(isPending ? "blue" : isActive ? "gold" : "gray")}

                        />
                        <p className={` text-xs font-montserrat font-medium text-slate-900 tracking-tight leading-normal select-none`}>{text}</p>
                    </div>
                )}

            </NavLink>
        )
    }
    return (
        <div
            className="fixed pt-4 lg:hidden bottom-0 sm:py-4 z-10 w-full sm:w-fit sm:translate-y-1/2 sm:rounded-md sm:left-6 sm:bottom-1/2 min-h-[3rem] pb-4 bg-white shadow left-0"
        >
            <div className="flex sm:justify-center sm:items-center sm:flex-col grid-flow-col gap-4 px-4">

                <NavLinkContainer to={"/"}
                    text={"Home"}
                    icon={MdHome}

                />
                <NavLinkContainer to={"/categories"}
                    text={"Category"}
                    icon={BiCategoryAlt}

                />


                <div onClick={() => open()}
                    className="justify-center 
                font-montserrat font-medium
                tracking-tight bg-black
                relative shadow sm:shadow-2xl 
                flex-none h-[60px] rounded-full
                mt-[-25px] sm:mr-[-60px] sm:w-[60px]
                sm:mt-0 text-white hover:bg-opacity-80
                transition-all duration-300  w-[60px]  
                items-center flex flex-col " to={"/cart"} >
                    <AiOutlineShoppingCart size={25} />
                    <p className="text-xs font-montserrat font-medium text-slate-900 tracking-tight leading-normal select-none">Cart</p>
                    <motion.div
                        key={cartItem}
                        animate={{ scale: [1.5, 0.7, 2, 1] }}
                        transition={{ duration: 2 }}

                        className="absolute -top-0 text-white -right-0 w-4 h-4 flex justify-center items-center rounded-full text-xs bg-red-400">{totalAmount}</motion.div>
                </div>
                <NavLinkContainer to={"/user"}
                    text={"user"}
                    icon={AiOutlineUser}

                />



                <NavLink className="justify-center font-montserrat font-medium tracking-tight w-1/5  items-center flex flex-col " onClick={toggleMessage}>
                    <AiOutlineMessage size={25} />
                    <p className="text-xs font-montserrat font-medium text-slate-900 tracking-tight leading-normal select-none">message</p>
                </NavLink>
            </div>


        </div>
    )
}

export default NavFooter