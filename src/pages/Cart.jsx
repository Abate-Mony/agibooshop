import { useEffect, useRef } from 'react'
import { CartItem, TopBar } from '../components'
import { useDispatch, useSelector } from 'react-redux'
import { calculateTotal, clearCart } from '../actions/cartItems'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import Button from '../components/Button'
import { AnimatePresence } from 'framer-motion'
const variants = {
    "show": {
        opacity: 1
        , y: 0
        ,
        transition: {
            duration: 1
        }
    },
    "hidden": {
        opacity: 0,
        y: 200

    }
}
const EmptyCart = () => {
    const navigate = useNavigate()
    return (
        <motion.div
            animate="show"
            initial="hidden"
            variants={variants}
            className=' w-full flex-1 h-full'>
            <h1 className='text-lg text-center py-10 '>
                Your Card is empty
            </h1>
            <Button
                className="mx-auto block !w-[min(400px,calc(100%-20px))] "
                onClick={() => navigate("/categories")}
                title="go to store"
            />
        </motion.div>
    )
}
const Cart = () => {
    const ref = useRef(null)
    const [searchParams] = useSearchParams()

    const dispatch = useDispatch()
    const handleClearCart = () => dispatch(clearCart())
    const { cartItem, amount, total } = useSelector(state => state.cartItems)
    useEffect(() => {
        dispatch(calculateTotal())
    }, [cartItem, amount])
    useEffect(() => {
        ref.current = setTimeout(() => {

        }, 4000);
        return () => clearTimeout(ref.current)
    }, [])
    const iscartempty = cartItem?.length > 0
    return (
        <motion.div
            initial={{ y: "-100", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className='pb-56'>
            <TopBar name={"Carts Center"} >
                {
                    iscartempty && <Button
                        onClick={() => handleClearCart()}
                        title="clear cart"
                        className="!px-3 md:!px-6  !bg-rose-900 !py-2 !mr-2 !rounded-lg !text-xs"
                    />
                }


            </TopBar>
            <div className='flex flex-wrap overflow-hidden'>
                {
                    iscartempty ?
                        cartItem.map((item, i) => (<CartItem
                            key={Math.random()}
                            animate={searchParams.get("product_id") && searchParams.get("product_id") == item.id ? true : false}
                            {...item}
                        />)) : <EmptyCart />}

            </div>

            <AnimatePresence>
                {
                    iscartempty && <motion.div
                        key="somerandonidhere"
                        transition={{
                            duration: 2
                        }}
                        initial={{ y: 0, opacity: 1 }}
                        exit={{ opacity: 0, y: 200 }}

                        className="bottom-0 items-center z-10 w-full md:flex md:max-w-3xl md:rounded-lg mx-auto fixed bg-white rounded-t-2xl py-4 pb-0 min-h-[100px] shadow-2xl  left-0 right-0">
                        <div className="flex items-center justify-between px-4 mb-6 md:gap-10" >
                            <h1 className="text-black text-xl font-semibold md:mb-4">Total</h1>
                            <h1 className="text-3xl  font-medium  tracking-tight italic">{amount}<sup className="text-slate-400 text-lg">frs</sup></h1>
                        </div>
                        <Button title="Place Order"
                            className="
                  !w-[min(400px,calc(100%-40px))] 
                  !rounded-full
                  block mx-auto
                  !bg-black hover:!bg-white 
                  hover:!text-black 
                  hover:!border-black
                  hover:!border-2
                  !border-2
                  !mb-5
                  transition-colors
                  focus:!border-2
                  focus:!border-black
                  duration-500
                  !pt-2 !pb-2.5
                  "
                        />
                    </motion.div>
                }
            </AnimatePresence>

        </motion.div>
    )

}
export default Cart