import React from "react";
import Navbar from "../Navbar/navbar";

const Header = () => {
  return (
    // <header className="w-full sticky to-0 z-50 bg-linear-to-r from-slate-950 via-blue-900 to-blue-700">
        <header className="sticky top-0 z-50 w-full">
      {/* Top Bar */}
      {/* <div className="border-b border-white/10"> */}
          <div className="bg-linear-to-r from-slate-950 via-blue-900 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">

          <div className="flex flex-col md:flex-row items-center justify-between gap-2">

            {/* Left Side */}
            <ul className="flex flex-wrap items-center justify-center md:justify-start gap-3 text-sm sm:text-base">
              <li className="text-white font-medium cursor-pointer hover:text-orange-400 transition">
                Apply Now
              </li>

              <span className="hidden sm:block text-white">|</span>

              <li className="text-white font-medium cursor-pointer hover:text-orange-400 transition">
                FAQ
              </li>

              <span className="hidden sm:block text-white">|</span>

              <li className="text-white font-medium">
                +91 1234567890
              </li>
            </ul>

            {/* Right Side */}
            <div className="w-full md:w-[45%] overflow-hidden">
              <marquee
                className="text-white text-sm sm:text-base"
                scrollAmount="4"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ducimus magnam iure voluptatem officia esse.
              </marquee>
            </div>

          </div>

        </div>
      </div>

      <Navbar />
    </header>
  );
};

export default Header;