import React from 'react'
import Button from './Button'

const DropDown = ({ toggle, setToggle, className }) => {
    return (
        <div
            className={`absolute 
            transition-all duration-200
            overflow-auto
            ${toggle ? "visible h-screen max-h-screen opacity-100" : "invisible max-h-0 overflow-hidden opacity-0"}
            top-full border px-5  min--h-screen bg-black/40-- bg-white w-full inset-0`}
        >
            <div className='flex items-end justify-between gap-x-5'>
                <input
                    type='search'
                    className='border-b-2 border-black min-h-[55px] ml-0.5 text-xs
                    rounded-sm 
                   outline-none
                    py-0 px-3 w-full flex-1 '
                    placeholder='Enter Search Keyword'
                />
                <Button
                    onClick={() => setToggle(false)}
                    className="!bg-transparent !shadow-none !py-0 !m-0 !text-black underline underline-offset-2 !px-4"
                    title="close"
                />
            </div>
            {/* top search research  starts here */}
            <div
                className='my-5'
            />
            <h2
                className='text-start 
                text-lg
                uppercase
                 text-gray-600 font-medium
                '
            >top search terms</h2>
            <div
                className='my-5'
            />
            <ul className='space-y-6 lg:space-y-8  max-w-fit'>
                {
                    Array.from({ length: 6 }, (arr, index) => <li key={index}
                        className='text-sm hover:underline underline-offset-2 hover:text-blue-500'
                    ><a href='#'>Field</a> </li>)
                }
            </ul>
        </div>
    )
}

export default DropDown