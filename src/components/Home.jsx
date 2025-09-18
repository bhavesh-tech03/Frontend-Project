import React from 'react'
// import IMG from 'D:/REACT OPerations/My-Project/src/assets/b1.png';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import img from 'D:/REACT OPerations/My-Project/src/assets/TechHorizon.png'
import img1 from 'D:/REACT OPerations/My-Project/src/assets/web1.jpg'
import img2 from 'D:/REACT OPerations/My-Project/src/assets/app.jpeg'
import img3 from 'D:/REACT OPerations/My-Project/src/assets/game.jpeg'
import img4 from 'D:/REACT OPerations/My-Project/src/assets/devops.png'
import img5 from 'D:/REACT OPerations/My-Project/src/assets/AI.webp'
import img6 from 'D:/REACT OPerations/My-Project/src/assets/ml.jpg'
import img7 from 'D:/REACT OPerations/My-Project/src/assets/cyber.jpg'
import img8 from 'D:/REACT OPerations/My-Project/src/assets/support.jpg'


const Home = () => {
  return (
    <>
    <div className='h-170' >
      <div>
        <img src={img} alt="" className='h-170 w-full' />
      </div>
      <div className='text-4xl bg-blue-200 text-center h-20 w-full mt-2 rounded-full flex justify-center items-center'>Transforming Ideas into Powerful Digital Solutions</div>

        <div className='flex flex-col'>
          <div className='flex flex justify-center gap-3 m-10'>
              <div className='flex gap-6 mt-5 mx-6'>
                <div className='border-2 w-70 h-120 rounded-4xl flex flex-col overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-4xl'>
                  <img src={img1} alt="b1" />
                  <h1 className='text-center text-3xl mt-4'>Web Development</h1>
                  <p className='m-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eligendi quaerat illo temporibus distinctio architecto soluta necessitatibus id quo corporis.</p>
                </div>
              </div>
              <div className='flex gap-6 mt-5 mx-6'>
                <div className='border-2 w-70 h-120 rounded-4xl flex flex-col overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-4xl'>
                  <img src={img2} alt="b1" />
                  <h1 className='text-center text-3xl mt-4'>App Development</h1>
                  <p className='m-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eligendi quaerat illo temporibus distinctio architecto soluta necessitatibus id quo corporis.</p>
                </div>
              </div>
              <div className='flex gap-6 mt-5 mx-6'>
                <div className='border-2 w-70 h-120 rounded-4xl flex flex-col overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-4xl'>
                  <img src={img3} alt="b1" />
                  <h1 className='text-center text-3xl mt-4'>Game Devopment</h1>
                  <p className='m-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eligendi quaerat illo temporibus distinctio architecto soluta necessitatibus id quo corporis.</p>
                </div>
              </div>
              <div className='flex gap-6 mt-5 mx-6'>
                <div className='border-2 w-70 h-120 rounded-4xl flex flex-col overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-4xl'>
                  <img src={img4} alt="b1" />
                  <h1 className='text-center text-3xl mt-4'>DevOps Services</h1>
                  <p className='m-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eligendi quaerat illo temporibus distinctio architecto soluta necessitatibus id quo corporis.</p>
                </div>
              </div>
          </div>
          <div>
              <div className='flex flex justify-center gap-3 m-10'>
              <div className='flex gap-6 mt-5 mx-6'>
                <div className='border-2 w-70 h-120 rounded-4xl flex flex-col overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-4xl'>
                  <img src={img5} alt="b1" />
                  <h1 className='text-center text-3xl mt-4'>AI Services</h1>
                  <p className='m-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eligendi quaerat illo temporibus distinctio architecto soluta necessitatibus id quo corporis.</p>
                </div>
              </div>
              <div className='flex gap-6 mt-5 mx-6'>
                <div className='border-2 w-70 h-120 rounded-4xl flex flex-col overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-4xl'>
                  <img src={img6} alt="b1" />
                  <h1 className='text-center text-3xl mt-4'>Machine Learning</h1>
                  <p className='m-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eligendi quaerat illo temporibus distinctio architecto soluta necessitatibus id quo corporis.</p>
                </div>
              </div>
              <div className='flex gap-6 mt-5 mx-6'>
                <div className='border-2 w-70 h-120 rounded-4xl flex flex-col overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-4xl'>
                  <img src={img7} alt="b1" />
                  <h1 className='text-center text-3xl mt-4'>Cyber Security</h1>
                  <p className='m-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eligendi quaerat illo temporibus distinctio architecto soluta necessitatibus id quo corporis.</p>
                </div>
              </div>
              <div className='flex gap-6 mt-5 mx-6'>
                <div className='border-2 w-70 h-120 rounded-4xl flex flex-col overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-4xl'>
                  <img src={img8} alt="b1" />
                  <h1 className='text-center text-3xl mt-4'>Support Services</h1>
                  <p className='m-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eligendi quaerat illo temporibus distinctio architecto soluta necessitatibus id quo corporis.</p>
                </div>
              </div>
          </div>
          <div>
            <Footer/>
          </div>
          </div>
        </div>
      </div>
    </>
    
  )
}

export default Home