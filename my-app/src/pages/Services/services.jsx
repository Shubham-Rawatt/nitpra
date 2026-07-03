// import React from 'react'
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
//   { id: 1, icon: <FaNetworkWired /> , title: "Networking & Security", desc: "Deals with all major brand of network and security equipments Network equipments including perimeter routes wireless and switches etc" },
//   { id: 2, icon:  <FaServer />, title: "Servers & Storage", desc: "Availablity of all major OEM for servers & storage" },
//   { id: 3, icon: <FaLaptopCode />, title: "Software", desc: "Availablity of all major software new purchases and license renewals" },
//   { id: 4, icon: <FaMobileAlt />, title: "App Development", desc: "Development of all type of applications from web to mobile application development" },
//   { id: 5, icon: <FaCamera />, title: "Photography Courses ", desc: "lorem lipsum dolor sit amet consectetur adipiisicing elit " },
//   { id: 6, icon:  <FaBullhorn />, title: "PPC Advertising", desc: "lorem lipsum dolor sit amet consectetur adipiisicing elit " },
//   ]

//   return (
//     <div className='py-10 mt-10'>
//         <p className='text-center text-4xl  text-slate-500 font-sa'>Our Services</p>
//         <h2 className='text-center w-full text-3xl mt-5'>We are 100% commited to making sure business owners have the most <br />
//         relible and professional IT services to cover all their IT needs</h2>

//         <div className='flex flex-wrap justify-center gap-6 mt-15'>
//           {serviceCard.map((service)=>(
//             <div key={service.id} className='p-6 w-[26%] bg-white rounded-xl shadow-md transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer'>
//               <div className='text-4xl text-slate-600'>{service.icon}</div>
//               <h3 className='text-2xl font-semibold mt-4 text-gray-900'>{service.title}</h3>
//               <p className='mt-4 text-slate-900 font-sarif font-semibold'>{service.desc}</p>
//             </div>
//           ))} 
//         </div>
//           <button className='bg-linear-to-b from-blue-400 to-blue-700 mt-5 text-white px-6 py-2 rounded-lg text-md hover:scale-105 transition-all duration-300 cursor-pointer items-center block mx-auto text-xl'> View Services</button>
          
//     </div>  

//   )
// }

// export default Service

import React from "react";
import {
  FaNetworkWired,
  FaServer,
  FaLaptopCode,
  FaMobileAlt,
  FaCamera,
  FaBullhorn,
} from "react-icons/fa";

const Service = () => {
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

  return (
    <section className="py-10 mt-10 px-4 sm:px-6 lg:px-10">
      {/* Heading */}
      <p className="text-center text-3xl sm:text-4xl text-slate-500 font-semibold">
        Our Services
      </p>

      <h2 className="text-center text-xl sm:text-2xl lg:text-3xl mt-5 leading-relaxed">
        We are 100% committed to making sure business owners have the most
        <br className="hidden lg:block" />
        reliable and professional IT services to cover all their IT needs
      </h2>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-6 mt-12">
        {serviceCard.map((service) => (
          <div
            key={service.id}
            className="w-full sm:w-[45%] lg:w-[30%] xl:w-[26%] p-6 bg-white rounded-xl shadow-md transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl cursor-pointer"
          >
            <div className="text-4xl text-slate-600">{service.icon}</div>

            <h3 className="text-2xl font-semibold mt-4 text-gray-900">
              {service.title}
            </h3>

            <p className="mt-4 text-slate-700 leading-7">
              {service.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Button */}
      <button className="bg-gradient-to-b from-blue-400 to-blue-700 mt-10 text-white px-8 py-3 rounded-lg text-lg hover:scale-105 transition-all duration-300 block mx-auto">
        View Services
      </button>
    </section>
  );
};

export default Service;