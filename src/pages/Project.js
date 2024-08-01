import React from 'react'
import job from "../assesment/jjj.png"
import j from "../assesment/job.png"
import study from '../assesment/study.png'
import gpt from '../assesment/gpt.png'
import dine from '../assesment/dine.png'
import "../pages/Product.css"

const Project = () => {
  return (
    
    <div className='mt-20 mb-20  '>
      <div className=' flex  mb-10 mr-10 '>
      <div className='  mt-14 ml-10  nav bg-black'>
      <img  className="mt-5 " src={job} alt='i' height={350} width={600}/>
      <h1 className=' font-bold text-2xl pl-36 pt-5  text-blue-600 '>Evidence Tracking System</h1>
      <p className=' justify-center text-blue-500 pl-10 pr-10 pb-5'>
      The project is an evidence tracking system built on the MERN stack, ensuring efficient and secure management of evidence. Utilizing MongoDB, Express.js, React.js, and Node.js, it provides a seamless interface for tracking and updating evidence records in real-time. The system features advanced search and filtering, robust security measures, and a modern design with CSS, ensuring a user-friendly and reliable experience.
      </p>
</div>

<div className='  mt-14 ml-10  nav bg-black'>
      <img  className=" mt-5" src={j} alt='i' height={350} width={600}/>
      <h1 className=' font-bold text-2xl pl-36 pt-5  text-blue-600 '>Job Search Portal</h1>
      <p className=' justify-center text-blue-500 pl-10 pr-10 pb-5'>
      The project is a job search portal built on the MERN stack, designed to provide an efficient and user-friendly experience. Utilizing MongoDB, Express.js, React.js, and Node.js, it offers a seamless interface for job seekers and employers. The portal features advanced search and filtering, real-time updates, and a modern design with CSS, ensuring a smooth and engaging user experience.
      </p>
</div>



       
</div> 


<div className=' flex mr-10'>
<div className='  mt-14 ml-10  nav bg-black'>
      <img  className=" mt-5" src={study} alt='i' width={600}/>
      <h1 className=' font-bold text-2xl pl-56 pt-5  text-blue-600 '>Study-notion</h1>
      <p className=' justify-center text-blue-500 pl-10 pr-10 pb-5'>
    
      The project is a study notion application built on the MERN stack, designed to enhance the learning experience. Utilizing MongoDB, Express.js, React.js, and Node.js, it offers an intuitive and organized interface for managing study materials and notes. With features like real-time updates, advanced search, and a modern design with CSS, the application ensures a smooth, efficient, and engaging user experience for students.
      </p>
</div>

<div className='  mt-14 ml-10  nav bg-black'>
      <img  className=" mt-5" src={gpt} alt='i'  width={700}/>
      <h1 className=' font-bold text-2xl pl-56 pt-5  text-blue-600 '>GPT-3</h1>
      <p className=' justify-center text-blue-500 pl-10 pr-10 pb-5'>
      The project is a web app using React.js and GPT-3 API, focused on delivering a smooth user experience with an intuitive interface. Designed with modern CSS, it ensures visually appealing and user-friendly interactions. The app provides quick, intelligent responses, showcasing the power of AI while maintaining high web design standards for a seamless, engaging user experience.
     
      </p>
</div>
      </div>

      
<div className=' flex mr-10'>\


<div className='  mt-14  mr-52 ml-64 nav bg-black'>
      <img  className=" mt-5 " src={dine} alt='i'  width={800}/>
      <h1 className=' font-bold text-2xl pl-64 pt-5  text-blue-600 '>Dine in-resturent</h1>
      <p className=' justify-center text-blue-500 pl-10 pr-10 pb-5'>
      The project is a dine-in restaurant application built using React.js and CSS, aimed at enhancing the dining experience. It features a sleek, modern design and a user-friendly interface for browsing menus, placing orders, and making reservations. The application ensures smooth interactions and quick responses, providing a seamless and engaging user experience for diners.
      </p>
</div>



</div>
</div>
  )
}

export default Project