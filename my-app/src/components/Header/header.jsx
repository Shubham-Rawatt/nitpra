

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