import React from 'react'
import { FaRegStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div id='footer' className='flex justify-center w-full h-auto gap-2 py-10 bg-custom'>
         <h1 className='text-xs text-center text-white '> Designed and built by Rohith</h1>
         <span>
          <Link onClick={() => window.open("https://github.com/rohith887/rohith-s-portfolio", "_blank")} className='text-white'><FaRegStar/></Link>
           </span>
    </div>

  )
}
export default Footer;