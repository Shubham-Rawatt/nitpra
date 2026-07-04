
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
  const contacts = [
    {
      icon: <FaMapMarkerAlt className="text-red-600 text-2xl" />,
      title: "ABC COMPANY",
      subtitle: "Kadam Kuan More, Delhi",
    },
    {
      icon: <FaPhoneAlt className="text-red-600 text-2xl" />,
      title: "+91 9191919191",
      subtitle: "Give us a call",
    },
    {
      icon: <FaEnvelope className="text-red-600 text-2xl" />,
      title: "info@abccompany.com",
      subtitle: "Get in Touch",
      titleClass: "text-lg lg:text-xl break-all",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="uppercase tracking-[4px] text-orange-500 font-semibold text-sm">
            More With Us
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 leading-tight text-gray-900">
            You Want to Showcase Your Business
            <br className="hidden lg:block" />
            Join With Us Today
          </h2>

          <button className="mt-8 px-9 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-700 text-white font-semibold shadow-lg shadow-purple-900/20 hover:scale-105 hover:shadow-xl transition-all duration-300">
            Join Us
          </button>
        </div>

        {/* Contact Box */}
<div className="relative mt-16 overflow-hidden bg-gradient-to-br from-orange-600 via-red-600 to-rose-800 rounded-3xl shadow-2xl shadow-red-950/30 px-6 sm:px-10 lg:px-14 py-10 lg:py-12">

  {/* decorative glow accents */}
  <div className="pointer-events-none absolute -top-20 -right-16 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
  <div className="pointer-events-none absolute -bottom-24 -left-10 w-64 h-64 bg-black/10 rounded-full blur-3xl"></div>

  <div className="relative grid grid-cols-1 md:grid-cols-3 divide-y divide-white/15 md:divide-y-0 md:divide-x">
    {contacts.map((item, index) => (
      <div
        key={index}
        className="flex items-center gap-5 py-6 md:py-0 md:px-8 first:pt-0 first:md:pl-0 last:pb-0 last:md:pr-0"
      >
        <div className="w-16 h-16 shrink-0 rounded-full bg-white flex items-center justify-center shadow-lg shadow-black/20 ring-4 ring-white/20">
          {item.icon}
        </div>

        <div className="min-w-0">
          <h3 className={`font-bold text-white drop-shadow-sm ${item.titleClass || "text-xl"}`}>
            {item.title}
          </h3>
          <p className="text-white/80 mt-1 text-sm sm:text-base">
            {item.subtitle}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>
        

      </div>
    </section>
  );
};

export default MoreWithUs;