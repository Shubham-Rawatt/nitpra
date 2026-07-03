// //   import React from 'react'
// // import logo from '../../assets/images/logo.png'

// // const Navbar = () => {
// //   return (
// //     <nav className="sticky top-0 z-50 flex w-full justify-between items-center px-10 py-4 shadow-md">
// //       {/* <nav className="sticky top-0 left-0 w-full z-50 shadow-md flex justify-between items-center px-10 py-4"> */}
// //       <div>
// //         <img src={logo} alt="logo"  className='h-20 w-20'/>
// //       </div>

// //       <ul className='flex items-center gap-20'>
// //         <li className='text-white'>Home</li>
// //         <li className='text-white'>About</li>
// //         <li className='text-white'>Contact Us</li>
// //         <li>
// //           <button className='bg-linear-to-b from-orange-400 to-orange-500 text-white px-6 py-2 rounded-lg text-md hover:scale-105 transition-all duration-300 cursor-pointer'>Apply now </button>
// //         </li>
// //       </ul>

// //     </nav>
// //   )
// // }

// // export default Navbar

// import React, { useState, useEffect } from "react";

// import logo from "../../assets/images/logo.png";
// import { HiMenu, HiX } from "react-icons/hi";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <nav className="w-full shadow-md">
//       <div className="max-w-7xl mx-auto px-5 lg:px-10 py-4 flex justify-between items-center">
//         {/* Logo */}
//         <div>
//           <img src={logo} alt="logo" className="w-14 h-14 lg:w-16 lg:h-16 object-contain" />
//         </div>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex items-center gap-10 lg:gap-16">
//           <li className="text-white cursor-pointer hover:text-orange-400 transition">
//             Home
//           </li>

//           <li className="text-white cursor-pointer hover:text-orange-400 transition">
//             About
//           </li>

//           <li className="text-white cursor-pointer hover:text-orange-400 transition">
//             Contact Us
//           </li>
//           <li className="text-white hover:text-orange-400 cursor-pointer transition">
//             Services
//           </li>
//           <li>
//             <button className="bg-gradient-to-b from-orange-400 to-orange-500 text-white px-6 py-2 rounded-lg hover:scale-105 transition duration-300">
//               Apply Now
//             </button>
//           </li>
//         </ul>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={() => setOpen(!open)}
//           className="md:hidden text-white text-4xl"
//         >
//           {open ? <HiX /> : <HiMenu />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`md:hidden bg-slate-900 overflow-hidden transition-all duration-300 ${
//           open ? "max-h-80 py-4" : "max-h-0"
//         }`}
//       >
//         <ul className="flex flex-col items-center gap-6">
//           <li className="text-white hover:text-orange-400 cursor-pointer">
//             Home
//           </li>

//           <li className="text-white hover:text-orange-400 cursor-pointer">
//             About
//           </li>

//           <li className="text-white hover:text-orange-400 cursor-pointer">
//             Contact Us
//           </li>

//            <li className="text-white hover:text-orange-400 cursor-pointer">
//             Services
//           </li>

//           <li>
//             <button className="bg-gradient-to-b from-orange-400 to-orange-500 text-white px-6 py-2 rounded-lg">
//               Apply Now
//             </button>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import logo from "../../assets/images/logo.png";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-linear-to-r from-slate-900 via-slate-800 to-slate-900 bg-transparent py-3 shadow-lg"
          : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-10 py-4 flex justify-between items-center">

        {/* Logo */}
        <div>
          <img
            src={logo}
            alt="logo"
            className="w-14 h-14 lg:w-16 lg:h-16 object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 lg:gap-16">
          <li className="text-white cursor-pointer hover:text-orange-400 transition">
            Home
          </li>

          <li className="text-white cursor-pointer hover:text-orange-400 transition">
            About
          </li>

          <li className="text-white cursor-pointer hover:text-orange-400 transition">
            Contact Us
          </li>

          <li className="text-white cursor-pointer hover:text-orange-400 transition">
            Services
          </li>

          <li>
            <button className="bg-linear-to-b from-orange-400 to-orange-500 text-white px-6 py-2 rounded-lg hover:scale-105 transition duration-300">
              Apply Now
            </button>
          </li>
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-4xl"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-slate-900 overflow-hidden transition-all duration-300 ${
          open ? "max-h-80 py-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6">
          <li className="text-white hover:text-orange-400 cursor-pointer">
            Home
          </li>
          <li className="text-white hover:text-orange-400 cursor-pointer">
            About
          </li>
          <li className="text-white hover:text-orange-400 cursor-pointer">
            Contact Us
          </li>
          <li className="text-white hover:text-orange-400 cursor-pointer">
            Services
          </li>
          <li>
            <button className="bg-linear-to-b from-orange-400 to-orange-500 text-white px-6 py-2 rounded-lg">
              Apply Now
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
