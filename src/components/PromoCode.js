import React from 'react'
import { BsChevronUp } from 'react-icons/bs'
import Button from './Button'

const PromoCode = () => {
    return (
        <div className='max-w-fit mx-auto w-full '>
            <div
                className='flex mx-1 py-2 justify-between '
            >
                <h4
                    className='uppercase text-gray-700 font-medium '
                >enter promo code</h4>
                <BsChevronUp
                    className='font-black'
                    size={20}
                />
            </div>
            <div className='flex justify-between gap-x-3 '>
                <div
                    className='form-group flex-1'
                >
                    <input
                        className='border  min-h-[55px]
                    rounded-sm hover:outline-blue-500 
                    focus:outline-blue-500
                    py-2 px-3 w-full'
                        placeholder='Enter Promo Code'
                    />
                </div>
                <Button
                    title="Apply"
                    className="!rounded-full !font-black hover:bg-blue-500 transition"
                />
            </div>
            <div className='border'>
                <p className='hidden lg:flex bg-gray-600/25 min-h-[2.5rem]  items-center justify-center w-full text-center'>COMPLETE YOUR ORDER</p>

                <div
                    className='flex items-center justify-between px-5 py-6 border mb-6'
                >
                    <h3
                        className='font-bold capitalize text-sm text-black '
                    >Grand total</h3>
                    <h2
                        className='font-bold uppercase text-sm text-black '
                    >fcfa 4,949</h2>
                </div>
                <Button
                    title="Checkout with eshopworld"
                    className="!rounded-full !uppercase
                    !font-black !block !bg-black
                    w-[calc(100%-20px)] mx-auto !py-4
                    hover:!bg-[#2775ba] transition"
                />
            </div>
        </div>
    )
}

export default PromoCode