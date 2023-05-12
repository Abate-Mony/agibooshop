import { MdShoppingBasket, MdHome,MdFavorite } from "react-icons/md"
import { AiOutlineShoppingCart,AiOutlineMessage } from "react-icons/ai"
const NavFooter = () => {
    return (
        <div
            className="fixed  bottom-0 sm:py-4 z-10 w-full sm:w-fit sm:translate-y-1/2 sm:rounded-md sm:left-6 sm:bottom-1/2 min-h-[3rem] pb-4 bg-white shadow left-0"
        >
            <div className="flex sm:justify-center sm:items-center sm:flex-col grid-flow-col gap-4 px-4">
              
                <span className="justify-center w-1/5  items-center flex flex-col ">
                    <MdHome size={25} />
                    <p className="text-xs">Home</p>
                </span>
              
                <span className="justify-center w-1/5  items-center flex flex-col ">
                    <MdHome size={25} />
                    <p className="text-xs">contact</p>
                </span>
                <span className="justify-center bg-black relative shadow sm:shadow-2xl  flex-none h-[60px] rounded-full mt-[-25px] sm:mr-[-60px] sm:w-[60px]  sm:mt-0 text-white hover:bg-opacity-80 transition-all duration-300  w-[60px]  items-center flex flex-col ">
                    <AiOutlineShoppingCart size={25} />
                    <p className="text-xs">Cart</p>
                    <div className="absolute -top-0 text-white -right-0 w-4 h-4 flex justify-center items-center rounded-full text-xs bg-red-400">0</div>
                </span>
                <span className="justify-center w-1/5  items-center flex flex-col ">
                    <MdFavorite size={25} />
                    <p className="text-xs">wishlist</p>
                </span>
                <span className="justify-center w-1/5  items-center flex flex-col ">
                    <AiOutlineMessage size={25} />
                    <p className="text-xs">message</p>
                </span>
            </div>


        </div>
    )
}

export default NavFooter