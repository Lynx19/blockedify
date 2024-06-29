import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import Background from '../assets/touch.avif'



const Home = () => {
    
  return (
    <div id='home' className='w-full h-screen text-center' style={{backgroundImage: `url(${Background})`, backgroundSize:"cover"}} >
    <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center" >
      <div>
          <p className='uppercase text-sm tracking-widest text-white'>LET'S BUILD TOGETHER</p>
          <h1 className='py-4 text-white'>Welcome to <span className='text-yellow-500'>Touch I.T</span> </h1>
          <h2 className='py-0 text-white tracking-widest'>I.T @Your FingerTips</h2>
          <p className='py-4 text-gray-200 max-w-[70%] m-auto'>
              We are a firm dedicated to making the integration
              of Technology easy in our communities with the development
              of applications, APIs and softwares with user-friendly interfaces.
              </p>
              <div className='flex items-center justify-between max-w-[330px] py-4 m-auto'>
                  <div className='rounded-full bg-white shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaLinkedinIn/>
                  </div>
                  <div className='rounded-full bg-white shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaGithub/>
                  </div>
                  <div className='rounded-full bg-white shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <AiOutlineMail/>
                  </div>





              </div>
      </div>
    </div>
  </div>
  )
}

export default Home
