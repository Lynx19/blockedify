import React from 'react'
import partner from "../assets/expert.png"
import w4 from "../assets/innovation.png"
import w2 from "../assets/commity.png"

const Choose = () => {
  return (
    <div id='chooseus' className='text-center pt-20 mb-10'>
         <h1 className='text-gray-700 '>Why Choose BlockEdify?</h1>
      <div className='w-full py-[10rem] px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-12'>
             <div className='w-full flex-col p-4 shadow-xl hover:scale-105 duration-300 rounded-lg '>
             <img className='w-20 mx-auto mt-[-3rem]' src={partner}alt="/" />
                <h2 className='text-2xl font-bold text-center py-2'>Expertise</h2>
                <div className='text-center font-medium'>
                        <p className='text-justify'>
                        Our courses and resources are created by industry leaders and subject matter experts with years of experience in the blockchain field.
                        </p>
                </div>
            </div>
            <div className='w-full shadow-xl hover:scale-105 duration-300 flex-col p-4 rounded-lg'>
             <img className='w-20 mx-auto mt-[-3rem]' src={w2} alt="/" />
                <h2 className='text-2xl font-bold text-center py-2'>Innovation</h2>
                <div className=' font-medium text-center'>
                        <p className='text-justify'>
                        We are committed to staying at the forefront of blockchain innovation. Our content is regularly updated to ensure that you have access to the most current and relevant information.
                        </p>
                </div>
            </div>
            <div className='w-full shadow-xl hover:scale-105 duration-300 flex-col p-4 rounded-lg'>
             <img className='w-20 mx-auto mt-[-3rem]' src={w4} alt="/" />
                <h2 className='text-2xl font-bold text-center py-2'>*Community</h2>
                <div className='text-center font-medium'>
                        <p className='text-justify'>
                        When you join BlockEdify, you become part of a vibrant community of blockchain enthusiasts and professionals. Network, collaborate, and grow with us.
                        </p>
                </div>
            </div>
        </div>
      </div>
    </div>

  )
}

export default Choose
