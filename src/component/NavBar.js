import React from 'react';
import Logo from '../assesment/ss.png';
import {Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
  const email = "shubhs2844@gmail.com";
  const subject = "Hello Shubham we are here to hire you";
  const body = "Hi Shubham, I would like to discuss a potential project with you.";
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
  return (
    <div className='flex justify-evenly p-5'>
      
      <Link to="/">
        <img src={Logo} alt='Logo' height={32} width={160} className=' mt-2' />
      </Link>
      <nav>
        <ul className='flex pl-72 pt-3 gap-7 text-2xl font-bold font-sans text-blue-500 '>
          <li className= ' hover-underline-animation hover:text-black'>
            <Link to="/">Home</Link>
          </li>
          <li className='hover:text-black hover-underline-animation'>
            <Link to="About">About</Link>
          </li>
          <li className='hover:text-black hover-underline-animation'>
            <Link to="Project">Project</Link>
          </li>
        </ul>
      </nav>

      <div className='flex pl-80 pt-3 text-2xl font-sans font-bold  hover:text-black text-blue-500'>
        <a href={mailtoLink}>
          <button className='hover-underline-animation'>Contact me!</button>
        </a>
      </div>
    </div>  
  );
};
export default NavBar;
