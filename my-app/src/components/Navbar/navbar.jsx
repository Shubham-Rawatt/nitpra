// import React, { useState, useEffect } from "react";
// import logo from "../../assets/images/logo.png";
// import { HiMenu, HiX } from "react-icons/hi";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 80);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`fixed left-0 w-full z-50 transition-all duration-500 ${
//         scrolled
//           ? "top-0 bg-slate-900/95 backdrop-blur-md shadow-2xl border-b border-slate-700"
//           : "top-0 md:top-10 bg-transparent"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-5 lg:px-8 py-2 md:py-3 flex items-center justify-between">
//         {/* Logo */}
//         <div>
//           <img
//             src={logo}
//             alt="logo"
//             className="w-12 h-12 lg:w-16 lg:h-16 object-contain transition-transform duration-300 hover:scale-105"
//           />
//         </div>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex items-center gap-10 lg:gap-12 font-medium tracking-wide">
//           {["Home", "About", "Contact Us", "Services"].map((item) => (
//             <li
//               key={item}
//               className="relative text-white cursor-pointer transition-all duration-300 hover:text-orange-400 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-orange-400 after:transition-all after:duration-300 hover:after:w-full"
//             >
//               {item}
//             </li>
//           ))}

//           <li>
//             <button className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-7 py-2.5 rounded-full font-semibold shadow-lg hover:shadow-orange-400/40 hover:scale-105 transition-all duration-300">
//               Apply Now
//             </button>
//           </li>
//         </ul>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={() => setOpen(!open)}
//           className="md:hidden text-white text-4xl transition-transform duration-300 hover:scale-110"
//         >
//           {open ? <HiX /> : <HiMenu />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`md:hidden bg-slate-900/95 backdrop-blur-md overflow-hidden transition-all duration-300 ${
//           open ? "max-h-80 py-5" : "max-h-0"
//         }`}
//       >
//         <ul className="flex flex-col items-center gap-6 font-medium">
//           {["Home", "About", "Contact Us", "Services"].map((item) => (
//             <li
//               key={item}
//               className="text-white hover:text-orange-400 cursor-pointer transition-all duration-300"
//             >
//               {item}
//             </li>
//           ))}

//           <li>
//             <button className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-7 py-2.5 rounded-full font-semibold shadow-lg">
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
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { HiMenu, HiX } from "react-icons/hi";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact Us", path: "/contact" },
  { name: "Services", path: "/service" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "top-0 bg-slate-900/95 backdrop-blur-md shadow-2xl border-b border-slate-700"
          : "top-0 md:top-10 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-2 md:py-3 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/">
          <img
            src={logo}
            alt="logo"
            className="w-12 h-12 lg:w-16 lg:h-16 object-contain transition-transform duration-300 hover:scale-105"
          />
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 lg:gap-12 font-medium tracking-wide">
          {navItems.map((item) => (
            <li
              key={item.name}
              className="relative cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-orange-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `transition-all duration-300 hover:text-orange-400 ${
                    isActive ? "text-orange-400" : "text-white"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}

          <li>
            <button className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-7 py-2.5 rounded-full font-semibold shadow-lg hover:shadow-orange-400/40 hover:scale-105 transition-all duration-300">
              Apply Now
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-4xl transition-transform duration-300 hover:scale-110"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-slate-900/95 backdrop-blur-md overflow-hidden transition-all duration-300 ${
          open ? "max-h-80 py-5" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 font-medium">
          {navItems.map((item) => (
            <li key={item.name} onClick={() => setOpen(false)}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `transition-all duration-300 ${
                    isActive ? "text-orange-400" : "text-white hover:text-orange-400"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}

          <li>
            <button className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-7 py-2.5 rounded-full font-semibold shadow-lg">
              Apply Now
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;