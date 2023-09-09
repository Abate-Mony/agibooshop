import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import React, { useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FiInstagram } from 'react-icons/fi'
// Import Swiper styles
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import displayvideo from '../assets/videos/displayvideo.mp4'
import { RiArrowRightSFill } from 'react-icons/ri'
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './brand.css';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import 'react-accessible-accordion/dist/fancy-example.css';

// import {} from 
const HomeMain = () => {
    const [show, setShow] = useState(false)
    return (
        <div className='pb-56'>
            <div className='min-h-screen border'>

                <div
                    className='absolute inset-0 h-full w-full '
                    style={{
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                        backgroundImage: 'url("https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSHQ4zoJo-dwTM9Fjionu0gGehealI6WfJvLPODgDSONF-ncd8d")'
                    }}
                >

                </div>
            </div>
            <div className='px-4 my-4 mt-8'>
                <h1
                    className='text-3xl leading-10 font-[400] lg:text-6xl capitalize'
                >shop by categories</h1>
            </div>
            <section>
                <div
                    className='flex justify-start gap-x-5 px-4 mb-5'
                >
                    <div className='relative min-w-[min(50%,6rem)] pb-2 pr-4 lg:pb-4'>
                        <p className='leading-8 tracking-wider'>MENS</p>
                        <span
                            className='absolute bottom-0 w-full h-1 bg-gray-600 rounded-sm'
                        />
                    </div>
                    <div className='relative min-w-[min(50%,6rem)] pb-2 pr-4 lg:pb-4'>
                        <p className='leading-8 tracking-wider'>WOMENS</p>
                        <span
                            className='hidden absolute bottom-0 w-full h-1 bg-gray-600 rounded-sm'
                        />
                    </div>
                    {/*  */}

                </div>
                {/* code here */}
                <div className='grid grid-cols-12 gap-x-2 gap-y-5 lg:gap-x-5'>
                    <div className=' col-span-12 sm:col-span-7 lg:col-span-8'>
                        <div className='h-[15rem] lg:h-[23rem] overflow-hidden rounded-r-2xl'>
                            <img
                                className='h-full w-full object-cover'
                                src='https://cdn.builder.io/api/v1/image/assets%2F8a0dd03ad52340849785aa8840f575d4%2F821114a596344184aec293114677c869?format=webp&width=2000'
                            />
                        </div>
                    </div>
                    <div className=' col-span-12 sm:col-span-5 lg:col-span-4'>
                        <div
                            className='h-[15rem] lg:h-[23rem] overflow-hidden rounded-r-3xl'
                        >
                            <img
                                className='h-full w-full object-cover'
                                src='https://cdn.builder.io/api/v1/image/assets%2F8a0dd03ad52340849785aa8840f575d4%2Fef7b95c3a22c4cd9b8b4919b789e73cb'
                            />
                        </div>
                    </div>
                    <div className='order-last col-span-6 sm:col-span-7 lg:col-span-6'>
                        <div className='h-[15rem] lg:h-[23rem] overflow-hidden rounded-l-2xl'>
                            <img
                                className='h-full w-full object-cover'
                                src='https://cdn.builder.io/api/v1/image/assets%2F8a0dd03ad52340849785aa8840f575d4%2F4a5a64f637b64af08ff9db48f65f9991'
                            />
                        </div>
                    </div>
                    <div className=' col-span-6 sm:col-span-5 lg:col-span-6'>
                        <div
                            className='h-[15rem] lg:h-[23rem] overflow-hidden rounded-r-3xl'
                        >
                            <img
                                className='h-full w-full object-cover'
                                src='https://cdn.builder.io/api/v1/image/assets%2F8a0dd03ad52340849785aa8840f575d4%2F4f20e81293cf4543aa103b706ffea9e3'
                            />
                        </div>
                    </div>


                </div>
            </section>
            <section className='hidden lg:block'>
                <div>
                    <Swiper
                        modules={[Autoplay]}
                        autoplay={{
                            delay: 1500,
                            disableOnInteraction: true
                        }}
                    >

                        <SwiperSlide>
                            <div className='h-[min(600px,calc(100vh-50px))]'>
                                <div className='w-full h-full border grid grid-cols-2'>

                                    <div
                                        className='h-full w-full bg-center-center bg-cover  bg-no-repeat'
                                        style={{ backgroundImage: "url(https://cdn.builder.io/api/v1/image/assets%2F8a0dd03ad52340849785aa8840f575d4%2F4a5a64f637b64af08ff9db48f65f9991)" }}
                                    >

                                    </div>
                                    <div
                                        className='h-full w-full bg-center-center bg-cover  bg-no-repeat'
                                        style={{ backgroundImage: "url(https://cdn.builder.io/api/v1/image/assets%2F8a0dd03ad52340849785aa8840f575d4%2F821114a596344184aec293114677c869)" }}
                                    >

                                    </div>

                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='h-[min(600px,calc(100vh-50px))]'>
                                <div className='w-full h-full border grid grid-cols-2'>

                                    <div
                                        className='h-full w-full bg-center-center bg-cover  bg-no-repeat'
                                        style={{ backgroundImage: "url(https://cdn.builder.io/api/v1/image/assets%2F8a0dd03ad52340849785aa8840f575d4%2F4a5a64f637b64af08ff9db48f65f9991)" }}
                                    >

                                    </div>
                                    <div
                                        className='h-full w-full bg-center-center bg-cover  bg-no-repeat'
                                        style={{ backgroundImage: "url(https://cdn.builder.io/api/v1/image/assets%2F8a0dd03ad52340849785aa8840f575d4%2F821114a596344184aec293114677c869)" }}
                                    >

                                    </div>

                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='h-[min(600px,calc(100vh-50px))]'>
                                <div className='w-full h-full border grid grid-cols-2'>

                                    <div
                                        className='h-full w-full bg-center-center bg-cover  bg-no-repeat'
                                        style={{ backgroundImage: "url(https://cdn.builder.io/api/v1/image/assets%2F8a0dd03ad52340849785aa8840f575d4%2F4a5a64f637b64af08ff9db48f65f9991)" }}
                                    >

                                    </div>
                                    <div
                                        className='h-full w-full bg-center-center bg-cover  bg-no-repeat'
                                        style={{ backgroundImage: "url(https://cdn.builder.io/api/v1/image/assets%2F8a0dd03ad52340849785aa8840f575d4%2F821114a596344184aec293114677c869)" }}
                                    >

                                    </div>

                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
            <div className='bg-[#f4ebe5]  py--24 my-10'>

                <video className='w-full !border-none h-[20rem]' nonce controls={false} muted autoPlay loop>
                    <source src={displayvideo} type="video/mp4" />
                </video>
            </div>

            <section className='!py-0'>
                <div
                    className='h-[min(600px,calc(100vh-50px))] w-full relative flex items-center justify-start'
                >
                    <img className='w-full h-full object-cover absolute inset-0 -z-[1]'
                        src='https://cdn.builder.io/api/v1/image/assets%2F8a0dd03ad52340849785aa8840f575d4%2Fbd1075bbb41f40728ac5688c28866875'
                    />
                    <div className='space-y-6 ml-14'>
                        <h1
                            className='lg:text-6xl text-white'
                        >Dreamed in <br className='hidden lg:block' />
                            California</h1>

                        <p
                            className='text-white text-lg'
                        >Bringing the unexpected to <br className='hidden lg:block' />

                            classic timekeeping since 2013.</p>
                        <div className='flex gap-x-1 text-white items-center text-white hover:text-blue-600 transition duration-200 font-medium leading-wider'>
                            <a href='#' className=''>
                                READ THE MVMT STORY
                            </a>
                            <RiArrowRightSFill size={25} />

                        </div>
                    </div>
                </div>
            </section>
            <section className='!py-5 bg-[#eef2f4]'>
                <div className='py-3'>
                    <h1 className='text-4xl lg:text-5xl text-center leading-wider tracking-tight'>Our Promises</h1>
                </div>
                <div className='flex flex-center pb-10 justify-center items-center flex-wrap gap-x-6 lg:gap-x-20 space-y-6'>
                    <div className='text-center'>
                        <img
                            src='https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fa45556acfa63450d95939e2453ef36b7'
                        />
                        <p className='text-sm'>Free Shipping Over <br /> $75</p>
                    </div>
                    <div className='text-center'>
                        <img
                            src='https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F6abefec93ca344b88a99b94895299c6d'
                        />
                        <p className='text-sm'>Two Year<br />  Warranty</p>
                    </div>
                    <div className='text-center'>
                        <img
                            src='https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F58ac5267ab954fdc9a42f70c0283f9d6'
                        />
                        <p className='text-sm'>Easy <br />  Returns</p>
                    </div>
                    <div className='text-center'>
                        <img
                            src='https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F489caa6e827f4b16a911bef921893101'
                        />
                        <p className='text-sm'>1% Revenue to <br /> Charitable  <br /> Initiatives </p>
                    </div>
                </div>
                <div
                    className='lg:grid grid-cols-12 bg-white'
                >
                    <div className='col-span-8 relative'>
                        <img
                            src='https://cdn.builder.io/api/v1/image/assets%2F8a0dd03ad52340849785aa8840f575d4%2F64c736e397154e9883a4919e626cf449'
                            alt='someinage here'
                        />
                    </div>
                    <div className='col-span-4 px-14'>
                        <div className='py-3'>
                            <h1 className='text-4xl  lg:text-5xl text-start leading-wider tracking-tight'>Give Back <br /> With Us</h1>
                        </div>
                        <p>We’re pledging 1% of all revenue to 4 partner charity organizations. You’ll be able to directly participate in this initiative at checkout, where you can choose which cause you'd like us
                            to donate to!</p>
                        <Link to="/store" >
                            <Button
                                className="!bg-transparent
                                hover:!bg-blue-600
                                hover:underline underline-offset-8
                                transition duration-500
                                !uppercase !py-3 !mt-10 !mb-6 !rounded-full !border-2 !border-black !text-black"

                                title="Our Causes"
                            />

                        </Link>
                    </div>
                </div>
            </section>
            <section className='!py-10'>
            <div className='py-3'>
                    <h1 className='text-4xl lg:text-5xl text-start leading-wider tracking-tight'>The Shop looks</h1>
                </div>
                <div className='lg:grid grid-cols-12 gap-2 items-stretch'>

                    <div className='col-span-5  h-[min(calc(100vh-60px),32rem)]'>
                        <div className='w-full h-full relative group'>
                            <img src='https://cdn-yotpo-images-production.yotpo.com/instagram/45/17963507777558945/medium.jpg'
                                className='w-full h-full'

                            />
                            <div className='flex items-center group-hover:visible
                            invisible group-hover:opacity-100 opacity-0
                            transition-all duration-300
                        justify-center bg-gray-700/75 absolute 
                        w-full inset-0 '>
                                <div>
                                    <FiInstagram size={30}
                                        className='mx-auto mb-3'
                                        color='white'
                                    />
                                    <Button

                                        className="capitalize text-lg"
                                        title="shop now"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-7 '>
                        <div
                            className='w-full h-full grid grid-cols-3 gap-2'
                        >
                            <div className='w-full h-[calc((calc(32rem/2)-0.25rem))] relative group'>
                                <img src='https://cdn-yotpo-images-production.yotpo.com/instagram/4/17979548147358104/low_resolution.jpg'
                                    className='w-full h-full'

                                />
                                <div className='flex items-center group-hover:visible
                            invisible group-hover:opacity-100 opacity-0
                            transition-all duration-300
                        justify-center bg-gray-700/75 absolute 
                        w-full inset-0 '>
                                    <div>
                                        <FiInstagram size={30}
                                            className='mx-auto mb-3'
                                            color='white'
                                        />
                                        <Button

                                            className="capitalize text-lg"
                                            title="shop now"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='w-full h-[calc((calc(32rem/2)-0.25rem))] relative group'>
                                <img src='https://cdn-yotpo-images-production.yotpo.com/instagram/46/17980074611145146/low_resolution.jpg'
                                    className='w-full h-full'

                                />
                                <div className='flex items-center group-hover:visible
                            invisible group-hover:opacity-100 opacity-0
                            transition-all duration-300
                        justify-center bg-gray-700/75 absolute 
                        w-full inset-0 '>
                                    <div>
                                        <FiInstagram size={30}
                                            className='mx-auto mb-3'
                                            color='white'
                                        />
                                        <Button

                                            className="capitalize text-lg"
                                            title="shop now"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='w-full h-[calc((calc(32rem/2)-0.25rem))] relative group'>
                                <img src='https://cdn-yotpo-images-production.yotpo.com/instagram/6/18007376029829706/low_resolution.jpg'
                                    className='w-full h-full'

                                />
                                <div className='flex items-center group-hover:visible
                            invisible group-hover:opacity-100 opacity-0
                            transition-all duration-300
                        justify-center bg-gray-700/75 absolute 
                        w-full inset-0 '>
                                    <div>
                                        <FiInstagram size={30}
                                            className='mx-auto mb-3'
                                            color='white'
                                        />
                                        <Button

                                            className="capitalize text-lg"
                                            title="shop now"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='w-full h-[calc((calc(32rem/2)-0.25rem))] relative group'>
                                <img src='https://cdn-yotpo-images-production.yotpo.com/instagram/60/18009738949748260/low_resolution.jpg'
                                    className='w-full h-full'

                                />
                                <div className='flex items-center group-hover:visible
                            invisible group-hover:opacity-100 opacity-0
                            transition-all duration-300
                        justify-center bg-gray-700/75 absolute 
                        w-full inset-0 '>
                                    <div>
                                        <FiInstagram size={30}
                                            className='mx-auto mb-3'
                                            color='white'
                                        />
                                        <Button

                                            className="capitalize text-lg"
                                            title="shop now"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='w-full h-[calc((calc(32rem/2)-0.25rem))] relative group'>
                                <img src='https://cdn-yotpo-images-production.yotpo.com/instagram/36/17881480121844436/low_resolution.jpg'
                                    className='w-full h-full'

                                />
                                <div className='flex items-center group-hover:visible
                            invisible group-hover:opacity-100 opacity-0
                            transition-all duration-300
                        justify-center bg-gray-700/75 absolute 
                        w-full inset-0 '>
                                    <div>
                                        <FiInstagram size={30}
                                            className='mx-auto mb-3'
                                            color='white'
                                        />
                                        <Button

                                            className="capitalize text-lg"
                                            title="shop now"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='w-full h-[calc((calc(32rem/2)-0.25rem))] relative group'>
                                <img src='https://cdn-yotpo-images-production.yotpo.com/instagram/85/17981283512114585/low_resolution.jpg'
                                    className='w-full h-full'

                                />
                                <div className='flex items-center group-hover:visible
                            invisible group-hover:opacity-100 opacity-0
                            transition-all duration-300
                        justify-center bg-gray-700/75 absolute 
                        w-full inset-0 '>
                                    <div>
                                        <FiInstagram size={30}
                                            className='mx-auto mb-3'
                                            color='white'
                                        />
                                        <Button

                                            className="capitalize text-lg"
                                            title="shop now"
                                        />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <Button
                    title="Load More"
                    className="!block !mx-auto !my-10 !bg-transparent !text-black  !border !border-black !py-2 !px-6 !uppercase"
                />
            </section>
            <Accordion>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        What harsh truths do you prefer to ignore?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        Exercitation in fugiat est ut ad ea cupidatat ut in
                        cupidatat occaecat ut occaecat consequat est minim minim
                        esse tempor laborum consequat esse adipisicing eu
                        reprehenderit enim.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Is free will real or just an illusion?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        In ad velit in ex nostrud dolore cupidatat consectetur
                        ea in ut nostrud velit in irure cillum tempor laboris
                        sed adipisicing eu esse duis nulla non.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
        </div>
    )
}

export default HomeMain