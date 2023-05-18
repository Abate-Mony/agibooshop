import ReactStars from 'react-rating-stars-component'
import { useNavigate } from 'react-router-dom'
import {motion} from "framer-motion"
import { useEffect } from 'react'
import { AiOutlineArrowLeft, AiOutlineShoppingCart } from "react-icons/ai"

const ProductCard = ({ imgUrl, name, price,l ,r,id}) => {
const navigate=useNavigate()
useEffect(() => {
  
window.scrollTo({top:0,behavior:"smooth"})
  return () => {
  }
}, [window.location.href])

  return (
    <motion.div
    
    whileInView={{y:0,opacity:1}}
    initial={{y:10,opacity:0}}
    
    onClick={()=>navigate("/product/"+id)}
    className={`flex-none ${l?"w-[55%]":"w-1/2"}  sm:w-1/3 md:w-1/3  lg:w-1/5 p-1`}>

      <div className={` min-h-[200px]  flex- items-center justify-center ${r?"rounded-lg":""}  rounded- shadow-lg  bg-white`}>
        <div className="relative mb-2 cur  h-[12rem] overflow-hidden group">
          <img
            className="w-full h-full absolute inset-0  group-hover:-z-10"
            src="data:image/jpeg;base64,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" alt="wig" />
          
          <img
            className="w-full h-full  group-hover:scale-[1.2]  transition-all duration-500 delay-75"
            src="
            data:image/jpeg;base64,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" alt="wig" />
          <span className="block absolute cursor-pointer top-2 space-y-1 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-500 right-0 pr-2  h-[5rem] w-8 ">
          <img className='w-4 h-4 ml-auto' src="https://ecommercewebsitewithbootstrap.vercel.app/static/media/wish-black.f1f5b51751846dbfc0887729a7b4f348.svg" alt="" />
          <AiOutlineShoppingCart size={25}/>
          
          </span>
          
          <h1 className="font-montserrat absolute bottom-0 w-full
          group-hover:absolute group-hover:top-1/2 group-hover:-translate-y-1/2
          left-0 group-hover:bottom-auto transition-all
          group-hover:duration-300
          group-hover:py-4
          text-center from-neutral-400 bg-gradient-to-r font-medium
    ">Camern hairs</h1>

        </div>
        <p className="leading-none px-2 mb-2 text-xs sm:text-sm r">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className="flex pb-4  justify-between px-2 font-poppins">
          <div>
            <h4  className='text-xs sm:text-sm lg:text-lg leading-none text-slate-400' style={{textDecoration:"line-through"}}>199 <sup className='text-orange-500'>frs</sup></h4>
            <h4  className='text-xs sm:text-sm lg:text-lg leading-none'>199<sup className='text-orange-500'>frs</sup></h4>
          </div>
          <div>
          <ReactStars
          count={5}
          size={15}
          isHalf
          value={4}
          activeColor="#ffd700"
          edit={false}
          />
          <img className='w-4 h-4 ml-auto' src="https://ecommercewebsitewithbootstrap.vercel.app/static/media/wish-black.f1f5b51751846dbfc0887729a7b4f348.svg" alt="" />
          </div>

        </div>



      </div>
    </motion.div>
  )
}

export default ProductCard