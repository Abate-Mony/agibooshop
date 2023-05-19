import { TopBar } from "../components"
import { Brand, Footer, NavBar, NavMenu, ProductCard } from "../components"
// import { Navigation, Pagination, Autoplay, A11y } from "swiper"
import { FreeMode, Navigation, Pagination, Scrollbar, A11y, Autoplay, Thumbs } from "swiper";
import { Review } from '../components'
// import {Footer}
import { Swiper, SwiperSlide } from 'swiper/react'
import { useEffect, useState, useRef } from "react"
import { motion } from 'framer-motion'

const User = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div>
            <TopBar name="user " />

            <div className="flex justify-between items-center px-4 mt-4 mb-4">
                <div><h1> Welcome Back </h1>
                    <h1 className="text-xl font-medium font-montserrat pl-3 mb-4"> User Manfred </h1>
                </div>
                <div>
                <button
                                        type="button"
                                        a data-te-ripple-init
                                        data-te-ripple-color="light"
                                        className="inline-block rounded-none  bg-red-400 px-4 pb-2 pt-2 w-fit my-4 mt-0 text-xs font-medium uppercase
leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150
ease-in-out hover:bg-primary-600 mx-auto
hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
focus:outline-none focus:ring-0 active:bg-primary-700
active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                        onClick={() => {
                                            if (window.confirm("do you want to logout out")) {
                                                // setIslogin(false)
                                                localStorage.token = ""
                                                // navigate("/login")
                                            }
                                        }}
                                    >
                                        LogOut
                                    </button>


                </div>

            </div>
            <Swiper
                slidesPerView={1.2}
                onSlideChange={(e) => setActiveSlide(e.activeIndex)}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                modules={[Navigation, Pagination, Autoplay, A11y]}
                // scrollbar={true}
                pagination={true}
                // navigation={true}
                spaceBetween={4}

                breakpoints={{
                    786: {
                        slidesPerView: 2,
                    },



                }}
            >
                {[1, 2, 4].map((arr, index) => (
                    <SwiperSlide className="min-h-[150px] flex-none">
                        <motion.div
                            initial={false}
                            animate={{}}
                            src={arr}
                            className="h-[17rem] md:h-[25rem] rounded-lg mx-4   bg-orange-300 w-full" alt="banner" >{index}</motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* oirhioprehpotherpoh */}

            <div className="flex justify-center max-w-2xl   mx-5 md:mx-auto gap-x-4 pb-4 border-b-2 border-slate-400">
                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={3}
                    freeMode={true}
                    watchSlidesProgress={true}
                    scrollbar={{ draggable: true }}

                    modules={[FreeMode, Navigation, Thumbs, Scrollbar]}
                    className="mySwiper mt-4"
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
                    {["Recents Transactions", "Reviews", "Contact seller"].map((item, index) => (<SwiperSlide key={index}>
                        <h1 style={{
                            flex: "none"
                        }} className={`tracking-tighter  text-xs md:text-sm pb-2   cursor-pointer text-center  font-manrope ${({ isActive }) => isActive ? "font-semibold text-orange-300" : "font-light"} `} onClick={() => {
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
                className="mySwiper2 max-w-6xl"
                slidesPerView={1}
            >

                <SwiperSlide >
                    <div className=" ">

                        <h1 className="text-2xl font-medium font-montserrat text-center mt-2 mb-4 tracking-tighter italic">PRODUCT DETAILS</h1>
                        <h2 className="text-2xl text- pl-4 font-medium font-montserrat mb-4">Brazilian hair</h2>

                        <div className="px-4 tracking-tight leading-6 text-sm md:text-lg">
                            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, sint animi ab expedita tempore dolorem maxime cupiditate, consectetur eligendi magni laboriosam? Placeat, ex iste. A itaque molestias odit nostrum iure vel, blanditiis repellat repudiandae! Porro aperiam excepturi ipsum velit temporibus.</p>
                            <h2 className="text-2xl text- pl-4 font-medium font-montserrat mb-2 mt-2">Information</h2>

                            <ul className="pl-4 mb-4">
                                <li className="list-disc ml-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, est?</li>
                                <li className="list-disc ml-4">Lor consectetur adipisicing elit. Ipsam, est?</li>
                                <li className="list-disc ml-4">Lorem ipsumit. Ipsam, est?</li>
                                <li className="list-disc ml-4">Lorem ipsum, dolor sit amet consectst?</li>

                            </ul>

                            <h2 className="text-2xl text- pl-4 font-medium font-montserrat mb-4">Available Colors</h2>

                            <div className="flex flex-wrap gap-x-4 gap-y-2">
                                <div className="w-[6rem] h-[6rem] ">  <img src="https://www.clawigs.com/image/cache/catalog/synthetic-color/1B-60x80.jpg" className="w-full h-full" alt="color" /></div>
                                <div className="w-[6rem] h-[6rem] ">  <img src="https://www.clawigs.com/image/cache/catalog/synthetic-color/1B-60x80.jpg" className="w-full h-full" alt="color" /></div>
                                <div className="w-[6rem] h-[6rem] ">  <img src="https://www.clawigs.com/image/cache/catalog/synthetic-color/1B-60x80.jpg" className="w-full h-full" alt="color" /></div>
                                <div className="w-[6rem] h-[6rem] ">  <img src="https://www.clawigs.com/image/cache/catalog/synthetic-color/1B-60x80.jpg" className="w-full h-full" alt="color" /></div>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="border  flex flex-col pt-5 ">
                        <h2 className="text-montserrat text-lg text-center font-medium w-[400px] max-w-[calc(100%-2.5rem)] mx-auto mb-2 ">Write A Recieve about product</h2>

                        <form className="mx-4 my-10 mt-4 shadow pb-8 ">
                            <h2 className="text-montserrat font-medium w-[400px] max-w-[calc(100%-2.5rem)] mx-auto mb-2 ">Select Star Rating</h2>

                            <div class="form-group mb-6  
                    
                    w-[400px] mx-auto  gap-x-2 max-w-[calc(100%-2.5rem)]
                    
                    ">
                                <textarea class="
                      form-control
                      block
                      w-full
                      px-3
                      py-1.5
                      text-base
                      font-normal
                      text-gray-700
                      bg-white bg-clip-padding
                      border border-solid border-gray-300
                      rounded
                      transition
                      ease-in-out
                      m-0
                      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                    " id="exampleFormControlTextarea13" rows="3" placeholder="Message"></textarea>
                            </div>

                            <button type="submit" class="
                    block
                    px-6
                    py-2.5
                    bg-blue-600
                    text-white
                    font-medium
                    text-xs
                    leading-tight
                    uppercase
                    rounded
                    shadow-md
                    hover:bg-blue-700 hover:shadow-lg
                    focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                    active:bg-blue-800 active:shadow-lg
                    transition
                    duration-150
                    w-[200px] mx-auto  gap-x-2 max-w-[calc(100%-2.5rem)]
                    
                    ease-in-out">Send</button>
                        </form>

                        {/* <div className="div flex-none min-h-[2.5rem] border-4 border-orange-500">write your own reviw</div> */}
                        <div className="flex flex-wrap flex-1 overflow-y-initial">

                            {
                                [1, 2, 4, 5].map((i) => <Review />)

                            }
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className=" ">

                        CONTACT SELLTER
                    </div>
                </SwiperSlide>


            </Swiper>
            <Footer />
        </div>
    )
}

export default User