import React from 'react'

import { useRef } from 'react'
const NotificationPopUp = () => {
    const timeRef = useRef(null)
    const handleCancel = (e) => {
        e.stopPropagation()
        e.target.style.animationPlayState = "running"
        clearTimeout(timeRef.current)
    }
    const handleMouseEnter = (e) => {
        const target = e.target
        clearTimeout(timeRef.current)
        if (target) target.style.animationPlayState = "paused"
        timeRef.current = setTimeout(() => {
            if (target) target.style.animationPlayState = "running"
            clearTimeout(timeRef.current)
        }, 2000);
    }
    return (
        <div
            // onTouchStart={handleMouseEnter}
            // onMouseEnter={handleMouseEnter}

            className='
            
            popup
    py-1 pb-1.5 px-2 rounded-lg shadow-xl bg-white
    top-4
    -translate-x-1/2
    left-1/2
    min-h-[50px]
    max-w-sm
    fixed
    z-[100]
    md:left-0
    top
    md:top-auto md:bottom-12
    flex 
    items-center
    md:translate-x-0
    justify-between
    w-full
    gap-x-2
    '
        >
            <div className="w-14 flex-none h-14 rounded-full border border-orange-400">

            </div>
            <div className="text flex-1 mb-2">
                <h4
                    className='font-bold'
                >rose mary</h4>
                <p
                    className='text-xs md:text-sm'
                >Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div
                onClick={handleCancel}
                className='flex-none max-w-[40px] h-[40px] w-full border'>

            </div>
        </div>
    )
}

export default NotificationPopUp