import React from "react";
import {
  FaNetworkWired,
  FaServer,
  FaLaptopCode,
  FaMobileAlt,
  FaCamera,
  FaBullhorn,
  FaArrowRight,
} from "react-icons/fa";
import Course from "../Courses/course";
import Internship from "../Internship/internship";
import OurClient from "../OurClient/client";

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

const ServiceCard = ({ service }) => {
  return (
    <div className="group relative w-full sm:w-[45%] lg:w-[30%] xl:w-[26%] p-7 bg-white rounded-2xl border-2 border-slate-300 shadow-lg shadow-slate-300/50 transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-orange-400 hover:shadow-2xl hover:shadow-orange-200/60 cursor-pointer">
      <span className="absolute top-0 left-7 right-7 h-[0.75] rounded-full bg-linear-to-r from-orange-500 to-orange-300 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400"></span>

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
  return (
    <section className="relative py-20 mt-10 px-4 sm:px-6 lg:px-10 bg-linear-to-b from-slate-100 to-slate-50 overflow-hidden">
      <div className="absolute top-10 left-0 w-72 h-72 bg-orange-100/60 blur-3xl rounded-full z-0"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-100/50 blur-3xl rounded-full z-0"></div>

      <div className="relative max-w-2xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-3">
          <span className="w-8 h-[0.5] bg-orange-500"></span>
          <p className="text-sm sm:text-base uppercase tracking-[4px] text-orange-500 font-semibold">
            Our Services 
          </p>
          <span className="w-8 h-[0.5] bg-orange-500"></span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-relaxed">
          We are 100% committed to making sure business owners have the most
          <br className="hidden lg:block" />
          reliable and professional IT services to cover all their IT needs
        </h2>
      </div>

      <div className="relative flex flex-wrap justify-center gap-6 mt-14">
        {serviceCard.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      <button className="relative bg-orange-500 hover:bg-orange-600 mt-12 text-white px-8 py-3.5 rounded-lg text-lg font-medium shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-1 transition-all duration-300 block mx-auto">
        View Services
      </button>
      <Course />
      <Internship />
      <OurClient />
    </section>
  );
};

export default Service;