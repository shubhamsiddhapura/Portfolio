import React from 'react';
import job from "../assesment/jjj.png";
import j from "../assesment/job.png";
import study from '../assesment/study.png';
import gpt from '../assesment/gpt.png';
import dine from '../assesment/dine.png';
import "../pages/Product.css";

const Project = () => {
  return (
    <div className="pt-10 pb-20 bg-black ">
      <div className="grid grid-cols-1 gap-10 p-4 md:grid-cols-2">
        
        {/* Evidence Tracking System */}
        <div className="p-5 transition-transform duration-300 bg-black rounded-lg shadow-lg hover:bg-white hover:scale-105">
          <img className="mx-auto rounded-md" src={job} alt="Evidence Tracking System" />
          <h1 className="pt-5 text-2xl font-bold text-center text-blue-600">Evidence Tracking System</h1>
          <p className="px-6 py-4 text-justify text-blue-500">
            The project is an evidence tracking system built on the MERN stack, ensuring efficient and secure management of evidence.
          </p>
          <div className="text-center">
            <a href="https://malkhana-management-system.vercel.app/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 mt-3 text-white bg-blue-600 rounded-md hover:bg-blue-700">
              View Project
            </a>
          </div>
        </div>

        {/* Job Search Portal */}
        <div className="p-5 transition-transform duration-300 bg-black rounded-lg shadow-lg hover:bg-white hover:scale-105">
          <img className="mx-auto rounded-md" src={j} alt="Job Search Portal" />
          <h1 className="pt-5 text-2xl font-bold text-center text-blue-600">Job Search Portal</h1>
          <p className="px-6 py-4 text-justify text-blue-500">
            The project is a job search portal built on the MERN stack, designed to provide an efficient and user-friendly experience.
          </p>
          <div className="text-center">
            <a href="https://github.com/yourusername/job-search-portal" target="_blank" rel="noopener noreferrer" className="px-4 py-2 mt-3 text-white bg-blue-600 rounded-md hover:bg-blue-700">
              View Project
            </a>
          </div>
        </div>

        {/* Study Notion */}
        <div className="p-5 transition-transform duration-300 bg-black rounded-lg shadow-lg hover:bg-white hover:scale-105">
          <img className="mx-auto rounded-md" src={study} alt="Study Notion" />
          <h1 className="pt-5 text-2xl font-bold text-center text-blue-600">Study Notion</h1>
          <p className="px-6 py-4 text-justify text-blue-500">
            The project is a study notion application built on the MERN stack, designed to enhance the learning experience.
          </p>
          <div className="text-center">
            <a href="https://study-notion-ten-delta.vercel.app/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 mt-3 text-white bg-blue-600 rounded-md hover:bg-blue-700">
              View Project
            </a>
          </div>
        </div>

        {/* GPT-3 */}
        <div className="p-5 transition-transform duration-300 bg-black rounded-lg shadow-lg hover:bg-white hover:scale-105">
          <img className="mx-auto rounded-md" src={gpt} alt="GPT-3" />
          <h1 className="pt-5 text-2xl font-bold text-center text-blue-600">GPT-3</h1>
          <p className="px-6 py-4 text-justify text-blue-500">
            The project is a web app using React.js and GPT-3 API, focused on delivering a smooth user experience.
          </p>
          <div className="text-center">
            <a href="https://github.com/yourusername/gpt3-app" target="_blank" rel="noopener noreferrer" className="px-4 py-2 mt-3 text-white bg-blue-600 rounded-md hover:bg-blue-700">
              View Project
            </a>
          </div>
        </div>

        {/* Dine-in Restaurant */}
        <div className="p-5 transition-transform duration-300 bg-black rounded-lg shadow-lg hover:bg-white hover:scale-105">
          <img className="mx-auto rounded-md" src={dine} alt="Dine-in Restaurant" />
          <h1 className="pt-5 text-2xl font-bold text-center text-blue-600">Dine-in Restaurant</h1>
          <p className="px-6 py-4 text-justify text-blue-500">
            The project is a dine-in restaurant application built using React.js and CSS, aimed at enhancing the dining experience.
          </p>
          <div className="text-center">
            <a href="https://github.com/yourusername/dine-in-restaurant" target="_blank" rel="noopener noreferrer" className="px-4 py-2 mt-3 text-white bg-blue-600 rounded-md hover:bg-blue-700">
              View Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
