import React from "react";
import profile from "../assesment/yel.png";
import { TbBrandGithub } from "react-icons/tb";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa6";
import pdf from "../assesment/shubh.pdf";
import { FaHandPeace } from "react-icons/fa6";
import "../pages/Home.css";
import Project from "./Project";
import About from "./About";

const Home = () => {
  const email = "shubhs2844@gmail.com";
  const subject = "Hello Shubham we are here to hire you";
  const body =
    "Hi Shubham, I would like to discuss a potential project with you.";
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
  return (
    <div>
      <div className="flex flex-col items-center w-full px-5 pt-20 pb-20 pl-10 bg-black sm:px-10 md:px-14 lg:px-20">
        <div className="flex flex-col items-center justify-center pl-5 mb-10 sm:pl-10 md:flex-row">
          <img
            src={profile}
            alt="profile"
            height={600}
            width={600}
            className="max-w-xs pl-5 rounded-full sm:max-w-md md:pl-8 md:pr-8"
          />
          <ul className="mt-8 text-center md:text-left md:mt-0 md:ml-10">
            <li className="text-3xl font-bold leading-tight text-blue-600 sm:text-4xl md:text-6xl">
              <div className="flex items-center justify-center gap-2 md:justify-start">
                HI
                <FaHandPeace className="text-3xl text-yellow-600 sm:text-4xl md:text-5xl" />
              </div>
              I AM
              <li>SHUBHAM</li>
              <li className="font-bold">SIDDHAPURA</li>
            </li>

            <li className="mt-4 text-sm font-bold text-transparent sm:text-base md:text-lg bg-gradient-to-r from-pink-500 via-green-500 to-violet-500 bg-clip-text">
              I am
              <div className="text-wrapper">
                <ul className="animate-text-slide">
                  <li>Full-stack Developer</li>
                </ul>
              </div>
              passionate about building accessible
              <li>and user-friendly Websites.</li>
            </li>

            <li className="mt-4 space-x-2">
              <a href={mailtoLink}>
                <button className="px-3 py-2 font-bold text-white bg-blue-600 rounded-full sm:px-4 sm:py-2 hover:bg-blue-400">
                  Hire me!
                </button>
              </a>
              <a href={pdf}>
                <button className="px-3 py-2 font-bold text-white bg-blue-600 rounded-full sm:px-4 sm:py-2 hover:bg-blue-400">
                  Resume
                </button>
              </a>
            </li>

            <li className="flex justify-center gap-3 mt-6 md:justify-start">
              <a
                href="https://github.com/shubhamsiddhapura"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TbBrandGithub className="p-1 text-2xl bg-white rounded-full sm:text-3xl" />
              </a>

              <a
                href="https://www.linkedin.com/in/shubham-siddhapura0248"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TiSocialLinkedin className="p-1 text-2xl bg-white rounded-full sm:text-3xl" />
              </a>

              <a
                href="https://www.instagram.com/shubham_2_08_?igsh=Mmtuanc3d3JwdGVk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="p-1 text-2xl bg-white rounded-full sm:text-3xl" />
              </a>
            </li>
          </ul>
        </div>

        <About />
        <Project />
      </div>
    </div>
  );
};

export default Home;
