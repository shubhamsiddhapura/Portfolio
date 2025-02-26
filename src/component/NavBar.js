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
    <div className="flex flex-col justify-between p-5 bg-white shadow-md md:flex-row">
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
      <nav className="flex flex-col items-center md:flex-row md:items-start">
        <ul className="flex flex-col gap-5 pt-2 mt-4 text-xl font-bold text-blue-500 md:flex-row md:gap-7 md:text-2xl md:mt-0">
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
      <div className="flex justify-center pt-2 mt-4 md:justify-end md:mt-0">
        <a href={mailtoLink}>
          <button className="text-xl font-bold text-blue-500 md:text-2xl hover:text-black hover-underline-animation">
            Contact me!
          </button>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
