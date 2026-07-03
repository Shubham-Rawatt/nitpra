import React from "react";
import { Route ,Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Service from "../pages/Service";


const AppRoutes =() =>{
    return(
        <Routes>
            <Route path ='/' element={<Home/>} /> 
             <Route path ='/about' element={<About/>}/> 
             <Route path='/Contact' element={<Contact/>}/>   
             <Route path ='/service' element={<Service/>}/> 
        </Routes>
    )
}

export default AppRoutes;