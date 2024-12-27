import React from 'react';
import Logo from '../assesment/ss.png';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const email = "shubhs2844@gmail.com";
  const subject = "Hello Shubham we are here to hire you";
  const body = "Hi Shubham, I would like to discuss a potential project with you.";
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <div className="flex flex-col md:flex-row justify-between p-5 bg-white shadow-md">
      {/* Logo Section */}
      <Link to="/">
        <img 
          src={Logo} 
          alt="Logo" 
          height={32} 
          width={160} 
          className="mt-2 md:mt-0"
        />
      </Link>

      {/* Navigation Links */}
      <nav className="flex flex-col md:flex-row items-center md:items-start">
        <ul className="flex flex-col md:flex-row gap-5 md:gap-7 text-xl md:text-2xl font-bold font-sans text-blue-500 mt-4 md:mt-0">
          <li className="hover-underline-animation hover:text-black">
            <Link to="/">Home</Link>
          </li>
          <li className="hover-underline-animation hover:text-black">
            <Link to="About">About</Link>
          </li>
          <li className="hover-underline-animation hover:text-black">
            <Link to="Project">Projects</Link>
          </li>
        </ul>
      </nav>

      {/* Contact Button */}
      <div className="flex justify-center md:justify-end mt-4 md:mt-0">
        <a href={mailtoLink}>
          <button className="text-xl md:text-2xl font-bold text-blue-500 hover:text-black hover-underline-animation">
            Contact me!
          </button>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
