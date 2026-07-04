// import React from "react";
// // import Navbar from "../Navbar/navbar";

// const Header = () => {
//   return (
//     // <header className="w-full sticky to-0 z-50 bg-linear-to-r from-slate-950 via-blue-900 to-blue-700">
//         // <header className="sticky top-0 z-50 w-full hidden md:block bg-amber-50 border-b border-gray-600">
//           <header className="w-full hidden md:block bg-amber-50 border-b border-slate-200 shadow-sm">
//       {/* Top Bar */}
//       {/* <div className="border-b border-white/10"> */}
//           <div className="">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">

//           <div className="flex flex-col md:flex-row items-center justify-between gap-2">

//             {/* Left Side */}
//             <ul className="flex flex-wrap items-center justify-center md:justify-start gap-3 text-sm sm:text-base">
//               <li className="text-gray-900 font-medium cursor-pointer hover:text-orange-400 transition">
//                 Apply Now
//               </li>

//               <span className="hidden sm:block text-gray-500">|</span>

//               <li className="text-gray-900 font-medium cursor-pointer hover:text-orange-400 transition">
//                 FAQ
//               </li>

//               <span className="hidden sm:block text-gray-500">|</span>

//               <li className="text-gray-900 font-medium">
//                 +91 1234567890
//               </li>
//             </ul>

//             {/* Right Side */}
//             <div className="w-full md:w-[45%] overflow-hidden">
//               <marquee
//                 className="text-slate-900 text-sm sm:text-base font-bold"
//                 scrollAmount="4"
//               >
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                 Ducimus magnam iure voluptatem officia esse.
//               </marquee>
//             </div>

//           </div>

//         </div>
//       </div>

//       {/* <Navbar /> */}
//     </header>
//   );
// };

// export default Header;

import React from "react";

const Header = () => {
  return (
    <header className="hidden md:block w-full bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-2">
        <div className="flex items-center justify-between">

          {/* Left Side */}
          <ul className="flex items-center gap-4 text-sm">

            <li className="font-medium text-slate-700 hover:text-orange-500 cursor-pointer transition-colors duration-300">
              Apply Now
            </li>

            <span className="text-slate-300">|</span>

            <li className="font-medium text-slate-700 hover:text-orange-500 cursor-pointer transition-colors duration-300">
              FAQ
            </li>

            <span className="text-slate-300">|</span>

            <li className="font-semibold text-slate-800 tracking-wide">
              +91 1234567890
            </li>

          </ul>

          {/* Right Side */}
          <div className="w-[42%] overflow-hidden">
            <marquee
              scrollAmount=""
              className="text-sm font-medium text-slate-600"
            >
              🎓 Admissions Open 2026 | Learn Web Development, React, Python &
              AI with Live Projects and Placement Assistance.
            </marquee>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;