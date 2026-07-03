// import React from "react";
// import MoreWithUs from "../../pages/MoreWithUs/morewithus";

// import { FaAngleDoubleRight, FaPhoneAlt, FaEnvelope, FaFacebookF, FaLinkedinIn, FaTwitter, FaPaperPlane } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-linear-to-r from-[#2418A7] to-[#1976D2] text-white pt-16 pb-10">
//         <MoreWithUs />
//       <div className="max-w-7xl mx-auto px-8">

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

//           {/* Column 1 */}
//           <div>
//             <h2 className="text-3xl font-semibold">Digital Certification</h2>

//             <div className="w-10 h-[0.5] bg-white mt-4 mb-8"></div>

//             <ul className="space-y-5">
//               <li className="flex items-center gap-2 hover:translate-x-1 transition">
//                 <FaAngleDoubleRight className="text-sm" />
//                 About Us
//               </li>

//               <li className="flex items-center gap-2 hover:translate-x-1 transition">
//                 <FaAngleDoubleRight className="text-sm" />
//                 Contact Us
//               </li>

//               <li className="flex items-center gap-2 hover:translate-x-1 transition">
//                 <FaAngleDoubleRight className="text-sm" />
//                 Internships
//               </li>

//               <li className="flex items-center gap-2 hover:translate-x-1 transition">
//                 <FaAngleDoubleRight className="text-sm" />
//                 Internships
//               </li>
//             </ul>
//           </div>

//           {/* Column 2 */}
//           <div>
//             <h2 className="text-3xl font-semibold">Our Program</h2>

//             <div className="w-10 h-[0.5] bg-white mt-4 mb-8"></div>

//             <ul className="space-y-5">
//               {[1, 2, 3, 4, 5].map((item) => (
//                 <li key={item} className="flex items-center gap-2 hover:translate-x-1 transition">
//                   <FaAngleDoubleRight className="text-sm" />
//                   Link {item}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Column 3 */}
//           <div>
//             <h2 className="text-3xl font-semibold">Quick Link</h2>

//             <div className="w-10 h-[0.5] bg-white mt-4 mb-8"></div>

//             <ul className="space-y-5">
//               {[1, 2, 3, 4, 5].map((item) => (
//                 <li key={item} className="flex items-center gap-2 hover:translate-x-1 transition">
//                   <FaAngleDoubleRight className="text-sm" />
//                   Link {item}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Column 4 */}
//           <div>
//             <h2 className="text-3xl font-semibold">Training Center</h2>

//             <div className="w-10 h-[0.5] bg-white mt-4 mb-8"></div>

//             <p className="text-gray-200 mb-8">Delhi</p>

//             <div className="flex items-center gap-3 mb-6">
//               <FaPhoneAlt />
//               <span>+91 9191919191</span>
//             </div>

//             <div className="flex items-start gap-3 mb-8">
//               <FaEnvelope className="mt-1" />
//               <div>
//                 <p>info@ABCCompany.in</p>
//                 <p>support@ABCCompany.in</p>
//               </div>
//             </div>

//             {/* Social Icons */}
//             <div className="flex gap-5 text-xl mb-10">
//               <FaFacebookF className="cursor-pointer hover:scale-110 transition" />
//               <FaLinkedinIn className="cursor-pointer hover:scale-110 transition" />
//               <FaTwitter className="cursor-pointer hover:scale-110 transition" />
//             </div>

//             {/* Subscribe */}
//               <div className="w-[75] h-12 flex overflow-hidden rounded-lg bg-white">
//   <input
//     type="email"
//     placeholder="Your Email"
//     className="flex-1 px-4 text-sm text-black outline-none"
//   />

//   <button className="h-full px-4 bg-[#2436D8] text-white flex items-center justify-center gap-2 font-medium hover:bg-[#1b2bc0] transition">
//     <FaPaperPlane className="text-sm" />
//     <span>Start</span>
//   </button>
// </div>
//           </div>

//         </div>

//       </div>

//               <h5 className="text-center mt-5 text-lg">Copyright © 2026 ABC COMPANY By All Rights Reserved</h5>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import MoreWithUs from "../../pages/MoreWithUs/morewithus";

