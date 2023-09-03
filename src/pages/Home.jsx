import { Brand, Footer, NavBar, NavMenu, ProductCard } from "../components"
import { Navigation, Pagination, Autoplay, A11y } from "swiper"
import { Swiper, SwiperSlide } from 'swiper/react'

import { useEffect, useState, useRef } from "react"
// import { NavFooter } from '../components'
import { motion } from 'framer-motion'
import Marquee from 'react-fast-marquee'
import { Heading, Popup } from '../components'
import { useInView } from 'framer-motion'
import { data } from "../constants/demoData"
import Scrollable from "../components/Scrollable"
// import { configureStore } from "@reduxjs/toolkit"
import Button from "../components/Button"
import { Link } from "react-router-dom"
const Home = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      // setToggle(true)
    }, 2000);

    return () => {
    }
  }, [])

  const [activeSlide, setActiveSlide] = useState(0);
  // const [error, setError] = useState(false);
  const [toggle, setToggle] = useState(false);
  const ref = useRef(null)
  const isInView = useInView(ref)
  const confirmfunction = () => {
    if (true) {
      if (window.confirm("confirm the code ")) {

        setToggle(false)
        return
      }
      // setError(true)
    }

  }
 
  return (
    <>
      <NavBar isInView={isInView} />

      <Swiper ref={ref}
        onSlideChange={(e) => setActiveSlide(e.activeIndex)}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        modules={[Navigation, Pagination, Autoplay, A11y]}
        pagination={true}
        navigation={true}
      >
        {["https://www.clawigs.com/image/cache/catalog/banner/old_women-1140x380.gif", "https://www.clawigs.com/image/cache/catalog/banner/lace-1140x380.jpg", "https://www.clawigs.com/image/cache/catalog/banner/human-2023-1140x380.jpg", "https://www.clawigs.com/image/cache/catalog/banner/wig-1140x380.jpg"].map((arr, index) => (
          <SwiperSlide className="min-h-[150px] flex-none relative group overflow-hidden">
            <Link className=" absolute bottom-8 left-1/2 -translate-x-1/2" to={"/ourstore?product_id=" + index}>
              <Button
                title="View Product"
                className="!bg-black group-[.swiper-slide-active]:!translate-y-0 
                translate-y-14 !border-4 !border-black !text-white !rounded-full transition-all duration-500 "

              />
            </Link>
            <motion.img
              initial={false}
              animate={{ y: activeSlide == index ? 0 : 100, opacity: activeSlide == index ? 1 : 0 }}
              src={arr}
              className="h-[17rem] md:h-[25rem] lg:h-[30rem] w-full" alt="banner" />
          </SwiperSlide>
        ))}
      </Swiper>
      <Brand />
      <NavMenu />
      <Popup toggle={toggle} confirmFunc={confirmfunction} closeModal={setToggle}  >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque itaque aliquam sequi at deserunt quis vitae placeat, qui labore reiciendis voluptates earum aspernatur provident similique repellendus eaque dolores, praesentium sit!


      </Popup>
      {/* <h1 className="text-4xl text-center my-4 leading-10">New Arrivals</h1> */}
      <Heading>

        New Arrivals
      </Heading>
      <div className="flex flex-nowwrap overflow-x-auto overflow-y-hidden">
        {data.map((arr, index) => <ProductCard
          className="rounded-md !max-w-[200px] md:!max-w-[230px]"
          key={index}
          {
          ...arr
          }
        />)}
      </div>
      <Marquee className="my-4" >
        here at agibooshop customer priority comes first

      </Marquee>
      <Heading>
        Products
      </Heading>
      <Scrollable className={"!flex-wrap !justify-center !max-w-fit border mx-auto !container"}>
        {data.map((arr, index) => <ProductCard
          className="rounded-md !max-w-[200px] md:!max-w-[230px]"
          key={index}
          {
          ...arr
          }
        />)}
      </Scrollable>

      <Footer />

    </>
  )
}

export default Home