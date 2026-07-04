

// import React from "react";
// import img2 from "../../assets/images/seo-1.png";
// import rocket from "../../assets/images/rocket-1.png";
// import { FaCheckCircle } from "react-icons/fa";

// const features = [
//   "Industry-focused curriculum with practical learning.",
//   "Expert mentors and placement assistance.",
//   "Modern infrastructure and real-world projects.",
// ];

// const OurVision = () => {
//   return (
//     <section className="py-24 lg:py-32 px-5 sm:px-8 lg:px-10 bg-white">
//       <div className="max-w-[7xl] mx-auto">

//         {/* TOP SECTION */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-20">

//           {/* IMAGE */}
//           <div className="flex justify-center">
//             <img
//               src={img2}
//               alt="vision"
//               className="w-full max-w-lg object-contain hover:scale-105 transition duration-500"
//             />
//           </div>

//           {/* CONTENT */}
//           <div>

//             {/* Heading tag */}
//             <div className="flex items-center gap-3 mb-4">
//               <span className="w-12 h-[2px] bg-orange-500"></span>
//               <p className="uppercase tracking-[4px] text-orange-500 font-semibold">
//                 Our Vision
//               </p>
//             </div>

//             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.2] text-slate-900 mb-6">
//               ABC Company - Revolutionizing Digital Education
//             </h2>

//             <p className="text-slate-600 leading-8 mb-5">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit.
//               Ipsa alias quo veniam neque quia magnam maiores cupiditate iure ex doloremque.
//             </p>

//             <p className="text-slate-600 leading-8 mb-8">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit.
//               Placeat voluptatem explicabo veritatis enim eos tempore sunt
//               exercitationem soluta quaerat doloremque maxime porro laudantium.
//             </p>

//             {/* FEATURES */}
//             <ul className="space-y-5">
//               {features.map((item, index) => (
//                 <li key={index} className="flex gap-3">
//                   <FaCheckCircle className="text-green-500 mt-1 shrink-0" />
//                   <span className="text-slate-600">{item}</span>
//                 </li>
//               ))}
//             </ul>

//             {/* BUTTON */}
//             <button className="mt-8 inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-7 py-3 rounded-lg font-medium shadow-lg transition-all duration-300 hover:-translate-y-1">
//               Learn More
//             </button>
//           </div>
//         </div>

//         {/* CTA SECTION */}
//         <div className="mt-24 relative overflow-hidden rounded-3xl">

//           {/* Background glow */}
//           <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 blur-3xl rounded-full"></div>
//           <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-400/20 blur-3xl rounded-full"></div>

//           <div className="bg-gradient-to-r from-red-600 via-red-500 to-orange-500 px-8 sm:px-12 py-14 grid grid-cols-1 lg:grid-cols-2 items-center gap-10">

//             {/* TEXT */}
//             <div>
//               <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
//                 8 Lakhs Job Opportunities in 2026
//               </h2>

//               <p className="text-white/90 mt-5 text-lg leading-8 max-w-xl">
//                 Take the next step towards your personal and professional goals.
//                 Build your future with industry-ready education and skills.
//               </p>

//               <button className="mt-8 bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:scale-105 transition">
//                 Apply Now
//               </button>
//             </div>

//             {/* ROCKET IMAGE */}
//             <div className="flex justify-center lg:justify-end">
//               <img
//                 src={rocket}
//                 alt="rocket"
//                 className="w-56 lg:w-72 hover:scale-110 transition duration-500"
//               />
//             </div>

//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default OurVision;

import React, { useEffect, useRef, useState } from "react";
import img2 from "../../assets/images/seo-1.png";
import rocket from "../../assets/images/rocket-1.png";
import { FaCheckCircle } from "react-icons/fa";

const features = [
  "Industry-focused curriculum with practical learning.",
  "Expert mentors and placement assistance.",
  "Modern infrastructure and real-world projects.",
];

// Lightweight scroll-reveal hook — no external animation library needed.
// IntersectionObserver fires immediately for elements already in view on mount,
// so content is never stuck hidden.
const useReveal = (threshold = 0.2) => {
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

    // Safety fallback in case IntersectionObserver is unavailable or never fires
    const fallback = setTimeout(() => setInView(true), 1200);

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, [threshold]);

  return [ref, inView];
};

