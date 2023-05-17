import React from 'react'
const Heading = ({children}) => {
  return (
   <h1 className='text-2xl font-medium md:text-3xl text-center my-4 leading-10'> {children}</h1>
  )
}

export default Heading