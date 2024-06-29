import React from "react";
import block from '../assets/blockchain.jpg'
import block2 from '../assets/blockedify 77.png'
//  import { HashLink as Link } from "react-router-hash-link";
import { Link } from "react-scroll";
const Welcome = () => {
  return (
    <section id="#welcome" className="relative w-full h-screen object-cover">
    <img
      src={block}
      alt="hero-background"
      className="w-screen h-screen bg-cover bg-center" 
    />
    <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-row justify-center items-center px-4 sm:px-8 lg:px-12 text-center">
      <div className="flex-1" data-aos="fade-right" data-aos-duration="1000">
        <h1 className="text-white font-bold font-body font-mont leading-12 md:leading-16 lg:leading-20 xl:leading-24">
          Welcome to Blockedify
        </h1>
        <p className="text-white font-medium font-mont font-body lg:text-4xl text-2xl leading-relaxed mt-[24px]" data-aos="fade-left" data-aos-duration="1000">
          Join us today.
        </p>
        <p className="text-white" data-aos="fade-out" data-aos-duration="1000">
        Whether you are a beginner looking to learn the basics of blockchain technology or a seasoned professional seeking to expand your knowledge, BlockEdify has something for you. Join us today and take the first step towards becoming a blockchain expert.
        </p>
        <div className="mt-[10px]" data-aos="fade-in" data-aos-duration="1000">
          <Link to='#about' smooth={true} offset={50} duration={500}> 
            <button className="bg-sky-900 hover:bg-white hover:text-sky-900 text-white font-lato font-body font-bold py-2 px-4 rounded w-[160px]">
              Learn more
            </button>
          </Link>
        </div>
      </div>
      <div className="flex-1" data-aos="fade-left" data-aos-duration="1000">
        <img src={block2} alt="blockedify" width="800" className="mx-auto sm:ml-8" />
      </div>
    </div>
  </section>
  
    );
};

export default Welcome;
