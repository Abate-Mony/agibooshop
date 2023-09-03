import ReactStars from 'react-rating-stars-component'
import { useNavigate, Link } from 'react-router-dom'
import { motion } from "framer-motion"
import { useEffect } from 'react'
// import { AiFillAlert, AiOutlineArrowLeft, AiOutlineShoppingCart } from "react-icons/ai"
import useItem from '../utils/checkInCart'
import { addToCart, removeFromCart } from '../actions/cartItems'
import { useDispatch } from 'react-redux'
import ImageView from '../components/ImageView';
import Button, { ButtonDanger } from './Button'
import button from './Button'

const variants = {
  show: {
    y: 0, opacity: 1,

    // transition: {
    //   duration: 1
    // }
  }, hidden: {
    y: 100, opacity: 0.3
  }
}
const ProductCard = (cartItems) => {
  const dispatch = useDispatch()
  const { className, id, productname, price, total } = cartItems;
  const item = {
    id, productname, price, total
  }
  const navigate = useNavigate()
  const { incart } = useItem(id)


  return (

    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="show"
      className={`flex-none  group  ${className} sm:w-1/3 md:w-1/3  lg:w-1/5 p-1`}

      onClick={() => navigate("/product/" + id)}
    >
      <div className={` min-h-[200px] pb-4  items-center justify-center   `}>
        <div className="relative mb-2  h-[10rem] overflow-hidden group">
          <ImageView
            src={"https://www.clawigs.com/image/cache/catalog/banner/human-2023-1140x380.jpg"}
          />
          <div
            className='absolute opacity-0 -bottom-12 group-[:hover]:bottom-0 group-[:hover]:opacity-100 transition-all duration-500 left-1/2 -translate-x-1/2 bg-gradient-to-r px-2 w-full flex justify-center from-black/10'
          >
            <ReactStars
              count={5}
              size={15}
              isHalf
              value={4}
              activeColor="#ffd700"
              edit={false}
            />
          </div>
        </div>
        <h4 className="leading-none px-2 mb-2 text-xs sm:text-sm truncate text-center font-bold uppercase"> adipisicing elit. | 43MM</h4>
        <div className='flex pb-4  justify-center items-center gap-x-4 px-2 font-poppins'>
          <h4 className='text-sm sm:text-sm lg:text-lg leading-none text-slate-800' style={{ textDecoration: "line-through" }}>199 <sup className='text-orange-500'>frs</sup></h4>
          <h4 className='text-sm sm:text-sm lg:text-lg leading-none text-rose-800' >199 <sup className='text-orange-500'>frs</sup></h4>
        </div>



        {
          incart ? <Button
            title="remove from cart"
            className="!block !mx-auto
!rounded-full !bg-rose-900 !text-xs !pt-2 !pb-2.5

"
            onClick={e => {
              e.stopPropagation()
              console.log(e)
              dispatch(removeFromCart(id))
            }}
          /> : <Button
            title="add to cart"
            className="!block !mx-auto
!rounded-full !bg-black !text-xs !pt-2 !pb-2.5
"
            onClick={e => {
              e.stopPropagation()
              dispatch(addToCart(item))
            }}
          />
        }

      </div>
    </motion.div>
  )
}

export default ProductCard