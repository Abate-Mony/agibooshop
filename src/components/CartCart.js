import React, { useState, useRef, useEffect } from 'react'
import Slider from '../components/Slider'
import { TopBar } from '../components'
import { BiCategory } from 'react-icons/bi'
import ReactStars from 'react-rating-stars-component'
import { CiFilter } from 'react-icons/ci'
import { MdOutlineGridOff } from 'react-icons/md'
import { AnimatePresence } from 'framer-motion'
import { motion, useInView } from "framer-motion"
import { Link, useNavigate } from 'react-router-dom'
import { data } from '../constants/demoData'
import useLongPress from '../utils/useLongPress'
export default function CartCart({ id, productname, grid }) {
    const navigate = useNavigate()
    const ref = useRef()
    const isInView = useInView(ref, { amount: 0.8 })
    useEffect(() => {
        if (isInView) return;
        if (isOverlay) {
            setIsOverlay(false)
        }
    }, [isInView])
    const [isOverlay, setIsOverlay] = useState(false)
    const onLongPress = () => {
        // console.log('longpress is triggered');
        setIsOverlay(true)
    };

    const onClick = () => {
        // console.log('click is triggered')
        navigate("/product/5")
    }

    const defaultOptions = {
        shouldPreventDefault: true,
        delay: 1000,
    };
    const longPressEvent = useLongPress(onLongPress, onClick, defaultOptions);

    return (
        <motion.div
            ref={ref}
            {
            ...longPressEvent
            }
            key={id + "jja" + productname}

            className='shadow-sm min-h-[100px] rounded-md mb-0 py-2 relative'
        >
            <div
                onClick={e => {
                    e.stopPropagation()
                    setIsOverlay(false)
                }}
                className={`absolute inset-0 w-full h-full bg-black/50  ${isOverlay ? "visible pointer-events-auto z-10" : "-z-10 invisible pointer-events-none"}`}
            >

            </div>
            <div
                className={`
                flex
                transition-all duration-700
                ${grid ? "flex-row" : "flex-col"}
                 w-full items-start group ${isInView && "active-scale"}
                `}
            >
                <div className={` overflow-hidden transition-all duration-1000  max-h-[150px] ${grid ? "max-w-[120px] flex-none" : "w-full flex-1"}`}>
                    <img src='https://swiperjs.com/demos/images/nature-1.jpg'
                        className={`w-full scale-90 group-[.active-scale]:scale-100 transition-all duration-1000`}
                    />
                </div>
                <div
                    className='flex-1 px-4'
                >
                    {
                        grid && <p className='translate-y-4 group-[.active-scale]:translate-y-0 transition-[transform] duration-300'>some user are set to be greate while other work for money</p>
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
        </motion.div>
    )
}