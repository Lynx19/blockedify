'use client';
import React, {useState, useEffect} from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu, } from "react-icons/ai";
import { FaLinkedinIn} from "react-icons/fa";
import { Link } from "react-scroll";
import blockedify from '../assets/blockdify.png'
import { TiSocialTwitter } from "react-icons/ti";
// import { HashLink as Link } from "react-router-hash-link";




const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);
    const [shadow, setShadow] = useState(false);

  const handleNavToggle = () => {
    setNavOpen(!navOpen);
  };
    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >=90){
                setShadow(true);
            }else {
                setShadow(false);
            }
        }
        window.addEventListener('scroll', handleShadow);
    },[]);

    return (
        <div className= {shadow ? "fixed w-full h-20 shadow-xl z-[100] bg-white  " : "fixed w-full h-20 z-[100]"}>
            <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
            <div className='flex items-center gap-1 flex-1'>
                <img src={blockedify} alt="danbaba logo" width="200" height="20" />
                {/* <span className='text-2xl text-white font-bold'></span> */}
                </div>
                <div>
                    <ul className="hidden md:flex">
                        
                            
                           
                                <li className='ml-10 text-sm uppercase hover: border-b text-blue-800'>
                                    <Link to="#welcome" smooth={true} offset={50} duration={500} >Home</Link>
                                </li>
                                
                                <li className='ml-10 text-sm uppercase hover: border-b  text-blue-800'>
                                 <Link to="#companies" smooth={true} offset={50} duration={500} >Services</Link>
                                </li>
                                
                                <li className='ml-10 text-sm uppercase hover: border-b  text-blue-800'>
                                    <Link to="#about" smooth={true} offset={50} duration={500} >About</Link>
                                    </li>
                                
                                <li className='ml-10 text-sm uppercase hover: border-b  text-blue-800'>
                                    <Link to="#contact" smooth={true} offset={50} duration={500} >Contact</Link>
                                    </li>
                               
                             
                        
                    </ul>
                    <div onClick={handleNavToggle} className="md:hidden">
                        <AiOutlineMenu className="fill-blue-800" size={30}/>
                    </div>
                </div>
            </div>
            <div className={navOpen ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ''}>
                    <div className={navOpen ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] bg-white h-screen  p-10 ease-in duration-500' : 'hidden'}>
                        <div>
                            <div className="flex w-full items-center justify-between">
                            <div className='flex items-center gap-1 flex-1'>   
                            <img src={blockedify} alt="danbaba logo" width="150" height='60' />
                            
                            </div>
                            <div onClick={handleNavToggle} className="rounded-full p-3 cursor-pointer">
                                <AiOutlineClose className="text-blue-800"/>
                            </div>
                            </div>
                            <div className="border-b border-gray-300 my-4">
                                <p className="w-[85%] md:w-[90%] py-4">Welcome to Blockedify</p>
                            </div>
                        </div>
                        <div className="py-4 flex-col">
                            <ul>
                            
                                    <li onClick={() => setNavOpen(false)} className="py-4 text-sm text-blue-800"> 
                                    <Link to="#welcome" smooth={true} offset={50} duration={500} >Home</Link>
                                    </li>
                                
                                    <li onClick={() => setNavOpen(false)} className="py-4 text-sm text-blue-800"> 
                                    <Link to="#companies" smooth={true} offset={50} duration={500} >Services</Link>
                                    </li>
                             
                                    <li onClick={() => setNavOpen(false)} className="py-4 text-sm text-blue-800"> 
                                    <Link to="#about" smooth={true} offset={50} duration={500} >About</Link>
                                    </li>
                                
                                   <li onClick={() => setNavOpen(false)} className="py-4 text-sm text-blue-800"> 
                                    <Link to="#contact" smooth={true} offset={50} duration={500} >Contact</Link>
                                    </li>
                            </ul>
                            <div className="pt-40">
                                    <p className="uppercase tracking-widest text-blue-800">Connect with us</p>
                                    <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                                        <div className="rounded-full p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                        <FaLinkedinIn className="fill-blue-800"/>
                                        </div>
                                        <div className="rounded-full p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                        <TiSocialTwitter className='fill-blue-800'/>
                                        </div>
                                        <div className="rounded-full p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                        <AiOutlineMail className="fill-blue-800"/>
                                        </div>
                                    </div>
                            </div>
                        </div>
                </div>
                
            </div>
        </div>

    )
}
export default Navbar;