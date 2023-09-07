import "./productcart.css"
import ReactStars from 'react-rating-stars-component'
import { useNavigate, Link } from 'react-router-dom'
import { motion } from "framer-motion"
import { useEffect, useRef } from 'react'
import useItem from '../utils/checkInCart'
import { addToCart, removeFromCart } from '../actions/cartItems'
import { useDispatch } from 'react-redux'
import Button, { ButtonDanger } from './Button'
import { EffectCreative, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from "react";
import SwiperCore from "swiper";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';
SwiperCore.use([Pagination]);

const variants = {
  show: {
    y: 0, opacity: 1,

  }, hidden: {
    y: 100, opacity: 0.3
  }
}
const ProductCard = (cartItems) => {
  const [swiper, setSwiper] = useState(null);
  const dispatch = useDispatch()
  const [activeSlide, setActiveSlide] = useState(0)
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
      className={`flex-none productcart  group  w-full overflow-hidden   ${className} p-1`}
      onClick={() => navigate("/product/" + id)}
    >
      <div className={` min-h-[200px]  pb-4 relative items-center justify-center   group group-[:hover]:-translate-y-6 transition-[transform] duration-300 `}>

        <div className="relative mb-2  overflow-hidden group ">
          <Swiper className="mySwiper"
            loop
            grabCursor={true}
            effect={'creative'}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: [0, 0, -400],
              },
              next: {
                translate: ['100%', 0, 0],
              },
            }}
            modules={[EffectCreative, Pagination]}
            pagination={true}
            onSlideChange={(e) => setActiveSlide(e.activeIndex)}
          // className=""
          >
            <SwiperSlide>
              <img
                src={"https://www.mvmt.com/dw/image/v2/BDKZ_PRD/on/demandware.static/-/Sites-mgi-master/default/dw3b08217b/images/products/28000088_fr.jpg?sw=512&sh=512&q=85"}
                className='h-[12rem] md:h-[15rem] w-full '
                alt="hair " />

            </SwiperSlide>
            <SwiperSlide>
              <img
                src={"https://www.mvmt.com/dw/image/v2/BDKZ_PRD/on/demandware.static/-/Sites-mgi-master/default/dw166f6ac7/images/products/28000211_fr.jpg?sw=512&sh=512&q=85"}
                className='h-[12rem] md:h-[15rem] w-full '
                alt="hair " />

            </SwiperSlide>
            <SwiperSlide>
              <img
                src={"https://www.mvmt.com/dw/image/v2/BDKZ_PRD/on/demandware.static/-/Sites-mgi-master/default/dw0c4bfa2a/images/products/28000289_l_1.jpg?sw=512&sh=512&q=85"}
                className='h-[12rem] md:h-[15rem] w-full '
                alt="hair " />

            </SwiperSlide>
          </Swiper>

          <p className='mx-auto w-fit bg-[hsla(0,0%,93%,.69)] px-5 py-1 border rounded-full tracking-[0.05187rem] border-[#e0e0e0] font-medium uppercase text-[0.625rem] z-[10] relative -mt-4'>
            new
          </p>
          <div className='flex items-center justify-center py-1 gap-x-1'>
            {
              Array.from({ length: 4 }, (_, index) => <div className={`border-[#e0e0e0] border w-7 h-7 ${activeSlide == index ? "scale-150" : ""} `}><img src='https://www.mvmt.com/dw/image/v2/BDKZ_PRD/on/demandware.static/-/Sites-mgi-master/default/dwe6efd54b/images/products/28000357_fr.jpg?sw=512&sh=512&q=85' /> </div>)
            }
          </div>
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
        <div className='flex pb-3  justify-center items-center gap-x-4 px-2 flex-col gap-y-4 font-poppins'>
          <h4 className='text-sm leading-none text-gray-500 font-medium' >{productname}</h4>
          <h4 className='text-xs leading-none text-black font-medium' >FCFA 192,622</h4>
        </div>

      </div>
      {
        incart ? <Button
          title="remove from cart"
          className="!block lg:translate-y-10 lg:opacity-0 group-[:hover]:opacity-100  group-[:hover]:translate-y-0 !mx-auto !w-full hover:!bg-rose-900
!rounded-full !bg-rose-800 !text-xs !py-3 !transition-all !duration-[0.5s] md:!text-sm  group-[:hover]:visible lg:invisible

"
          onClick={e => {
            e.stopPropagation()
            console.log(e)
            dispatch(removeFromCart(id))
          }}
        /> : <Button
          title="add to cart"
          className="!block lg:translate-y-10 lg:opacity-0 group-[:hover]:opacity-100 y-0 group-[:hover]:translate-y-0 !mx-auto !w-full hover:!bg-blue-400
!rounded-full !bg-black !text-xs !py-3 !transition-all !duration-[0.5s] md:!text-sm  group-[:hover]:visible lg:invisible
"
          onClick={e => {
            e.stopPropagation()
            dispatch(addToCart(item))
          }}
        />
      }
    </motion.div>
  )
}

export default ProductCard