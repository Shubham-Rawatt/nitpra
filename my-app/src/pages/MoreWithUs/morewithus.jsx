
// import React from "react";
// import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

// const MoreWithUs = () => {
//   return (
//     <div className="mt-10 py-10 ">
//       <div className="text-center flex flex-col items-center gap-3">
//         <p>More with us</p>

//         <h2 className="text-4xl font-bold">
//           You Want to Showcase Your Business in Top Join With Us
//         </h2>

//         <button className="px-6 py-2 bg-linear-to-r from-purple-600 to-blue-700 text-white font-semibold rounded-lg shadow-md hover:scale-105 transition">
//           join us
//         </button>
//       </div>

//       {/* center red div  */}
//       <div className="w-3/4 mx-auto bg-linear-to-r from-orange-500 to-red-600 rounded-2xl py-10 px-6 mt-10 shadow-lg">
//         <div className="grid grid-cols-2 gap-x-10 gap-y-8">
//           {/* Address */}
//           <div className="flex items-center gap-4">
//             <FaMapMarkerAlt className="text-white text-4xl" />

//             <div>
//               <h3 className="text-xl font-semibold text-white">ABC COMPANY</h3>
//               <p className="text-sm text-white/90">Kadam Kaun More, Delhi</p>
//             </div>
//           </div>

//           {/* Phone */}
//           <div className="flex items-center gap-4">
//             <FaPhoneAlt className="text-white text-4xl" />

//             <div>
//               <h3 className="text-xl font-semibold text-white">
//                 +91 9191919191
//               </h3>
//               <p className="text-sm text-white/90">Give us a call</p>
//             </div>
//           </div>

//           {/* Email */}
//           <div className="flex items-center gap-4">
//             <FaEnvelope className="text-white text-4xl" />

//             <div>
//               <h3 className="text-xl font-semibold text-white">
//                 info@abccompany.com
//               </h3>
//               <p className="text-sm text-white/90">Get in Touch</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MoreWithUs;
import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const MoreWithUs = () => {
  return (
    <section className="py-15 lg:py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Heading */}
        <div className="text-center">

          <p className="uppercase tracking-[4px] text-orange-500 font-semibold">
            More With Us
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 leading-tight text-gray-900">
            You Want to Showcase Your Business
            <br className="hidden lg:block" />
            Join With Us Today
          </h2>

          <button className="mt-8 px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-700 text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300">
            Join Us
          </button>

        </div>

        {/* Contact Box */}

        <div className="mt-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-3xl shadow-2xl px-6 sm:px-10 lg:px-12 py-10">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Address */}

            <div className="flex items-center gap-5 bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition">

              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">

                <FaMapMarkerAlt className="text-red-600 text-2xl" />

              </div>

              <div>

                <h3 className="text-xl font-bold text-white">
                  ABC COMPANY
                </h3>

                <p className="text-white/90 mt-1">
                  Kadam Kaun More, Delhi
                </p>

              </div>

            </div>

            {/* Phone */}

            <div className="flex items-center gap-5 bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition">

              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">

                <FaPhoneAlt className="text-red-600 text-2xl" />

              </div>

              <div>

                <h3 className="text-xl font-bold text-white">
                  +91 9191919191
                </h3>

                <p className="text-white/90 mt-1">
                  Give us a call
                </p>

              </div>

            </div>

            {/* Email */}

            <div className="flex items-center gap-5 bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition">

              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">

                <FaEnvelope className="text-red-600 text-2xl" />

              </div>

              <div>

                <h3 className="text-lg lg:text-xl font-bold text-white break-all">
                  info@abccompany.com
                </h3>

                <p className="text-white/90 mt-1">
                  Get in Touch
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default MoreWithUs;