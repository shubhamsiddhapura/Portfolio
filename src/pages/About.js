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
    <div className='  mb-10'>
      <div className='flex'>
      <img src={ab} className=' ml-16 mt-10 rounded-md' height={300} width={600}/>
      <h1 className=' mt-24 text-blue-700 font-bold font-serif ml-16 text-7xl'> "Making Something intresting stuff's/"  
         <li className="flex mt-5 ml-36 gap-3 border-4 border-blue-600 mr-56 p-4 shadow-md shadow-blue-600 rounded-xl">
            <a className=' shadow-lg  shadow-blue-700'
              href="https://github.com/shubhamsiddhapura"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TbBrandGithub className=" mt-3 bg-white size-8 rounded-full" />
            </a>

            <a className=' shadow-lg  shadow-blue-700'
              href="https://www.linkedin.com/in/shubham-siddhapura0248"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TiSocialLinkedin className=" mt-3 bg-white size-8 rounded-full" />
            </a>

            <a className=' shadow-lg   shadow-blue-700'
              href="https://www.instagram.com/shubham_2_08_?igsh=Mmtuanc3d3JwdGVk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className=" mt-3 bg-white size-8 rounded-full" />
            </a>
          </li></h1>
      </div>
      
      <ul>
        <li className=' text-justify m-5  mt-16 ml-16 mr-16 pr-4 font-serif font-semibold text-blue-600'>
        As a versatile and collaborative developer, I specialize in crafting seamless web and cross-platform solutions. My continuous learnerning mindset is reflected in the learn in public mantra, showcasing not just technical power but a dedicated journey of innovation and effective problem-solving. Throughout my digital endeavors, I intertwine creativity and code, ensuring each project becomes a testament to my evolving skills and passion for delivering exceptional results. With a commitment to staying at the forefront of technology, I navigate the ever-evolving landscape, embracing challenges as opportunities to grow and contribute meaningfully to the world of development.
        </li>
       
      </ul>
      <div className='flex ml-64 mt-8'>
        <ul className='hover:scale-110 ml-12 p-5 rounded-xl  border-4 border-blue-600'>
        <FaGraduationCap className=' ml-16 text-3xl'/>
        <li className=' ml-6 font-bold text-xl'>
          EDUCATION
          </li>
          <li className=' justify-center font-semibold'>
            Bachelor of Engineering <br></br> in Computer Science, <br></br>
             From Parul university
          </li>
        </ul>
        <ul className=' hover:scale-110 ml-6 pl-10 pr-10 pt-4  pb-4   rounded-xl border-4 border-blue-600'>
        <FaCode className=' ml-6 text-3xl'/>
        <li className='font-bold text-xl'>Web Dev.</li> 
        <li className=' font-semibold'>
          React Js<br></br>
            Node Js<br></br>
            Express Js<br></br>
            Mongo Db
        </li>
        </ul>
        <ul className='hover:scale-110 ml-6 pl-10 pr-10 pt-3 pb-3  rounded-xl border-4 border-blue-600'>
        <BiCodeCurly className=' ml-12 text-3xl' /> 
        <li className='font-bold text-xl'>Programming</li>
        <li className='font-semibold'>Java <br></br> C++</li> 
        </ul>
        
        </div>
        <div className='flex ml-28 mt-16 mb-16 gap-2'>
        <img className='box' src={html}/>
        <img className='box' src={css}/>
        <img className='box' src={tail}/>
        <img className='box' src={react}/>
        <img className='box' src={node}/>
        <img className='box' src={mongo}/>
        <img className='box' src={java}/>
        <img className='box' src={c}/>
        </div>
     
    </div>
  )
}
export default About