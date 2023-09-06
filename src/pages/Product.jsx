import { AiOutlineShoppingCart } from "react-icons/ai"
import { ProductCard, Review, TopBar } from '../components'
import { useNavigate, useParams, useLocation, useLoaderData } from "react-router-dom"
import { AnimatePresence, motion } from 'framer-motion'
// import "./styles.css";
import { FreeMode, Navigation, Pagination, Scrollbar, A11y, Autoplay, Thumbs } from "swiper";

// import { FreeMode, Navigation, Pagination, Scrollbar, A11y, Autoplay, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react'
import { useState, useRef } from 'react'
import ReactStars from 'react-rating-stars-component'
import { Popup } from '../components'
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
import { useDispatch, useSelector } from "react-redux";
// import { addToCart, removeFromCart } from "../actions/cartItems";
import { addToCart, removeFromCart, increaseItem, decreaseItem } from '../actions/cartItems'
import useItemINCart from "../utils/checkInCart";
import { data } from "../constants/demoData";
import { useCallback } from "react";
import { useEffect } from "react";
import Button, { ButtonDanger } from "../components/Button";
import ImageView from '../components/ImageView';
import Scrollable from "../components/Scrollable";

const varaints = {
    show: {
        y: 90
    },
    hidden: {
        y: 0
    }
}
export const loader = ({ params }) => {
    const id = params?.id
    const productData = data.find(({ id: cartId }) => cartId == id)
    return productData
}
const Product = () => {
    // const location = useLocation()

    const { id } = useParams()
    const { incart: isInCart } = useItemINCart(id)
    const productData = useLoaderData()
    // const productData = useCallback(data.find(({ id: cartId }) => cartId == id),
    //     [id])
    const [number, setNumber] = useState(1)
    const product = {
        ...productData
    }


    const dispatch = useDispatch()
    const imgRef = useRef(null)
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [thumbsSwiper__, setThumbsSwiper__] = useState(null);
    const [selected, setSelected] = useState(null)
    const options = Array.from({ length: 10 }, (arr, i) => ({ value: i + 1, label: i + 1 }))
    const navigate = useNavigate()
    const [activeSlide, setActiveSlide] = useState(0);
    const [toggle, setToggle] = useState(false)
    const handleRemoveFromCart = () => {
        dispatch(removeFromCart(id))
    }
    const confirm = () => {
        setToggle(false)
        window.scrollTo({
            top: 80,
            behavior: "smooth"
        })

        imgRef.current.classList.add("border", "bg-orange-400")
        setTimeout(() => {
            imgRef.current.classList.remove("border", "bg-orange-400")
        }, 2000)
    }
    return (
        <motion.div
            initial={{ y: 90 }}
            animate={{ y: 0 }}
            className="min-h-screen pb-[10rem] mySwiper select-none">


            <TopBar name={"hair center"} />
            <Popup toggle={toggle} closeModal={setToggle} confirm confirmFunc={confirm}>
                Please select a hair color and continue
            </Popup>
            <div className="md:flex  mt-6">

                <div className="flex-1 border-4 max-w-3xl relative mb-12">

                    <Swiper className="flex-1-- relative--"
                        loop
                        slidesPerView={1}
                        onSlideChange={(e) => setActiveSlide(e.activeIndex)}
                        modules={
                            [Navigation, Pagination, Scrollbar, A11y, Autoplay, FreeMode, Thumbs]
                        }
                        // spaceBetween={10}
                        // navigation={true}
                        thumbs={{ swiper: thumbsSwiper__ && !thumbsSwiper__.destroyed ? thumbsSwiper__ : null }}
                        scrollbar={true}
                    >

                        {["https://www.clawigs.com/image/cache/catalog/wigs/w901555592591-1-163x216.jpg", "https://www.clawigs.com/image/cache/catalog/wigs/w901555657711-1-163x216.jpg", "https://www.clawigs.com/image/cache/catalog/wigs/w901555577492-1-300x397.jpg", "https://www.clawigs.com/image/cache/catalog/wigs/w901555577492-1-300x397.jpg"].map((arr, index) => (
                            <SwiperSlide className="min-h-[150px] max-h-[600px] flex-none "
                                key={Math.random()}
                            >
                                <ImageView
                                    zoomLevel={1.5}
                                    magnifierHeight={200}
                                    magnifieWidth={200}
                                    src={arr}
                                />

                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="-mt-24 max-w-[250px]  mx-auto !overflow-visible   min-h-[50px]">
                        <Swiper

                            onSwiper={setThumbsSwiper__}
                            // direction="vertical"
                            spaceBetween={10}
                            slidesPerView={3}
                            freeMode={true}
                            watchSlidesProgress={true}
                            scrollbar={{ draggable: true }}

                            modules={[FreeMode, Navigation, Thumbs, Scrollbar]}
                            className={`mySwiper- mt-4 overflow-visible items-center px-5`}

                        >
                            {["https://www.clawigs.com/image/cache/catalog/wigs/w901555592591-1-163x216.jpg", "https://www.clawigs.com/image/cache/catalog/wigs/w901555657711-1-163x216.jpg", "https://www.clawigs.com/image/cache/catalog/wigs/w901555577492-1-300x397.jpg", "https://www.clawigs.com/image/cache/catalog/wigs/w901555577492-1-300x397.jpg"].map((item, index) => (<SwiperSlide key={index}
                                className="group"
                            >

                                <img src={item}
                                    alt="someimg"
                                    className="w-full max-w-[50px] max-h-[50px]  translate-y-0  group-[.swiper-slide-thumb-active]:!scale-125 group-[.swiper-slide-thumb-active]:!rotate-45 group-[.swiper-slide-thumb-active]:!rounded-full "
                                />
                            </SwiperSlide>))}
                        </Swiper>
                    </div>
                </div>




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
                    <h2 className="text-montserrat font-medium w-[400px] max-w-[calc(100%-2.5rem)] mx-auto mb-2 ">Select Color</h2>
                    <div ref={imgRef} className="flex py-2 px-1 transition-all duration-500 flex-wrap gap-x-2 gap-y-1 mb-4  w-[400px] max-w-[calc(100%-2.5rem)] mx-auto">
                        {
                            [
                                "https://www.clawigs.com/image/cache/catalog/synthetic-color/1B-60x80.jpg",
                                "https://www.clawigs.com/image/cache/catalog/synthetic-color/12-60x80.jpg",
                                "https://www.clawigs.com/image/cache/catalog/synthetic-color/2-60x80.jpg",
                                "https://www.clawigs.com/image/cache/catalog/synthetic-color/29-60x80.jpg",
                                "https://www.clawigs.com/image/cache/catalog/synthetic-color/672B-60x80.jpg",
                                "https://www.clawigs.com/image/cache/catalog/synthetic-color/102-60x80.jpg"

                            ].map((url, index) => (
                                <motion.div
                                    key={Math.random()}
                                    initial={false}
                                    animate={{ scale: selected == index ? [0.8, 1, 0.9] : null }}
                                    transition={{
                                        duration: 1,
                                        ease: "easeInOut",
                                        // times: [0, 0.2, 0.5, 0.8, 1],
                                        repeat: Infinity,
                                        // repeatDelay: 1

                                    }

                                    }
                                    onClick={() => {
                                        setSelected(index)
                                        if ("navigator" in window && selected != index) {
                                            window.navigator.vibrate([60])

                                        }
                                    }}

                                    className={`w-[3rem] h-[3rem] cursor-pointer ${selected === index ? "border border-orange-500" : ""}`}>  <img src={url} className="w-full h-full rounded-lg shadow" alt="color" /></motion.div>
                            ))

                        }
                    </div>
                    <h2 className="text-montserrat font-medium w-[400px] max-w-[calc(100%-2.5rem)] mx-auto mb-2 ">Select Quantity</h2>

                    <div className="flex min-h-[3rem] mb-2 items-center w-[400px] max-w-[calc(100%-2.5rem)] mx-auto">
                        {
                            !isInCart && <Select
                                onChange={(e) => setNumber(e.value)}
                                menuPlacement="top"
                                defaultValue={{
                                    value: 1,
                                    label: 1
                                }}
                                options={options}
                                components={{ Indicator: null }}
                                className="mb- w-[6rem] rounded-none ring-0 flex-1- h-full mx-auto" />

                        }

                        {
                            isInCart ? (
                                <div
                                    key={"agiufgasidgfog"}
                                    className="w-full"
                                    initial={{
                                        x: -100, opacity: 1
                                    }}
                                    animate={{
                                        x: 0, opacity: 1

                                    }}
                                    exit={{
                                        x: 10, opacity: 0
                                    }}


                                >
                                    <ButtonDanger
                                        className={"!w-[min(400px,calc(100%-20px))] block mx-auto"}
                                        onClick={() => handleRemoveFromCart()}
                                        title="Remove from cart"
                                    />
                                </div>
                            ) : (
                                <button type="button" class="text-white text-center  flex-1 bg-black mb-
                                focus:outline-none  mx-auto block
                                        
                                        hover:bg-slate-900 hover:text-white  font-medium rounded-none text-sm px-3 py-2 "
                                    onClick={() => {
                                        // addProduct(5)
                                        product.total = number || 1
                                        dispatch(addToCart(product))
                                    }}
                                >Add to cart <AiOutlineShoppingCart className="inline-block ml-2" size={20} /> </button>

                            )
                        }
                    </div>

                    <div className="flex w-[400px] items-center mx-auto  gap-x-2 max-w-[calc(100%-2.5rem)]">
                        <Button
                            onClick={() => navigate(`/cart?redirect_frm=product&product_id=${id}`)}
                            title="Add To Wishlist"
                            className={"!text-xs !px-1  !text-white !border !bg-black !hover:bg-slate-950 flex-1 !font-light !font-montserrat"}
                        />
                        <Button
                            onClick={() => navigate(`/cart?redirect_frm=product&product_id=${id}`)}
                            title="View Cart"
                            className={"!text-xs !px-1 !bg-transparent flex-1 !text-black !border !border-blue-700 !font-light !font-montserrat"}
                        />

                    </div>
                    <Button
                        className={"!w-[min(400px,calc(100%-20px))] block mx-auto"}
                        title={"Buy Now"}
                    />
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
                    {["Product Details", "Reviews", "Contact seller"].map((item, index) => (<SwiperSlide
                        key={index}
                        className="group">
                        <h1 style={{
                            flex: "none"
                        }} className={`font-sm uppercase text-xs md:text-sm pb-2 group-[.swiper-slide-thumb-active]:!scale-125 group-[.swiper-slide-thumb-active]:!font-bold   cursor-pointer text-center  font-manrope ${({ isActive }) => isActive ? "font-medium text-orange-300" : "font-light"} `} onClick={() => {
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

            <h1 className="text-2xl font-medium mb-4 mt-6 text-center font-montserrat">Related Product</h1>
            <Scrollable className={"!flex-wrap !justify-center  border mx-auto"}>
                {data.map((arr, index) => <ProductCard
                    className="rounded-md !max-w-[200px] md:!max-w-[230px]"
                    key={index}
                    {
                    ...arr
                    }
                />)}
            </Scrollable>
            <h1 className="text-2xl font-medium mb-4 mt-6 text-center font-montserrat">New Arrival </h1>

            <Scrollable className={"!flex-nowrap    mx-auto "}>
                {data.map((arr, index) => <ProductCard
                    className="rounded-md !max-w-[200px] md:!max-w-[230px]"
                    key={index}
                    {
                    ...arr
                    }
                />)}
            </Scrollable>
        </motion.div>
    )
}

export default Product