import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./component/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Footer from "./component/Footer";
import "./App.css";
const App = () => {
  return (
    <div>
      
      <NavBar />

      {/* <About />
      <Project /> */}
      <Routes>  
        <Route path="Project" element={<Project />} />
        <Route path="About" element={<About />} />
        <Route path="/" element={<Home/>}/>
      </Routes>
        
        < Footer/>

    </div>
  );
};

export default App;
