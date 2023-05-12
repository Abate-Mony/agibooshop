import { Brand, Footer, NavBar, NavMenu, ProductCard } from "../components"
import {Navigation,Pagination,Autoplay,A11y} from "swiper"
import {Swiper,SwiperSlide} from 'swiper/react'
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/autoplay"
import "swiper/css/a11y"
import { useEffect, useState } from "react"
import {NavFooter} from '../components'
import {motion} from 'framer-motion'
import Marquee from 'react-fast-marquee'
const Home = () => {
const [activeSlide,setActiveSlide]=useState(0);
  return (
    <>
      <NavBar />
        
        <Swiper
        onSlideChange={(e)=>setActiveSlide(e.activeIndex)}
        autoplay={{delay:2500,
        disableOnInteraction:false}}
        modules={[Navigation,Pagination,Autoplay,A11y]}
        // scrollbar={true}
        pagination={true}
        navigation={true}
        >
        {["https://www.clawigs.com/image/cache/catalog/banner/old_women-1140x380.gif","https://www.clawigs.com/image/cache/catalog/banner/lace-1140x380.jpg","https://www.clawigs.com/image/cache/catalog/banner/human-2023-1140x380.jpg","https://www.clawigs.com/image/cache/catalog/banner/wig-1140x380.jpg"].map((arr, index) => (
          <SwiperSlide className="min-h-[150px] flex-none">
          <motion.img 
          initial={false}
          animate={{y:activeSlide==index?0:100,opacity:activeSlide==index?1:0}}
          src={arr}
           className="h-[200px] md:h-[400px] w-full" alt="banner" />
          </SwiperSlide>
          ))}
          </Swiper>
      <Brand />
      <NavMenu />

      <h1 className="text-4xl text-center my-4 leading-10">New Arrivals</h1>
      <div className="flex flex-nowwrap overflow-x-auto">
        {Array.from({ length: 5 }, (arr, index) => <ProductCard l />)}
      </div>
<Marquee className="my-4" >
here at agibooshop customer priority comes first 

</Marquee>      
      <h1 className="text-4xl text-center my-4 leading-10">Products</h1>
      <div className="flex flex-wrap">
        {Array.from({ length: 10 }, (arr, index) => <ProductCard />)}
      </div>
      <NavFooter/>
      <Footer />
      
    </>
  )
}

export default Home