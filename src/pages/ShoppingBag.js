import React, { useState } from 'react'
import { EffectCreative, Pagination, Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Button from '../components/Button';
import { BiSearch } from 'react-icons/bi'
import { AiOutlineUser, AiOutlinePlus, AiOutlineMinus, AiOutlineMenu } from 'react-icons/ai'
import { Brand } from '../components';
import { BsBag } from 'react-icons/bs'
import ShoppingCart from '../components/ShoppingCart';
import PromoCode from '../components/PromoCode';
import DropDown from '../components/DropDown';

const ShoppingBag = () => {
    const [toggle, setToggle] = useState(false)

    return (
        <div
            className='bg-white'
        >
            <div
                className='py-2 text-white text-center container mx-auto bg-black/95'
            >
                <Swiper
                    modules={[Autoplay, Navigation]}
                    navigation={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false
                    }}
                >
                    <SwiperSlide>
                        <p
                            className='text-xs md:sm lg:lg'
                        >FREE SHIPPING OVER $75 USD & EASY RETURNS</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <p
                            className='text-xs md:sm lg:lg'
                        >TODAY'S CLEANEST DIVE WATCH | SHOP CALI DIVER SHOP NOW <Button
                                title="shop now"
                                className="!inline-block !px-2 "
                            /></p>
                    </SwiperSlide>
                </Swiper>
            </div>
            {/* top nav bar here */}
            <div
                className='border-b sticky top-0 left-0 right-0 bg-white z-[10]'
            >
                <div
                    className='lg:px-14 mx-auto py-2 px-2  flex justify-between items-center relative'
                >
                    <DropDown 
                    setToggle={setToggle}
                    toggle={toggle} />

                    <AiOutlineMenu
                        size={20}
                        className='block lg:hidden'
                    />
                    <ul
                        className='lg:flex items-center gap-x-2 hidden'
                    >
                        <li>
                            <a href='#'>Men</a>
                        </li>
                        <li>
                            <a href='#'>Women</a>
                        </li>
                    </ul>
                    <Brand />
                    <div
                        className='flex gap-x-3.5 items-stretch  '
                    >
                        <span className='grid place-items-center'>
                            <BiSearch
                                onClick={() => setToggle(true)}
                                className='text-slate-800 font-extralight cursor-pointer '
                                size={20}
                            />
                        </span>
                        <span
                            className='relative   hidden cursor-pointer lg:grid place-items-center  group '
                        >
                            <AiOutlineUser
                                className='text-slate-800 font-extralight '
                                size={20}
                            />
                            <div
                                className='absolute top-[calc(100%+6px)] flex flex-col space-y-5 -translate-x-1/2 translate-y-5 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 left-1/2 invisible group-hover:visible
                             min-h-[70px] bg-black/95 px-5 py-4 min-w-fit
                             
                             
                             '
                            >
                                <div
                                    className='flex flex-col gap-y-4 w-full'
                                >
                                    <Button
                                        title="log in "
                                        className="!block break-keep flex-1 
                                    !rounded-full !py-3 !px-4  !text-xs !min-w-[100px]
                                    !text-center
                                    !bg-white !text-black !font-medium uppercase
                                    "
                                    />
                                    <Button
                                        title="sign up"
                                        className="!block break-keep 
                                    !rounded-full !py-3 !px-4  !text-xs
                                    !text-center !border-2 !border-white
                                    !bg-black !font-medium uppercase
                                    "
                                    />
                                </div>


                            </div>
                        </span>
                        <span
                            className='relative  grid place-items-center'
                        >
                            <span
                                className='absolute w-2 h-2 bg-red-500 rounded-full top-6 right-1'
                            ></span>
                            <BsBag
                                className='text-slate-800  font-extralight cursor-pointer'
                                size={20}
                            />
                        </span>

                    </div>

                </div>
            </div>
            {/* end of the first modal here */}
            <p
                className='border-b py-4 text-[#53c563] h-[3.4375rem] border-[#f7f8f9] text-center text-xs md:text-sm font-medium tracking-tight'
            >
                WORLDWIDE SHIPPING + EASY RETURNS
            </p>
            <div className='lg:flex lg:flex-row container mx-auto lg:px-14 gap-x-4'>
                <div
                    className='flex-1 space-y-1'
                >
                    {
                        Array.from({ length: 10 }, (arr, index) => {
                            return (
                                <ShoppingCart />
                            )
                        })

                    }
                </div>
                <div
                    className='flex-none w-full max-w-sm '
                >
                    <PromoCode>

                    </PromoCode>

                </div>
            </div>

            <div className='min-h-screen'>

            </div>
        </div>
    )
}

export default ShoppingBag