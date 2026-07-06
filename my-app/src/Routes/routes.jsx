// import React from "react";
// import { Route ,Routes } from "react-router-dom";
// // import Home from "../pages/Home";
// import About from "../pages/About/about";
// import Contact from "../pages/Contact";
// import Service from "../pages/Service";
// import Home from "../pages/Home/home";


// const AppRoutes =() =>{
//     return(
//         <Routes>
//             <Route path ='/' element={<Home />} /> 
//              <Route path ='/about' element={<About/>}/> 
//              <Route path='/Contact' element={<Contact/>}/>   
//              <Route path ='/service' element={<Service/>}/> 
//         </Routes>
//     )
// }

// export default AppRoutes;
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/home";
import About from "../pages/About/about";
import Contact from "../pages/Contact/contact";
import Service from "../pages/Services/services";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/service" element={<Service />} />
    </Routes>
  );
};

export default AppRoutes;