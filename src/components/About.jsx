import React from 'react'
import Footer from './Footer'
const About = () => {
  return (
    <>
   <div className='flex flex-col justify-center items-center h-140 my-30 gap-10'> 
      <div className='flex justify-center items-center gap-10'>
         <div className='border-1 h-80 w-180 rounded-full flex justify-center items-center bg-red-50'>1</div>
         <div className='border-1 h-80 w-180 rounded-full flex justify-center items-center bg-blue-50'>2</div>
      </div>
      
      <div className='flex justify-center items-center gap-10'>
          <div className='border-1 h-80 w-180 rounded-full flex justify-center items-center bg-yellow-50'>3</div>
          <div className='border-1 h-80 w-180 rounded-full flex justify-center items-center bg-green-50'>4</div>
      </div>
   </div>
   <div className='mt-10'>
          <Footer/>
      </div>
    </>
  )
}

export default About