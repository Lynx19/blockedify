import React from 'react'
import { AiOutlineMail } from 'react-icons/ai';
import { FiPhone, FiInstagram   } from "react-icons/fi";
import { FaGithub, FaLinkedinIn  } from 'react-icons/fa';
import { TiSocialTwitter } from "react-icons/ti";

const Footer = () => {
    const currentYear = new Date().getFullYear();

  return (
    <div id='#contact' className='w-full h-auto bg-blue-950 text-white p-5 gap-4'>
        <h2 className='text-2xl -pt-4'>Contact Us</h2>
          <div className='flex items-center gap-2'>
          <AiOutlineMail />
         <p>Email: </p>
         </div>

         <div className='flex items-center gap-2'>
         <FiPhone />
         <p>Phone: </p>
         </div>

           {/* <div className='flex items-center gap-2'>
           <FiMapPin />
           <p>Address: No.37 Wappah plaza, PZ, Zaria</p>
            </div>   */}

             <div>
             
              <div className='flex items-center gap-2 p-4'>
               
              <div>
    <FaLinkedinIn size={30} />
  </div>
  <div>
    <FaGithub size={30}/>
  </div>
  <div>
    <TiSocialTwitter size={30}/>
  </div>
  <div>
    <FiInstagram  size={30}/>
  </div>
                  
                {/* </Link> */}
              </div>  
              <p className='text-center '>Danbaba©{currentYear} All Rights Reserved</p>
                 
    </div>
    </div>
  )
}

export default Footer
