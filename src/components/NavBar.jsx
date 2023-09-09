import React, { useState } from 'react'
import { BsBag } from 'react-icons/bs'
import Button from './Button'
import { AiOutlineMenu, AiOutlineUser } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'
import Brand from './Brand'
import DropDown from './DropDown'
import { EffectCreative, Pagination, Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link, useNavigate } from 'react-router-dom'
const OverLay = ({ children }) => {
  return (
    <div className='transition-all duration-300 top-full absolute bg-black/50 inset-0 invisible  opacity-0 group-hover:opacity-100 group-hover:visible left-0 h-fit max-h-screen pb-10 w-full z-[5]'>
      {children}
    </div>
  )
}
const NavBar = () => {
  const [toggle, setToggle] = useState(false)
  const navigate = useNavigate()
  return (
    <>
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
            className='lg:flex items-center gap-x-3 hidden'
          >
            <li className='group px-5 hover:border-black border-b-2 border-transparent'>
              <a className='text-lg uppercase font-extralight group-hover:font-medium  transition-all duration-200' href='#'>Men</a>
              <OverLay>
                Men closes here
              </OverLay>
            </li>
            <li className='group hover:border-black border-b-2 border-transparent px-5'>
              <a className='text-lg uppercase font-extralight group-hover:font-medium  transition-all duration-200' href='#'>Women</a>
              <OverLay>
                women clothe shere
              </OverLay>
            </li>
            <li className='group hover:border-black border-b-2 border-transparent px-5'>
              <a className='text-lg uppercase font-extralight group-hover:font-medium  transition-all duration-200' href='#'>Brand</a>
              <OverLay>
                this the brand here
              </OverLay>
            </li>
          </ul>
          <Link to="/home">
            <Brand />
          </Link>
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
              <BsBag onClick={() => navigate("/shopping-bag")}
                className='text-slate-800  font-extralight cursor-pointer'
                size={20}
              />
            </span>

          </div>

        </div>
      </div>

    </>
  )
}

export default NavBar