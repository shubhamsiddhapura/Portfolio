import React from 'react';
import { TbBrandGithub } from "react-icons/tb";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='pb-10 text-white bg-blue-500'>
      <div className='container flex flex-col items-center py-10 mx-auto'>
        <h1 className='mb-4 text-4xl font-bold'>SHUBHAM SIDDAPURA</h1>
        
        <nav className='mb-6'>
          <ul className='flex space-x-5 text-lg'>
            <li>
              <Link to='/' className='transition hover:text-gray-300'>Home</Link>
            </li>
            <li>
              <Link to='/about' className='transition hover:text-gray-300'>About</Link>
            </li>
            <li>
              <Link to='/projects' className='transition hover:text-gray-300'>Projects</Link>
            </li>
          </ul>
        </nav>

        <div className='flex space-x-4'>
          <a href='https://github.com/shubhamsiddhapura' target='_blank' rel='noopener noreferrer'>
            <TbBrandGithub className='p-2 text-blue-500 transition-transform bg-white rounded-full size-10 hover:scale-110'/>
          </a>
          <a href='https://www.linkedin.com/in/shubham-siddhapura-a3638724a' target='_blank' rel='noopener noreferrer'>
            <TiSocialLinkedin className='p-2 text-blue-500 transition-transform bg-white rounded-full size-10 hover:scale-110'/>
          </a>
          <a href='https://www.instagram.com/shubham_2_08_?igsh=Mmtuanc3d3JwdGVk' target='_blank' rel='noopener noreferrer'>
            <FaInstagram className='p-2 text-blue-500 transition-transform bg-white rounded-full size-10 hover:scale-110'/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;