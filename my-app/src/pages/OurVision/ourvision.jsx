// import React from "react";
// import img2 from "../../assets/images/seo-1.png";
// import rocket from "../../assets/images/rocket-1.png";
// import { FaCheckCircle } from "react-icons/fa";

// const OurVision = () => {
//   return (
//     <div className="mt-20 px-10">
//     <div className="flex w-full">
//         {/* first div */}
//       <div className="w-[35%]">
//         <img src={img2} alt="image2" className="w-[70%]" />
//       </div>
//       {/* second div */}
//       <div className="w-[65%] flex flex-col gap-4"> 
//         <h1 className="text-2xl text-slate-500 font-mono">
//           what is our vision <span className="text-red-700">______</span>{" "}
//         </h1>
//         <h2 className="text-3xl">ABC Company - Revolututionizing Digital</h2>
//         <p className="text-lg">
//           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa alias
//           quo veniam neque quia magnam maiores cupiditate iure ex
//           doloremque{" "}
//         </p>
//         <p className="text-lg">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
//           voluptatem explicabo veritatis enim eos tempore sunt exercitationem
//           soluta quaerat doloremque maxime porro laudantium, facere animi minima
//           accusamus quasi illo in.
//         </p>

//         <ul className="flex flex-col gap-3">
//           <li className="flex items-center gap-3">
//             {" "}
//             <FaCheckCircle className="text-green-500" />
//             <span>Lorem ipsum dolor sit amet consectetur adipisicing elit</span>
//           </li>
//           <li className="flex items-center gap-3">
//             <FaCheckCircle className="text-green-500" />
//             <span>Lorem ipsum dolor sit amet consectetur adipisicing elit</span>
//           </li>
//           <li className="flex items-center gap-3">
//             <FaCheckCircle className="text-green-500" />
//             <span>Lorem ipsum dolor sit amet consectetur adipisicing elit</span>
//           </li>
//         </ul>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>

//       </div>
//       </div>
//       {/* red container div */}
//        <div className="flex justify-center mt-10">
//         <div className="bg-red-500 w-[80%] flex justify-between items-center px-10 py-5 rounded-lg">
//         <div className="w-2/3">
//           <h2 className="text-white text-3xl font-bold"> 8 lakhs job opportunity in 2021 </h2>

//           <p className="text-white mt-4"> Take the next step towards your personal <br /> and professional goals with ABC Company </p>
//         </div>

//         <div className="w-1/2 flex justify-end">
//           <img src={rocket} alt="rocket img" className="w-60 h-auto" />
//         </div>
//       </div> 
//     </div>
//     </div>
//   );
// };

// export default OurVision;

import React from "react";
import img2 from "../../assets/images/seo-1.png";
import rocket from "../../assets/images/rocket-1.png";
import { FaCheckCircle } from "react-icons/fa";

const OurVision = () => {
  return (
    <section className="py-20 px-5 sm:px-8 lg:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Image */}
          <div className="flex justify-center">
            <img
              src={img2}
              alt="vision"
              className="w-full max-w-md lg:max-w-lg object-contain"
            />
          </div>

          {/* Right Content */}
          <div>

            <p className="uppercase tracking-[3px] text-orange-500 font-semibold mb-3">
              Our Vision
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold  leading-tight mb-6">
              ABC Company - Revolutionizing Digital Education
            </h2>

            <p className="text-gray-300 leading-8 mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ipsa alias quo veniam neque quia magnam maiores cupiditate
              iure ex doloremque.
            </p>

            <p className="text-gray-300 leading-8 mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Placeat voluptatem explicabo veritatis enim eos tempore sunt
              exercitationem soluta quaerat doloremque maxime porro
              laudantium.
            </p>

            <ul className="space-y-4">

              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-green-500 text-xl mt-1" />
                <span className="text-gray-200">
                  Industry-focused curriculum with practical learning.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-green-500 text-xl mt-1" />
                <span className="text-gray-200">
                  Expert mentors and placement assistance.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-green-500 text-xl mt-1" />
                <span className="text-gray-200">
                  Modern infrastructure and real-world projects.
                </span>
              </li>

            </ul>

            <button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full transition duration-300 hover:scale-105 shadow-lg">
              Learn More
            </button>

          </div>

        </div>

        {/* Bottom CTA */}
        <div className="mt-20">

          <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl overflow-hidden">

            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 px-8 sm:px-10 py-10">

              {/* Text */}
              <div>

                <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                  8 Lakhs Job Opportunities in 2026
                </h2>

                <p className="text-white/90 mt-5 text-lg leading-8">
                  Take the next step towards your personal and
                  professional goals with ABC Company. Build your
                  future with industry-ready education.
                </p>

                <button className="mt-8 bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:scale-105 transition">
                  Apply Now
                </button>

              </div>

              {/* Rocket */}
              <div className="flex justify-end lg:justify-end">

                <img
                  src={rocket}
                  alt="rocket"
                  className="w-52 sm:w-64 lg:w-72 object-contain"
                />

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default OurVision;