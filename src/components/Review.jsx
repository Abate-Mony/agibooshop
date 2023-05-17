import React from 'react'
import ReactStars from 'react-rating-stars-component'

const Review = () => {
    return (
        <div className='p-1 md:w-1/2 lg:w-1/3'>


            <div className='border shadow bg-white rounded-lg px-4 py-4'>
                <div className='flex justify-between'>
                <h1 className='text-xl font-medium mb-2'>Rose Mary</h1>
              <div className='flex flex-row-reverse items-center gap-2'> 
              <h4 className="text-sm font-semibold">4.2</h4>
              
              <ReactStars
                                count={5}
                                size={15}
                                isHalf
                                value={4}
                                activeColor="#ffd700"
                                edit={false}
                            /></div>
                </div>
<p className='text-sm md:text-lg font-montserrat'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, molestiae sapiente velit est aspernatur aut animi nemo non! Itaque, reiciendis!</p>
            </div>
        </div>
    )
}

export default Review