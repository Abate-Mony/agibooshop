import React, { useState } from 'react'
import Slider from '../components/Slider'
import { TopBar } from '../components'
import { BiCategory } from 'react-icons/bi'
import ReactStars from 'react-rating-stars-component'
import { CiFilter } from 'react-icons/ci'
import { MdOutlineGridOff } from 'react-icons/md'
import { AnimatePresence } from 'framer-motion'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
const ProductCategory = () => {
    const [active, setActive] = useState(false)
    const [grid, setGrid] = useState(false)
    const CartCart = () => {
        return (
            <Link to={"/product/4"}
                className='shadow-sm min-h-[100px] rounded-md mb-2'
            >
                <div
                    className={`
                    flex
                    
                    ${grid ? "flex-row" : "flex-col"}
                     w-full items-start
                    `}
                >
                    <div className={` overflow-hidden  max-h-[150px] ${grid ? "max-w-[120px] flex-none" : "w-full flex-1 border-4 bg-black"}`}>
                        <img src='https://swiperjs.com/demos/images/nature-1.jpg'
                            className='w-full'
                        />
                    </div>
                    <div
                        className='flex-1 px-4'
                    >
                        {
                            grid && <p>some user are set to be greate while other work for money</p>
                        }
                        <h5>2,466 CFA</h5>
                        <div className='flex justify-between items-center pb-1'>
                            <div className='flex gap-x-2 items-center'>
                                <ReactStars
                                    count={5}
                                    size={15}
                                    isHalf
                                    value={3.5}
                                    activeColor="#ffd700"
                                    edit={false}
                                />
                                {/* rating count here */}
                                <p>
                                    4.3
                                </p>
                            </div>
                            <div>
                                <p>7 orders</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        )
    }
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
                    grid gap-x-2 pb-3 pt-10 transition-all duration-[4s]
                    ${grid ? "grid-cols-[repeat(auto-fit,minmax(min(20rem,calc(100%-30px)),_1fr))]"
                        : "grid-cols-[repeat(auto-fit,minmax(min(10rem,calc(100%-30px)),_1fr))]"}
                    `
                }
            >
                {
                    Array.from({ length: 20 }, (arr, index) => {
                        return (<CartCart />)
                    })
                }
            </div>
        </div>
    )
}

export default ProductCategory