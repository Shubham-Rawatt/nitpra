
import React from "react"
import Header from "./components/Header/header"
import Home from "./pages/Home/home"
import OurVision from "./pages/OurVision/ourvision"
import Service from "./pages/Services/services"
import OurClient from "./pages/OurClient/client"
import AboutCompany from "./pages/AboutCompany/aboutcompany"
import Course from "./pages/Courses/course"
import Footer from "./components/Footer/footer"
import Navbar from "./components/Navbar/navbar"
function App() {

  return (
    // <Routes>
    <div className="text-white bg-[#0F172A] shadow:md">
      <Header />
  <Navbar />
  <Home />
  <OurVision />
  <Service />
  <OurClient />
  <AboutCompany />
  <Course />
  <Footer />
  </div>
    // </Routes>
  )
}

export default App

// import { Routes, Route } from "react-router-dom";
// import Header from "./components/Header/header";
// import Home from "./pages/Home/home";
// import AboutCompany from "./pages/AboutCompany/aboutcompany";
// import Service from "./pages/Services/services";
// import Course from "./pages/Courses/course";
// import Footer from "./components/Footer/footer";

// function App() {
//   return (
//     <div className="text-white bg-[#0F172A]">
//       <Header />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<AboutCompany />} />
//         <Route path="/services" element={<Service />} />
//         <Route path="/course" element={<Course />} />
//       </Routes>

//       <Footer />
//     </div>
//   );
// }

// export default App;