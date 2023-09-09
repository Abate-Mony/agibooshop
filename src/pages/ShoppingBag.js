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