import { AiOutlineArrowLeft, AiOutlineShoppingCart } from "react-icons/ai"
import {TopBar} from '../components'
// import { MdOutlineArrowLeft } from "react-icons/md"
import { useNavigate } from "react-router-dom"
import { motion } from 'framer-motion'
import "./styles.css";

// import { Navigation, Pagination, Autoplay, A11y, Scrollbar } from "swiper"
import { FreeMode, Navigation, Pagination, Scrollbar, A11y, Autoplay, Thumbs } from "swiper";

import { Swiper, SwiperSlide } from 'swiper/react'
import { useState } from 'react'
import ReactStars from 'react-rating-stars-component'

import Select from 'react-select'
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/autoplay"
import "swiper/css/a11y"
import "swiper/css/scrollbar"
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/scrollbar"
const Product = () => {
// const [selected, setSelected] = useState([])
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const [number, setNumber] = useState(1)
    const options = Array.from({ length: 10 }, (arr, i) => ({ value: i + 1, label: i + 1 }))
    const navigate = useNavigate()
    const [activeSlide, setActiveSlide] = useState(0);
    return (
        <motion.div
            initial={{ y: 40 }}
            animate={{ y: 0 }}
            className="min-h-screen pb-[10rem] mySwiper">


        <TopBar name={"hair center"}/>
            <div className="md:flex  mt-6 ">
                <Swiper className="flex-1"

                    slidesPerView={1}
                    onSlideChange={(e) => setActiveSlide(e.activeIndex)}
                    modules={[Navigation, Pagination, A11y, Scrollbar]}
                    pagination={{clickable:true}}
                >
                    {["https://www.clawigs.com/image/cache/catalog/banner/old_women-1140x380.gif", "https://www.clawigs.com/image/cache/catalog/banner/lace-1140x380.jpg", "https://www.clawigs.com/image/cache/catalog/banner/human-2023-1140x380.jpg", "https://www.clawigs.com/image/cache/catalog/banner/wig-1140x380.jpg"].map((arr, index) => (
                        <SwiperSlide className="min-h-[150px] flex-none"  >
                            <motion.img
                                animate={{
                                    y: activeSlide == index ? 0 : 20,
                                    opacity: activeSlide == index ? 1 : 0.7,
                                }}
                                src={arr}
                                className="h-[18rem] md:h-[400px] w-full" alt="banner" />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="text md:w-[20rem] lg:w-[30rem] font-montserrat px-4">
                    <div className="flex mt-2 justify-between">
                        <div>
                            <h2 className="text-xl font-medium ">23,783 <sup className="text-sm">frs</sup></h2>
                            <h2 className="text-xl text-slate-400 font-medium " style={{ textDecoration: "line-through" }} >28,783 <sup className="text-sm">frs</sup></h2>
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
                            <p className="text-slate-400 text-sm italic">123 orders</p>
                        </div>
                    </div>
                    <p className="mb-2 leading-snug text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur reprehenderit obcaecati vitae voluptatum quisquam nam doloribus cupiditate eligendi sunt eveniet?</p>

                    <h2 className="text-2xl text-center font-medium font-montserrat mb-4">Brazilian hair</h2>
                    <h2 className="text-montserrat font-medium w-[400px] max-w-[calc(100%-2.5rem)] mx-auto mb-2 ">Select Quantity</h2>
                    
                    <div className="flex min-h-[3rem] mb-2 items-center w-[400px] max-w-[calc(100%-2.5rem)] mx-auto">
                    
                    <Select defaultValue={number} options={options} className="mb- w-[8rem] rounded-none ring-0 flex-1- h-full mx-auto" />
                    
                    <button type="button" class="text-white text-center  flex-1 bg-black mb-
            focus:outline-none  mx-auto block
                    
                    hover:bg-slate-900 hover:text-white  font-medium rounded-none text-sm px-3 py-2 ">Add to cart <AiOutlineShoppingCart className="inline-block ml-2" size={20} /> </button>
                    
                    </div>

                    <button type="button" class="text-white text-center bg-black mb-2
            focus:outline-none w-[400px] max-w-[calc(100%-2.5rem)] mx-auto block
             hover:bg-slate-900 hover:text-white  font-medium rounded-none text-sm px-3 py-2 " onClick={()=>navigate("/cart")} >View Cart</button>

                    <button type="button" class="text-white text-center bg-black  mb-6
            focus:outline-none w-[400px] max-w-[calc(100%-2.5rem)] mx-auto block
             hover:bg-slate-900 hover:text-white  font-medium rounded-none text-sm px-3 py-2 ">Buy now</button>

                </div>
            </div>
            <div className="flex justify-center max-w-2xl   mx-5 md:mx-auto gap-x-4 pb-4 border-b-2 border-slate-400">
            <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={3}
                    freeMode={true}
                    watchSlidesProgress={true}
                    scrollbar={{ draggable: true }}

                    modules={[FreeMode, Navigation, Thumbs, Scrollbar]}
                    className="mySwiper"
                    // breakpoints={{
                    //     640: {
                    //         slidesPerView: 2,
                    //     },
                    //     786: {
                    //         slidesPerView: 3,
                    //     },
                    //     992: {
                    //         slidesPerView: 4,
                    //     }, 1024: {
                    //         slidesPerView: 5,
                    //     },


                    // }}
                >
                    {["Product Details","Reviews","Contact seller"].map((item, index) => (<SwiperSlide key={index}>
                        <h1 style={{
                            flex: "none"
                        }} className={`font-sm uppercase text-xs md:text-sm pb-2   cursor-pointer text-center  font-manrope ${({isActive})=>isActive?"font-medium text-orange-300":"font-light"} `} onClick={() => {
                        }}>
                        
                            {item || "no service"}
                        </h1>
                    </SwiperSlide>))}
                </Swiper>
            </div>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                navigation={{
                    prevEl: ".swiper-button-pre",
                    nextEl: ".swiper-button-nxt",
                }}
                modules={
                    [Navigation, Pagination, Scrollbar, A11y, Autoplay, FreeMode, Thumbs]
                }
                // spaceBetween={10}
                // navigation={true}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                scrollbar={true}
                // modules={[FreeMode,  Thumbs]}
                className="mySwiper2"
                slidesPerView={1}
            >
                {

                    [1,2,3].map((item, index) => (<SwiperSlide key={index}>
                 <div className="min-h-[4300px] bg-slate-200">
                 
                 ndex
                 </div>
                    </SwiperSlide>))

                }

            </Swiper>
        </motion.div>
    )
}

export default Product