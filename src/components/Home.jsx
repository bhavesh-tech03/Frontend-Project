import React from 'react'
import IMG from 'D:/REACT OPerations/My-Project/src/assets/b1.png';

const Home = () => {
  return (
    <>
    <div className='text-4xl bg-red-200 text-center mt-2 rounded-full'>We Can Do For You </div>
    <div className='flex gap-6 mt-5 mx-6'>
      <div className='border-2 w-100 h-120 rounded-4xl flex flex-col overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-4xl'>
          <img src={IMG} alt="b1" />
          <h1 className='text-center text-3xl mt-4'>Web development</h1>
          <p className='m-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eligendi quaerat illo temporibus distinctio architecto soluta necessitatibus id quo corporis.</p>
       
      </div>
      <div className='border-2 w-100 h-120 rounded-4xl flex flex-col overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-4xl'>
          <img src={IMG} alt="b1" />
          <h1 className='text-center text-3xl mt-4'>Web development</h1>
          <p className='m-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eligendi quaerat illo temporibus distinctio architecto soluta necessitatibus id quo corporis.</p>
       
      </div>
      <div className='border-2 w-100 h-120 rounded-4xl flex flex-col overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-4xl'>
          <img src={IMG} alt="b1" />
          <h1 className='text-center text-3xl mt-4'>Web development</h1>
          <p className='m-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eligendi quaerat illo temporibus distinctio architecto soluta necessitatibus id quo corporis.</p>
       
      </div>
      <div className='border-2 w-100 h-120 rounded-4xl flex flex-col overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-4xl'>
          <img src={IMG} alt="b1" />
          <h1 className='text-center text-3xl mt-4'>Web development</h1>
          <p className='m-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eligendi quaerat illo temporibus distinctio architecto soluta necessitatibus id quo corporis.</p>
       
      </div>
      <div className='border-2 w-100 h-120 rounded-4xl flex flex-col overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-4xl'>
          <img src={IMG} alt="b1" />
          <h1 className='text-center text-3xl mt-4'>Web development</h1>
          <p className='m-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eligendi quaerat illo temporibus distinctio architecto soluta necessitatibus id quo corporis.</p>
       
      </div>
    </div>
    </>
  )
}

export default Home