const OurVision = () => {
  const [imgRef, imgIn] = useReveal();
  const [textRef, textIn] = useReveal();
  const [ctaRef, ctaIn] = useReveal(0.15);

  return (
    <section className="py-24 lg:py-32 px-5 sm:px-8 lg:px-10 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-20">

          {/* IMAGE */}
          <div
            ref={imgRef}
            className={`flex justify-center relative transition-all duration-700 ease-out ${
              imgIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Decorative backdrop */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-orange-100 rounded-full blur-3xl -z-10"></div>
            <div className="absolute w-40 h-40 border border-dashed border-orange-300 rounded-full -top-4 -right-2 -z-10"></div>
            <div className="absolute w-3 h-3 bg-orange-400 rounded-full top-8 left-4 animate-pulse"></div>

            <img
              src={img2}
              alt="vision"
              className="w-full max-w-lg object-contain hover:scale-105 transition duration-500 drop-shadow-[0_20px_45px_rgba(15,23,42,0.12)]"
            />
          </div>

          {/* CONTENT */}
          <div
            ref={textRef}
            className={`transition-all duration-700 ease-out delay-100 ${
              textIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >

            {/* Heading tag */}
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-[2px] bg-orange-500"></span>
              <p className="uppercase tracking-[4px] text-orange-500 font-semibold text-sm">
                Our Vision
              </p>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.2] text-slate-900 mb-6">
              ABC Company - Revolutionizing{" "}
              <span className="relative inline-block">
                Digital Education
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  height="10"
                  viewBox="0 0 200 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,7 Q50,0 100,6 T200,5"
                    fill="none"
                    stroke="#fb923c"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>

            <p className="text-slate-600 leading-8 mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ipsa alias quo veniam neque quia magnam maiores cupiditate iure ex doloremque.
            </p>

            <p className="text-slate-600 leading-8 mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Placeat voluptatem explicabo veritatis enim eos tempore sunt
              exercitationem soluta quaerat doloremque maxime porro laudantium.
            </p>

            {/* FEATURES */}
            <ul className="space-y-4">
              {features.map((item, index) => (
                <li
                  key={index}
                  className="flex gap-3.5 items-start group"
                >
                  <span className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full bg-green-50 flex items-center justify-center group-hover:bg-green-100 transition-colors">
                    <FaCheckCircle className="text-green-500 text-sm" />
                  </span>
                  <span className="text-slate-600">{item}</span>
                </li>
              ))}
            </ul>

            {/* BUTTON */}
            <button className="mt-8 inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-7 py-3 rounded-lg font-medium shadow-lg shadow-orange-500/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-orange-500/40">
              Learn More
            </button>
          </div>
        </div>

        {/* CTA SECTION */}
        <div
          ref={ctaRef}
          className={`mt-24 relative overflow-hidden rounded-3xl transition-all duration-700 ease-out ${
            ctaIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >

          {/* Background glow */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 blur-3xl rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-400/20 blur-3xl rounded-full"></div>

          {/* Giant faded year mark for depth */}
          <span className="hidden md:block absolute -bottom-10 right-10 text-white/10 font-extrabold text-[10rem] leading-none select-none pointer-events-none">
            2026
          </span>

          {/* Subtle diagonal pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 1px, transparent 14px)",
            }}
          ></div>

          <div className="relative bg-gradient-to-r from-red-600 via-red-500 to-orange-500 px-8 sm:px-12 py-14 grid grid-cols-1 lg:grid-cols-2 items-center gap-10">

            {/* TEXT */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                8 Lakhs Job Opportunities in 2026
              </h2>

              <p className="text-white/90 mt-5 text-lg leading-8 max-w-xl">
                Take the next step towards your personal and professional goals.
                Build your future with industry-ready education and skills.
              </p>

              <button className="mt-8 relative bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-xl">
                <span className="absolute inset-0 rounded-lg bg-white animate-ping-slow opacity-40"></span>
                <span className="relative">Apply Now</span>
              </button>
            </div>

            {/* ROCKET IMAGE */}
            <div className="hidden lg:flex lg:justify-end">
              <img
                src={rocket}
                alt="rocket"
                className="w-56 lg:w-72 hover:scale-110 transition duration-500 animate-float"
              />
            </div>

          </div>
        </div>

      </div>

      <style>{`
        @keyframes floatY {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-14px); }
        }
        .animate-float {
          animation: floatY 4s ease-in-out infinite;
        }

        @keyframes pingSlow {
          0% { transform: scale(1); opacity: 0.4; }
          80%, 100% { transform: scale(1.6); opacity: 0; }
        }
        .animate-ping-slow {
          animation: pingSlow 2.2s cubic-bezier(0,0,0.2,1) infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-float, .animate-ping-slow {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default OurVision;