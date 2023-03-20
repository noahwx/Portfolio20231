import React from "react";
import { Routes, Route } from 'react-router-dom';
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Projects from "../pages/Projects";

const Main = () => {
    return ( 
        <Routes>
            <Route to='/' element={<Home />} />
            <Route to='/About' element={<About />} />
            <Route to='/Projects' element={<Projects />} />
            <Route to='/Contact' element={<Contact />} />
        </Routes>
     );
}
 
export default Main;