import {
  FaAngleDoubleRight,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaPaperPlane,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#2418A7] via-[#1F4CCB] to-[#1976D2] text-white mt-20">

      {/* Top CTA */}
      <MoreWithUs />

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* ================= Column 1 ================= */}

          <div>

            <h2 className="text-2xl font-bold">
              Digital Certification
            </h2>

            <div className="w-16 h-1 rounded-full bg-orange-400 mt-4 mb-7"></div>

            <ul className="space-y-4">

              <li className="flex items-center gap-3 text-gray-200 hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer">
                <FaAngleDoubleRight className="text-orange-400" />
                About Us
              </li>

              <li className="flex items-center gap-3 text-gray-200 hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer">
                <FaAngleDoubleRight className="text-orange-400" />
                Contact Us
              </li>

              <li className="flex items-center gap-3 text-gray-200 hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer">
                <FaAngleDoubleRight className="text-orange-400" />
                Internship
              </li>

              <li className="flex items-center gap-3 text-gray-200 hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer">
                <FaAngleDoubleRight className="text-orange-400" />
                Certifications
              </li>

              <li className="flex items-center gap-3 text-gray-200 hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer">
                <FaAngleDoubleRight className="text-orange-400" />
                Placement
              </li>

            </ul>

          </div>

          {/* ================= Column 2 ================= */}

          <div>

            <h2 className="text-2xl font-bold">
              Our Programs
            </h2>

            <div className="w-16 h-1 rounded-full bg-orange-400 mt-4 mb-7"></div>

            <ul className="space-y-4">

              <li className="flex items-center gap-3 text-gray-200 hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer">
                <FaAngleDoubleRight className="text-orange-400" />
                Web Development
              </li>

              <li className="flex items-center gap-3 text-gray-200 hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer">
                <FaAngleDoubleRight className="text-orange-400" />
                App Development
              </li>

              <li className="flex items-center gap-3 text-gray-200 hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer">
                <FaAngleDoubleRight className="text-orange-400" />
                Networking
              </li>

              <li className="flex items-center gap-3 text-gray-200 hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer">
                <FaAngleDoubleRight className="text-orange-400" />
                Digital Marketing
              </li>

              <li className="flex items-center gap-3 text-gray-200 hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer">
                <FaAngleDoubleRight className="text-orange-400" />
                Graphic Designing
              </li>

            </ul>

          </div>

          {/* ================= Column 3 ================= */}

          <div>

            <h2 className="text-2xl font-bold">
              Quick Links
            </h2>

            <div className="w-16 h-1 rounded-full bg-orange-400 mt-4 mb-7"></div>

            <ul className="space-y-4">

              <li className="flex items-center gap-3 text-gray-200 hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer">
                <FaAngleDoubleRight className="text-orange-400" />
                Home
              </li>

              <li className="flex items-center gap-3 text-gray-200 hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer">
                <FaAngleDoubleRight className="text-orange-400" />
                About
              </li>

              <li className="flex items-center gap-3 text-gray-200 hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer">
                <FaAngleDoubleRight className="text-orange-400" />
                Services
              </li>

              <li className="flex items-center gap-3 text-gray-200 hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer">
                <FaAngleDoubleRight className="text-orange-400" />
                Courses
              </li>

              <li className="flex items-center gap-3 text-gray-200 hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer">
                <FaAngleDoubleRight className="text-orange-400" />
                Contact
              </li>

            </ul>

          </div>

          {/* ================= Column 4 Starts Here ================= */}

          <div>

            <h2 className="text-2xl font-bold">
              Training Center
            </h2>

            <div className="w-16 h-1 rounded-full bg-orange-400 mt-4 mb-7"></div>

            <p className="text-gray-200 leading-7">
              Delhi, India <br />
              Professional IT Training Institute with Modern Infrastructure.
            </p>

            <div className="flex items-center gap-4 mt-8">

              <FaPhoneAlt className="text-orange-400 text-lg" />

              <span className="text-gray-200">
                +91 9191919191
              </span>

            </div>

            <div className="flex items-start gap-4 mt-5">

              <FaEnvelope className="text-orange-400 text-lg mt-1" />

              <div className="text-gray-200">
                <p>info@abccompany.com</p>
                <p>support@abccompany.com</p>
              </div>

            </div>
                        {/* Social Icons */}

            <div className="flex gap-4 mt-8">

              <div className="w-11 h-11 rounded-full bg-white/10 hover:bg-orange-500 flex items-center justify-center cursor-pointer transition-all duration-300 hover:-translate-y-1">
                <FaFacebookF />
              </div>

              <div className="w-11 h-11 rounded-full bg-white/10 hover:bg-orange-500 flex items-center justify-center cursor-pointer transition-all duration-300 hover:-translate-y-1">
                <FaLinkedinIn />
              </div>

              <div className="w-11 h-11 rounded-full bg-white/10 hover:bg-orange-500 flex items-center justify-center cursor-pointer transition-all duration-300 hover:-translate-y-1">
                <FaTwitter />
              </div>

            </div>

            {/* Subscribe */}

            <div className="mt-10">

              <h3 className="text-lg font-semibold mb-4">
                Subscribe Newsletter
              </h3>
       
        <div className="flex w-full items-center rounded-xl border border-orange-200 bg-white shadow-lg overflow-hidden">

  <input
    type="email"
    placeholder="Enter your email..."
    className="min-w-0 flex-1 h-14 px-5 text-gray-800 placeholder:text-gray-400 outline-none"
  />

  <button
    type="button"
    className="flex-none h-14 px-8 bg-orange-500 hover:bg-orange-600 text-white font-semibold flex items-center justify-center whitespace-nowrap"
  >
    Send
  </button>

</div>
            </div>

          </div>

        </div>

        {/* Bottom Border */}

        <div className="border-t border-white/20 mt-16 pt-8">

          <div className="flex flex-col md:flex-row justify-between items-center gap-5">

            <p className="text-sm text-gray-200 text-center md:text-left">
              Copyright © 2026 ABC COMPANY. All Rights Reserved.
            </p>

            <div className="flex gap-6 text-sm text-gray-200">

              <span className="cursor-pointer hover:text-orange-400 transition">
                Privacy Policy
              </span>

              <span className="cursor-pointer hover:text-orange-400 transition">
                Terms & Conditions
              </span>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;