

// import React from "react";
// import {
//   FaNetworkWired,
//   FaServer,
//   FaLaptopCode,
//   FaMobileAlt,
//   FaCamera,
//   FaBullhorn,
// } from "react-icons/fa";

// const Service = () => {
//   const serviceCard = [
//     {
//       id: 1,
//       icon: <FaNetworkWired />,
//       title: "Networking & Security",
//       desc: "Deals with all major brand of network and security equipments Network equipments including perimeter routes wireless and switches etc.",
//     },
//     {
//       id: 2,
//       icon: <FaServer />,
//       title: "Servers & Storage",
//       desc: "Availability of all major OEM for servers & storage.",
//     },
//     {
//       id: 3,
//       icon: <FaLaptopCode />,
//       title: "Software",
//       desc: "Availability of all major software new purchases and license renewals.",
//     },
//     {
//       id: 4,
//       icon: <FaMobileAlt />,
//       title: "App Development",
//       desc: "Development of all types of applications from web to mobile application development.",
//     },
//     {
//       id: 5,
//       icon: <FaCamera />,
//       title: "Photography Courses",
//       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//     },
//     {
//       id: 6,
//       icon: <FaBullhorn />,
//       title: "PPC Advertising",
//       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//     },
//   ];

//   return (
//     <section className="py-10 mt-10 px-4 sm:px-6 lg:px-10">
//       {/* Heading */}
//       <p className="text-center text-3xl sm:text-4xl text-slate-500 font-semibold">
//         Our Services
//       </p>

//       <h2 className="text-center text-xl sm:text-2xl lg:text-3xl mt-5 leading-relaxed">
//         We are 100% committed to making sure business owners have the most
//         <br className="hidden lg:block" />
//         reliable and professional IT services to cover all their IT needs
//       </h2>

//       {/* Cards */}
//       <div className="flex flex-wrap justify-center gap-6 mt-12">
//         {serviceCard.map((service) => (
//           <div
//             key={service.id}
//             className="w-full sm:w-[45%] lg:w-[30%] xl:w-[26%] p-6 bg-white rounded-xl shadow-md transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl cursor-pointer"
//           >
//             <div className="text-4xl text-slate-600">{service.icon}</div>

//             <h3 className="text-2xl font-semibold mt-4 text-gray-900">
//               {service.title}
//             </h3>

//             <p className="mt-4 text-slate-700 leading-7">
//               {service.desc}
//             </p>
//           </div>
//         ))}
//       </div>

//       {/* Button */}
//       <button className="bg-gradient-to-b from-blue-400 to-blue-700 mt-10 text-white px-8 py-3 rounded-lg text-lg hover:scale-105 transition-all duration-300 block mx-auto">
//         View Services
//       </button>
//     </section>
//   );
// };

// export default Service;

import React, { useEffect, useRef, useState } from "react";
import {
  FaNetworkWired,
  FaServer,
  FaLaptopCode,
  FaMobileAlt,
  FaCamera,
  FaBullhorn,
  FaArrowRight,
} from "react-icons/fa";

// Lightweight scroll-reveal hook — fires immediately for elements already
// in view on mount, plus a timed fallback, so content can never get stuck hidden.
const useReveal = (threshold = 0.15) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(node);
    const fallback = setTimeout(() => setInView(true), 1200);

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, [threshold]);

  return [ref, inView];
};

const serviceCard = [
  {
    id: 1,
    icon: <FaNetworkWired />,
    title: "Networking & Security",
    desc: "Deals with all major brand of network and security equipments Network equipments including perimeter routes wireless and switches etc.",
  },
  {
    id: 2,
    icon: <FaServer />,
    title: "Servers & Storage",
    desc: "Availability of all major OEM for servers & storage.",
  },
  {
    id: 3,
    icon: <FaLaptopCode />,
    title: "Software",
    desc: "Availability of all major software new purchases and license renewals.",
  },
  {
    id: 4,
    icon: <FaMobileAlt />,
    title: "App Development",
    desc: "Development of all types of applications from web to mobile application development.",
  },
  {
    id: 5,
    icon: <FaCamera />,
    title: "Photography Courses",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 6,
    icon: <FaBullhorn />,
    title: "PPC Advertising",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

const ServiceCard = ({ service, index }) => {
  const [ref, inView] = useReveal();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: inView ? `${index * 80}ms` : "0ms" }}
      className={`group relative w-full sm:w-[45%] lg:w-[30%] xl:w-[26%] p-7 bg-white rounded-2xl border border-slate-100 shadow-sm transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-slate-200 cursor-pointer ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* top accent bar */}
      <span className="absolute top-0 left-7 right-7 h-[3px] rounded-full bg-gradient-to-r from-orange-500 to-orange-300 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400"></span>

      <div className="w-14 h-14 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center text-2xl group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
        {service.icon}
      </div>

      <h3 className="text-xl font-semibold mt-5 text-slate-900">
        {service.title}
      </h3>

      <p className="mt-3 text-slate-500 text-[15px] leading-7">
        {service.desc}
      </p>

      <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-orange-500 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-300">
        Learn more <FaArrowRight className="text-xs" />
      </div>
    </div>
  );
};

const Service = () => {
  const [headRef, headIn] = useReveal();

  return (
    <section className="relative py-20 mt-10 px-4 sm:px-6 lg:px-10 bg-slate-50 overflow-hidden">
      {/* ambient background accents */}
      <div className="absolute top-10 left-0 w-72 h-72 bg-orange-100/60 blur-3xl rounded-full -z-0"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-100/50 blur-3xl rounded-full -z-0"></div>

      {/* Heading */}
      <div
        ref={headRef}
        className={`relative max-w-2xl mx-auto text-center transition-all duration-700 ease-out ${
          headIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex items-center justify-center gap-3 mb-3">
          <span className="w-8 h-[2px] bg-orange-500"></span>
          <p className="text-sm sm:text-base uppercase tracking-[4px] text-orange-500 font-semibold">
            Our Services
          </p>
          <span className="w-8 h-[2px] bg-orange-500"></span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-relaxed">
          We are 100% committed to making sure business owners have the most
          <br className="hidden lg:block" />
          reliable and professional IT services to cover all their IT needs
        </h2>
      </div>

      {/* Cards */}
      <div className="relative flex flex-wrap justify-center gap-6 mt-14">
        {serviceCard.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>

      {/* Button */}
      <button className="relative bg-orange-500 hover:bg-orange-600 mt-12 text-white px-8 py-3.5 rounded-lg text-lg font-medium shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-1 transition-all duration-300 block mx-auto">
        View Services
      </button>
    </section>
  );
};

export default Service;