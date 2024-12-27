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
import { TbBrandGithub } from "react-icons/tb";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa6";
import './about.css'

const About = () => {
  return (
    <div className='  mb-20'>
      <div className='flex'>
      <img src={ab} className=' ml-16 mt-10 rounded-md' height={300} width={600}/>
      <h1 className=' mt-24 text-blue-700 font-bold font-serif ml-16 text-7xl'> "Making Something intresting stuff/"  
      <li className="flex mt-5 ml-36 gap-3 border-4 border-blue-600 mr-56 p-4 shadow-md shadow-blue-600 rounded-xl">
      <a
        className="shadow-lg shadow-blue-700 hover:shadow-blue-900 active:shadow-blue-800"
        href="https://github.com/shubhamsiddhapura"
        target="_blank"
        rel="noopener noreferrer"
      >
        <TbBrandGithub className="mt-3 bg-white size-8 rounded-full transition-colors duration-300 hover:text-blue-900 active:text-blue-800" />
      </a>

      <a
        className="shadow-lg shadow-blue-700 hover:shadow-blue-900 active:shadow-blue-800"
        href="https://www.linkedin.com/in/shubham-siddhapura0248"
        target="_blank"
        rel="noopener noreferrer"
      >
        <TiSocialLinkedin className="mt-3 bg-white size-8 rounded-full transition-colors duration-300 hover:text-blue-900 active:text-blue-800" />
      </a>

      <a
        className="shadow-lg shadow-blue-700 hover:shadow-blue-900 active:shadow-blue-800"
        href="https://www.instagram.com/shubham_2_08_?igsh=Mmtuanc3d3JwdGVk"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram className="mt-3 bg-white size-8 rounded-full transition-colors duration-300 hover:text-blue-900 active:text-blue-800" />
      </a>
    </li></h1>
      </div>
      
      <ul>
        <li className=' text-justify m-5  mt-16 ml-16 mr-16 pr-4 font-serif font-semibold text-blue-600'>

As a versatile and collaborative developer, I specialize in creating seamless web and cross-platform solutions. My commitment to continuous learning is embodied in the "learn in public" philosophy, which showcases not only my technical skills but also my dedication to innovation and problem-solving. In every project, I blend creativity with technical expertise, turning each endeavor into a testament to my evolving abilities and passion for excellence. I am committed to staying at the cutting edge of technology, seeing challenges as opportunities to grow and make meaningful contributions to the development community.
      </li>
       
      </ul>
      <div className="flex ml-64 mt-10">
  {/* Education Box */}
  <ul className="hover:bg-black hover:text-blue-500 hover:scale-110 ml-12 p-4 rounded-xl border-4 border-blue-600 transition duration-300">
    <FaGraduationCap className="ml-16 text-3xl" />
    <li className="ml-6 font-bold text-xl">EDUCATION</li>
    <li className="justify-center font-semibold">
      Bachelor of Engineering <br /> in Computer Science, <br />
      From Parul University
    </li>
  </ul>

  {/* Web Dev Box */}
  <ul className="hover:bg-black hover:text-blue-500 hover:scale-110 ml-6 pl-10 pr-10 pt-4 pb-4 rounded-xl border-4 border-blue-600 transition duration-300">
    <FaCode className="ml-6 text-3xl" />
    <li className="font-bold text-xl">Web Dev.</li>
    <li className="font-semibold">
      React Js<br />
      Node Js<br />
      Express Js<br />
      Mongo Db
    </li>
  </ul>

  {/* Programming Box */}
  <ul className="hover:bg-black hover:text-blue-500 hover:scale-110 ml-6 pl-10 pr-10 pt-4 pb-4 rounded-xl border-4 border-blue-600 transition duration-300">
    <BiCodeCurly className="ml-12 text-3xl" />
    <li className="font-bold text-xl">Programming</li>
    <li className="font-semibold">Java <br /> C++</li>
  </ul>
</div>

<div className="transition">
      <img className="box" src={html} alt="HTML" />
      <img className="box" src={css} alt="CSS" />
      <img className="box" src={tail} alt="Tailwind" />
      <img className="box" src={react} alt="React" />
      <img className="box" src={node} alt="Node.js" />
      <img className="box" src={mongo} alt="MongoDB" />
      <img className="box" src={java} alt="Java" />
      <img className="box" src={c} alt="C" />
    </div>
     
    </div>
  )
}
export default About