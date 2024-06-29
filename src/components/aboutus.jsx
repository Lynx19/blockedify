import React, {useEffect} from 'react';
// import { motion, useAnimation } from 'framer-motion';
// import db from '../assets/DANBABA PNG-1.png'
// import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import block3 from '../assets/blockedify 5.png'

const About = () => {

  useEffect(() => {
    AOS.init();
  }, []); 
  
  return (
    <section id='#about' className="lg:flex lg:flex-row flex-col items-center justify-between w-[80%] pt-5 mx-auto py-[40px]">
        <div 
        className="w-full lg:w-[70%]"
        data-aos="fade-right" data-aos-duration="1000"
      > 
        <h2 className="font-bold font-body font-mont text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-8 md:leading-10 lg:leading-12 xl:leading-14 mb-6 mt-6 md:mb-8 ">Who We Are</h2>
        <p className=" font-body font-lato text-base md:text-md lg:text-lg xl:text-xl leading-6 md:leading-7 lg:leading-8 xl:leading-9 " style={{textAlign: 'justify'}}>
        BlockEdify is a leading platform dedicated to the education, empowerment, and advancement of individuals in the blockchain and cryptocurrency space. Our mission is to bridge the knowledge gap and create a community where innovation, learning, and growth thrive.
        </p>
        
      </div>
       <div 
        className="lg:w-[50%] w-full mt-2 rounded-10"
        data-aos="fade-left" data-aos-duration="1000"
      >
        <img 
          src={block3}
          alt='78-logo'
          className="rounded-10 mx-auto w-[300%] object-cover"
        />
      </div> 
    
    </section>
  )
}

export default About