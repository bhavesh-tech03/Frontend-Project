import React from 'react'
import IMG1 from 'D:/REACT OPerations/My-Project/src/assets/myfacebook.webp';
import IMG2 from 'D:/REACT OPerations/My-Project/src/assets/mygithub.png';
import IMG3 from 'D:/REACT OPerations/My-Project/src/assets/myinsta.webp';
import IMG4 from 'D:/REACT OPerations/My-Project/src/assets/mytwitter.png';
import IMG5 from 'D:/REACT OPerations/My-Project/src/assets/the.png';
import IMG6 from 'D:/REACT OPerations/My-Project/src/assets/mylinkdin.webp';
import IMG7 from 'D:/REACT OPerations/My-Project/src/assets/phone.png';
import IMG8 from 'D:/REACT OPerations/My-Project/src/assets/gmail.png';
import Footer from './Footer';

const Contact = () => {
  const callme = () => {
    alert("Form Submited Successfully ");
  }
  return (
    <>
      <div className='flex justify-center h-135 m-5 gap-10 '>
        <div className='border-1 h-140 w-160 rounded-full flex items-center justify-center items-center'>
          <div className='text-4xl text-center mt-10 font-bold'>Contact With Us </div>
          <form action="" className="m-5 mt-10">
            <label htmlFor="name" className="block mb-2 font-semibold mt-8">
              Enter Your Name:
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="border-2 rounded-2xl w-100 border-blue-400 p-2"
            />


            <label htmlFor="email" className="block mb-2 font-semibold mt-8">
              Enter Your mail id :
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your Email Id"
              className="border-2 rounded-2xl w-100 border-blue-400 p-2"
            />


            <label htmlFor="name" className="block mb-2 font-semibold mt-8">
              Enter Your Mobail No :
            </label>
            <input
              type="number"
              id="name"
              placeholder="Enter your name"
              className="border-2 rounded-2xl w-100 border-blue-400 p-2"
            />
            <input type="submit" onClick={callme} className='border rounded-full w-50 h-10 mt-10 ml-20 bg-blue-400' />
          </form>
        </div>

        <div className='border-1 h-140 w-140 '>
          <h1 className='text-3xl text-center mt-2 font-bold'>Follow Us On :</h1>
          <div className='flex gap-15 m-5 flex justify-center'>
            <div className='border-2 rounded-full h-30 w-30 flex justify-center  items-center overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-4xl'>
              <img src={IMG1} alt="" className='w-40' />
            </div>
            <div className='border-2 rounded-full h-30 w-30 flex justify-center  items-center overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-4xl'>
              <img src={IMG2} alt="" className='w-60' />
            </div>
            <div className='border-2 rounded-full h-30 w-30 flex justify-center  items-center overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-4xl'>
              <img src={IMG3} alt="" className='w-full' />
            </div>
          </div>
          <div className='flex gap-15 m-5 flex justify-center'>
            <div className='border-2 rounded-full h-30 w-30 flex justify-center  items-center overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-4xl'>
              <img src={IMG4} alt="" className='w-40' />
            </div>
            <div className='border-2 rounded-full h-30 w-30 flex justify-center  items-center overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-4xl'>
              <img src={IMG5} alt="" className='w-40' />
            </div>
            <div className='border-2 rounded-full h-30 w-30 flex justify-center  items-center overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-4xl'>
              <img src={IMG6} alt="" className='w-40' />
            </div>
          </div>
          <div className='flex flex-col gap-10'>
              <div className='flex gap-10 flex-row mx-10'>
                <div className='border-2 rounded h-20 w-20 flex justify-center  items-center'><img src={IMG7} alt="" className='w-40' /> </div>
                <div className='flex justify-center  items-center text-2xl border rounded w-100 h-10 mt-5'> +91 9158082683</div>
              </div>
              <div className='flex gap-10 flex-row mx-10'>
                <div className='border-2 rounded h-20 w-20 flex justify-center  items-center '><img src={IMG8} alt="" className='w-40' /></div>
                <div className='flex justify-center  items-center text-2xl border rounded w-100 h-10 mt-5'> bhavesh.patil.career@gmail.com</div>
              </div>
          </div>
        </div>
      </div>
      <div className='mt-10'>
          <Footer/>
      </div>
    </>
  )
}

export default Contact