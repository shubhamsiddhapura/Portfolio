import React from 'react'
import { FaGraduationCap } from "react-icons/fa6";
import { BiCodeCurly } from "react-icons/bi";
import { FaCode } from "react-icons/fa";
import html from '../assesment/html.png'
import css from '../assesment/css.png'
import tail from '../assesment/tailwind-css.png'
import react from '../assesment/react.png'
import node from '../assesment/node-js.png'
import mongo from '../assesment/mongodb.png'
import java from '../assesment/java.png'
import c from '../assesment/c-plus-plus.png'
import ab from '../assesment/ab.jpg'
import sql from "../assesment/sql-server.png"
import git from "../assesment/github-logo.png"
import express from "../assesment/icons8-express-js-50.png"
import { TbBrandGithub } from "react-icons/tb";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa6";
import './about.css'
import Navbar from "../component/NavBar"

const About = () => {

  const boxStyle =
  "flex flex-col items-center justify-center w-64 h-48 p-5 text-white transition duration-300 border-4 border-blue-600 hover:bg-white hover:text-blue-500 hover:scale-110";

  return (
    <div className='pb-10 bg-black '>
      
      <div className='flex'>
      <img src={ab} className='mt-10 ml-16 rounded-md ' height={300} width={600}/>
      <h1 className='mt-32 ml-16 font-bold text-blue-700 text-7xl'> ""Making Something intresting/""  
      <li className="flex gap-3 mr-56 mt-7 size-6 ml-36 ">
      <a
        className=" shadow-blue-700 hover:shadow-blue-900 active:shadow-blue-800"
        href="https://github.com/shubhamsiddhapura"
        target="_blank"
        rel="noopener noreferrer"
      >
        <TbBrandGithub className="p-1 mt-3 transition-colors duration-300 bg-white rounded-full size-10 hover:text-blue-900 active:text-blue-800" />
      </a>

      <a
        className=" shadow-blue-700 hover:shadow-blue-900 active:shadow-blue-800"
        href="https://www.linkedin.com/in/shubham-siddhapura0248"
        target="_blank"
        rel="noopener noreferrer"
      >
        <TiSocialLinkedin className="p-1 mt-3 transition-colors duration-300 bg-white rounded-full size-10 hover:text-blue-900 active:text-blue-800" />
      </a>

      <a
        className=" shadow-blue-700 hover:shadow-blue-900 active:shadow-blue-800"
        href="https://www.instagram.com/shubham_2_08_?igsh=Mmtuanc3d3JwdGVk"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram className="p-1 mt-3 transition-colors duration-300 bg-white rounded-full size-10 hover:text-blue-900 active:text-blue-800" />
      </a>
    </li></h1>
      </div>
      
      <ul>
        <li className='pr-4 m-5 ml-16 mr-16 text-xl font-semibold text-justify text-blue-600 mt-7 '>

As a versatile and collaborative developer, I specialize in creating seamless web and cross-platform solutions. My commitment to continuous learning is embodied in the "learn in public" philosophy, which showcases not only my technical skills but also my dedication to innovation and problem-solving. In every project, I blend creativity with technical expertise, turning each endeavor into a testament to my evolving abilities and passion for excellence. I am committed to staying at the cutting edge of technology, seeing challenges as opportunities to grow and make meaningful contributions to the development community.
      </li>
       
      </ul>

      <div className="flex justify-center gap-10 mt-10">
      {/* Education Box */}
      <div className={boxStyle}>
        <h3 className="text-xl font-bold">EDUCATION</h3>
        <p className="font-semibold text-center">
          Bachelor of Engineering <br /> in Computer Science <br /> From Parul University
        </p>
      </div>

      {/* Web Dev Box */}
      <div className={boxStyle}>
        <h3 className="text-xl font-bold">Web Dev.</h3>
        <p className="font-semibold text-center">
          React.js <br /> Node.js <br /> Express.js <br /> MongoDB
        </p>
      </div>

      {/* Programming Box */}
      <div className={boxStyle}>
        <h3 className="text-xl font-bold">Programming</h3>
        <p className="font-semibold text-center">
          Java <br /> C++ <br /> JavaScript
        </p>
      </div>

      {/* Skills Box */}
      <div className={boxStyle}>
        <h3 className="font-bold ">Skills</h3>
        <p className="font-semibold text-center ">
          HTML, CSS, TailwindCSS <br />
          Redux, RESTful APIs <br />
          SQL, Docker <br />
          Git/GitHub, Postman <br />
          Problem Solving, DSA
        </p>
      </div>
    </div>
    <div className="grid items-center justify-center grid-cols-6 mt-10">
      <img className="box" src={html} alt="HTML" />
      <img className="box" src={css} alt="CSS" />
      <img className="box" src={tail} alt="Tailwind" />
      <img className="box" src={react} alt="React" />
      <img className="box" src={node} alt="Node.js" />
      <img className="box" src={mongo} alt="MongoDB" />
      <img className="box" src={java} alt="Java" />
      <img className="box" src={c} alt="C" />
      <img className="box" src={git} alt="Git" />
      <img className="box" src={sql} alt="SQL" />
      <img className="box" src={express} alt="Express.js" />
    </div>
     
    </div>
  )
}
export default About