import React from "react";
import { Routes, Route } from 'react-router-dom';
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Projects from "../pages/Projects";

const Main = () => {
    return ( 
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/pages/About' element={<About />} />
            <Route exact path='/pages/Projects' element={<Projects />} />
            <Route exact path='/pages/Contact' element={<Contact />} />
        </Routes>
     );
}
 
export default Main;