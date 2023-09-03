import React from 'react'
import { NavBar, TopBar } from '../components'
import { useState, useMemo } from 'react'
import ImageMagnifier from '../components/ImageView'
import { motion } from 'framer-motion'
const categories = [
  "clothing", "shores", "hairs", "colors hairs", "brazilian hair"
]
const Categories = () => {
  const catItems = useMemo(() => [
    ...[...categories, ...categories, ...categories].sort(() => Math.random() - 0.5)], [])
  const [active, setActive] = useState(null)
  const CatList = ({ text, index }) => {

    return (
      <div
        onClick={() => setActive(index)}
        className={`min-h-[50px] flex items-center justify-center
      transition-all duration-500
      ${active == index ? "white" : "bg-gray-200"} min-w-[100px] text-center overflow mb-1 shadow-sm `}>

        <p className="text-sm md:text-lg">
          {text ?? "dresses"}
        </p>
      </div>
    )
  }
  return (
    <>
      <div className="h-screen ">
        <div className="flex md:flex-row-reverse h-full">
          <div
            className="flex-none h-full overflow-y-auto pb-32 max-w-[200px] bg-white nobar"
          >
            {
              catItems.map((arr, index) => {
                return (
                  <CatList
                    text={arr}
                    key={Math.random()}
                    index={index}
                  />
                )
              })
            }
          </div>
          <div className="flex-1 max-h-screen overflow-hidden overflow-y-auto 
pb-52
">
            <h1>women clothes {Math.random().toString().substring(2,8)}</h1>
            <div className="grid  md:place-items-end    gap-x-2 gap-y-4 grid-cols-[repeat(auto-fit,minmax(min(5rem,calc(100%-30px)),_1fr))]
            md:grid-cols-[repeat(auto-fit,minmax(min(7rem,calc(100%-30px)),_1fr))]
            lg:grid-cols-[repeat(auto-fit,minmax(min(9rem,calc(100%-30px)),_1fr))]
            ">
              {
                Array.from({ length: 13 }, (arr, index) => {
                  return (
                    <motion.div
                      key={Math.random().toString()}
                      initial={{ opacity: 0.3, x: 200 }}
                      animate={{ opacity: 1, x: 0 }}
                      
                      className='ml-0.5 min-h-[8rem]'
                    >
                      <img
                        className='h-[10rem]'
                        src="https://www.clawigs.com/image/cache/catalog/banner/human-2023-1140x380.jpg" alt="" />
                      <h1>Bonnets</h1>
                    </motion.div>


                  )
                })
              }

            </div>
            <h1>mens clothes</h1>
            <div className="grid  md:place-items-end    gap-x-2 gap-y-4 grid-cols-[repeat(auto-fit,minmax(min(5rem,calc(100%-30px)),_1fr))]
            md:grid-cols-[repeat(auto-fit,minmax(min(7rem,calc(100%-30px)),_1fr))]
            lg:grid-cols-[repeat(auto-fit,minmax(min(9rem,calc(100%-30px)),_1fr))]
            ">
              {
                Array.from({ length: 13 }, (arr, index) => {
                  return (
                    <motion.div
                      key={Math.random().toString()}
                      initial={{ opacity: 0.3, x: 200 }}
                      animate={{ opacity: 1, x: 0 }}
                      
                      className='ml-0.5 min-h-[8rem]'
                    >
                      <img
                        className='h-[10rem] object-fill'
                        src="https://www.clawigs.com/image/cache/catalog/banner/human-2023-1140x380.jpg" alt="" />
                      <h1>Bonnets</h1>
                    </motion.div>


                  )
                })
              }

            </div>
          </div>
        </div>

      </div>

    </>
  )
}

export default Categories