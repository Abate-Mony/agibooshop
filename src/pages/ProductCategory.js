import React, { useState } from 'react'
import Slider from '../components/Slider'
import { TopBar } from '../components'
import { BiCategory } from 'react-icons/bi'
import ReactStars from 'react-rating-stars-component'
import { CiFilter } from 'react-icons/ci'
import { MdOutlineGridOff } from 'react-icons/md'
import { AnimatePresence } from 'framer-motion'
import { motion } from "framer-motion"
import { Link, useNavigate } from 'react-router-dom'
import { data } from '../constants/demoData'
import useLongPress from '../utils/useLongPress'
import CartCart from '../components/CartCart'
const variants = {
    "show": {
        opacity: 1,
        y: 0,
        rotate: "0deg"
    }, "hidden": {
        opacity: 0.5,
        y: "calc(100px - 40px)",
        rotate: "4deg"
    }
}

const ProductCategory = () => {
    const navigate = useNavigate()
    const [active, setActive] = useState(false)
    const [grid, setGrid] = useState(true)
   
 
    return (
        <div>
            <TopBar name={"some page here"} >
                <CiFilter
                    size={25}
                    className='mr-4'
                    onClick={() => setActive(true)}
                />

                <AnimatePresence>

                    {
                        grid ?
                            <motion.div
                                key="somerandonidhere1"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <BiCategory
                                    size={25}
                                    className='mr-4'
                                    onClick={() => setGrid(grid => !grid)}
                                />
                            </motion.div>

                            :

                            <motion.div
                                key="somerandonidhere2"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >

                                <MdOutlineGridOff
                                    size={25}
                                    className='mr-4'
                                    onClick={() => setGrid(grid => !grid)}
                                />
                            </motion.div>
                    }
                </AnimatePresence>
            </TopBar>
            <Slider
                active={active}
                setActive={setActive}
            >
                <div
                    className='h-full border-4 w-full'
                >
                    dasdsa

                </div>
            </Slider>
            <div
                className={
                    `
                    grid gap-x-1  pt-10 transition-all duration-[4s] pb-24 
                    ${grid ? "grid-cols-[repeat(auto-fit,minmax(min(20rem,calc(100%-30px)),_1fr))]"
                        : "grid-cols-[repeat(auto-fit,minmax(min(10rem,calc(100%-30px)),_1fr))] lg:grid-cols-[repeat(auto-fit,minmax(min(15rem,calc(100%-30px)),_1fr))]"}
                    `
                }
            >
                {
                    data.map((arr, index) => {
                        return (<CartCart key={index} {...arr} grid={grid} />)
                    })
                }
            </div>
        </div>
    )
}

export default ProductCategory