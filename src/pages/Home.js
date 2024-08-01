import React from "react";
import profile from "../assesment/yel.png";
import { TbBrandGithub } from "react-icons/tb";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa6";
import pdf from "../assesment/shubh.pdf";
import { FaHandPeace } from "react-icons/fa6";
import "../pages/Home.css"
import Project from "./Project";
import About from './About'

const Home = () => {
  const email = "shubhs2844@gmail.com";
  const subject = "Hello Shubham we are here to hire you";
  const body =
    "Hi Shubham, I would like to discuss a potential project with you.";
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
  return (
    <div className=" ">
      <div className=" mb-20 flex ml-16 ">
        <img
          src={profile}
          alt="profile"
          height={620}
          width={620}
          className=" rounded-full pl-40 pr-32 pt-16"
        />
        <ul>
          <li className="  pl-1 pt-20 text-6xl font-bold text-blue-600 leading-20 font-mono">
            <div className=" flex flex-row gap-1">
              {" "}
              HI
              <FaHandPeace className="  text-yellow-600 text-5xl mt-1 " />,
            </div>
            I AM
            <li>SHUBHAM</li>
            <li className=" pl-0 font-bold leading-20">SIDDHAPURA</li>
          </li>

          <li className=" bg-gradient-to-r from-pink-500 via-green-500 to-violet-500 bg-clip-text text-transparent  pl-1 font-bold text-lg">
            I am{" "}
            <div class="font-extrabold text-3xl md:text-4xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 to-50% to-slate-200">
              {" "}
              <span class="text-indigo-500 inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
                <ul class="block animate-text-slide-2 text-left leading-tight [&_li]:block">
                  <li>Full-stack Devloper</li>
                  <li>Front-end Devloper</li>
                  <li aria-hidden="true">Back-end Devloper</li>
                </ul>
              </span>
            </div>{" "}
            passionate about building accessible
            <li>and user friendly Website.</li>
          </li>

          <li className=" pl-0 mt-1 space-x-2">
            <a href={mailtoLink}>
              <button className="  bg-blue-600 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-full">
                Hire me!
              </button>
            </a>
            <a href={pdf}>
              <button className="  bg-blue-600 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-full">
                Resume
              </button>
            </a>
          </li>

          <li className="flex gap-3">
            <a
              href="https://github.com/shubhamsiddhapura"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TbBrandGithub className=" mt-3 bg-white size-8 rounded-full" />
            </a>

            <a
              href="https://www.linkedin.com/in/shubham-siddhapura0248"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TiSocialLinkedin className=" mt-3 bg-white size-8 rounded-full" />
            </a>

            <a
              href="https://www.instagram.com/shubham_2_08_?igsh=Mmtuanc3d3JwdGVk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className=" mt-3 bg-white size-8 rounded-full" />
            </a>
          </li>
        </ul>
      </div>

    <About/>
    <Project/>
    </div>
  );
};

export default Home;
