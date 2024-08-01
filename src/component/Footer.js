import React from 'react'
import { TbBrandGithub } from "react-icons/tb";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa6"

const Footer = () => {
  return (
    <div className='  bg-blue-400 pb-5'>
        
        <h1 className=' ml-80 pl-16 mt-96 pt-20 font-mono text-5xl text-white'>
            SHUBHAM SIDDAPURA 
        </h1>
        <div className='flex ml-96 pl-36'>
        <a href="https://github.com/shubhamsiddhapura" target="_blank" rel="noopener noreferrer">
        <TbBrandGithub className=' mt-3  bg-white size-10 rounded-full'/>
        </a>
        <a href="www.linkedin.com/in/shubham-siddhapura-a3638724a" target="_blank" rel="noopener noreferrer">
        <TiSocialLinkedin className=' mt-3 ml-3 bg-white size-10 rounded-full'/>
        </a>
        <a href="https://www.instagram.com/shubham_2_08_?igsh=Mmtuanc3d3JwdGVk" target="_blank" rel="noopener noreferrer">
        <FaInstagram className=' mt-3 ml-3 bg-white size-10 rounded-full'/>
        </a>
        </div>
    </div>
  )
}

export default Footer