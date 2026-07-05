// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// import bannerimg from "../../assets/images/s1.png";

// const slides = [
//   {
//     title: "Shape Your Future With Quality Education",
//     description:
//       "Join our institute and unlock endless opportunities with world-class education, experienced faculty, and career-focused programs.",
//     image: bannerimg,
//   },
//   {
//     title: "Admissions Open 2026",
//     description:
//       "Apply today and begin your journey toward success with industry-ready courses and modern learning facilities.",
//     image: bannerimg,
//   },
//   {
//     title: "Learn Today. Lead Tomorrow.",
//     description:
//       "Empowering students with knowledge, confidence, and skills to build a brighter future.",
//     image: bannerimg,
//   },
// ];

// const Home = () => {
//   return (
//     <section className="relative w-full overflow-hidden bg-gradient-to-br from-slate-950 via-blue-900 to-blue-700">

//       {/* Background Glow */}
//       <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 blur-[150px] rounded-full"></div>
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/20 blur-[150px] rounded-full"></div>

//       <Swiper
//         modules={[Navigation, Pagination, Autoplay]}
//         navigation
//         pagination={{
//           clickable: true,
//           dynamicBullets: true,
//         }}
//         autoplay={{
//           delay: 5000,
//           disableOnInteraction: false,
//         }}
//         speed={900}
//         loop={true}
//         className="heroSwiper"
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={index}>

//             <div className="relative max-w-7xl mx-auto min-h-[100vh] flex items-center px-5 sm:px-8 lg:px-10">

//               <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 w-full">

//                 {/* LEFT CONTENT */}

//                 <div className="text-center lg:text-left">

//                   <p className="inline-block bg-orange-500/15 text-orange-300 border border-orange-400/20 px-5 py-2 rounded-full uppercase tracking-[4px] text-xs font-semibold">
//                     Admissions Open
//                   </p>

//                   <h1 className="mt-7 text-white font-extrabold leading-tight text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
//                     {slide.title}
//                   </h1>

//                   <p className="mt-7 text-slate-200 text-base sm:text-lg leading-8 max-w-xl mx-auto lg:mx-0">
//                     {slide.description}
//                   </p>

//                   <div className="flex flex-wrap justify-center lg:justify-start gap-5 mt-10">

//                     <button className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-9 py-4 rounded-full font-semibold shadow-xl hover:scale-105 hover:shadow-orange-500/40 transition-all duration-300">
//                       Apply Now
//                     </button>

//                     <button className="border border-white/30 backdrop-blur-md bg-white/10 text-white px-9 py-4 rounded-full font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
//                       Explore Courses
//                     </button>

//                   </div>
//                                   </div>

//                 {/* RIGHT IMAGE */}

//                 <div className="hidden lg:flex justify-center relative">

//                   {/* Glow */}
//                   <div className="absolute w-[420px] h-[420px] bg-blue-500/20 rounded-full blur-[120px]"></div>

//                   {/* Main Image */}
//                   <img
//                     src={slide.image}
//                     alt="banner"
//                     className="relative z-10 w-full max-w-2xl object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.45)] hover:scale-105 transition-all duration-700"
//                   />

//                   {/* Floating Card 1 */}
//                   <div className="absolute top-10 -left-8 z-20 bg-white rounded-2xl shadow-2xl px-6 py-4 border border-slate-100 animate-bounce">
//                     <h4 className="text-blue-800 font-bold text-2xl">
//                       15K+
//                     </h4>
//                     <p className="text-slate-600 text-sm">
//                       Happy Students
//                     </p>
//                   </div>

//                   {/* Floating Card 2 */}
//                   <div className="absolute bottom-16 -right-10 z-20 bg-white rounded-2xl shadow-2xl px-6 py-4 border border-slate-100 animate-pulse">
//                     <h4 className="text-orange-500 font-bold text-2xl">
//                       100%
//                     </h4>
//                     <p className="text-slate-600 text-sm">
//                       Placement Support
//                     </p>
//                   </div>

//                 </div>

//               </div>

//             </div>

//           </SwiperSlide>
//         ))}

//       </Swiper>
//             <style>{`
//         .heroSwiper,
//         .heroSwiper .swiper-wrapper,
//         .heroSwiper .swiper-slide {
//           min-height: 100vh;
//         }

//         /* Navigation Buttons */
//         .heroSwiper .swiper-button-next,
//         .heroSwiper .swiper-button-prev {
//           width: 55px;
//           height: 55px;
//           color: #fff;
//         }

//         .heroSwiper .swiper-button-next:hover,
//         .heroSwiper .swiper-button-prev:hover {
//           transform: scale(1.08);
//         // }

//         .heroSwiper .swiper-button-next::after,
//         .heroSwiper .swiper-button-prev::after {
//           font-size: 18px;
//           font-weight: bold;
//         }

//         /* Pagination */

//         .heroSwiper .swiper-pagination {
//           bottom: 35px;
//         }

//         .heroSwiper .swiper-pagination-bullet {
//           width: 12px;
//           height: 12px;
//           background: rgba(255,255,255,.5);
//           opacity: 1;
//           transition: .35s;
//         }

//         .heroSwiper .swiper-pagination-bullet-active {
//           width: 34px;
//           border-radius: 20px;
//           background: #fb923c;
//         }

//         @media (max-width:1024px){

//           .heroSwiper,
//           .heroSwiper .swiper-wrapper,
//           .heroSwiper .swiper-slide{
//             min-height:auto;
//           }

//           .heroSwiper .swiper-slide{
//             padding:120px 0 80px;
//           }

//         }

//         @media (max-width:768px){

//           .heroSwiper .swiper-button-next,
//           .heroSwiper .swiper-button-prev{
//             display:none;
//           }

//           .heroSwiper .swiper-slide{
//             padding:100px 0 70px;
//           }

//         }
//       `}</style>

//     </section>
//   );
// };

// export default Home;

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import bannerimg from "../../assets/images/s1.png";

const slides = [
  {
    title: "Shape Your Future With Quality Education",
    description:
      "Join our institute and unlock endless opportunities with world-class education, experienced faculty, and career-focused programs.",
    image: bannerimg,
  },
  {
    title: "Admissions Open 2026",
    description:
      "Apply today and begin your journey toward success with industry-ready courses and modern learning facilities.",
    image: bannerimg,
  },
  {
    title: "Learn Today. Lead Tomorrow.",
    description:
      "Empowering students with knowledge, confidence, and skills to build a brighter future.",
    image: bannerimg,
  },
];

// splits a title so the last word can be styled as an accent — copy is untouched, only rendering is split
const splitTitle = (title) => {
  const words = title.trim().split(" ");
  const last = words.pop();
  return { rest: words.join(" "), last };
};

const AUTOPLAY_DELAY = 5000;

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-slate-950 via-blue-900 to-blue-700">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 blur-[150px] rounded-full animate-blob-slow"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/20 blur-[150px] rounded-full animate-blob-slow" style={{ animationDelay: "3s" }}></div>

      {/* Fine grid texture for depth */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-grid-pattern"></div>

      {/* Autoplay progress bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-white/10 z-30">
        <div
          key={activeIndex}
          className="h-full bg-gradient-to-r from-orange-400 to-orange-500 progress-fill"
        ></div>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{
          delay: AUTOPLAY_DELAY,
          disableOnInteraction: false,
        }}
        speed={900}
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="heroSwiper"
      >
        {slides.map((slide, index) => {
          const { rest, last } = splitTitle(slide.title);
          return (
            <SwiperSlide key={index}>

              {/* <div className="relative max-w-7xl mx-auto min-h-[100vh] flex items-center px-5 sm:px-8 lg:px-10"> */}
              <div className="relative max-w-7xl mx-auto min-h-[100vh] flex items-center px-5 sm:px-8 lg:px-10 pt-25 pb-16 lg:pt-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 w-full">

                  {/* LEFT CONTENT */}

                  <div className="text-center lg:text-left">

                    <p className="slide-badge inline-flex items-center gap-2 bg-orange-500/15 text-orange-300 border border-orange-400/20 px-5 py-2 rounded-full uppercase tracking-[4px] text-xs font-semibold">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-400"></span>
                      </span>
                      Admissions Open
                    </p>

                    <h1 className="slide-title mt-7 text-white font-bold leading-tight text-5xl sm:text-5xl lg:text-6xl xl:text-7xl">
                      {rest ? `${rest} ` : ""}
                      <span className="bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent">
                        {last}
                      </span>
                    </h1>

                    <p className="slide-desc mt-7 text-slate-200 text-base sm:text-lg leading-8 max-w-xl mx-auto lg:mx-0">
                      {slide.description}
                    </p>

                    <div className="slide-actions flex flex-wrap justify-center lg:justify-start gap-5 mt-10">

                      <button className="group relative overflow-hidden bg-gradient-to-r from-orange-500 to-orange-400 text-white px-9 py-4 rounded-full font-semibold shadow-xl hover:scale-105 hover:shadow-orange-500/40 transition-all duration-300">
                        <span className="relative z-10">Apply Now</span>
                        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent"></span>
                      </button>

                      <button className="border border-white/30 backdrop-blur-md bg-white/10 text-white px-9 py-4 rounded-full font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
                        Explore Courses
                      </button>

                    </div>
                  </div>

                  {/* RIGHT IMAGE */}

                  <div className="hidden lg:flex justify-center relative">

                    {/* Glow */}
                    <div className="absolute w-[105] h-[105] bg-blue-500/20 rounded-full blur-[120px]"></div>

                    {/* Decorative rotating ring */}
                    <div className="absolute w-[95] h-[95] border border-dashed border-orange-400/25 rounded-full animate-spin-slow"></div>

                    {/* Main Image */}
                    <img
                      src={slide.image}
                      alt="banner"
                      className="slide-image relative z-10 w-full max-w-2xl object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.45)] hover:scale-105 transition-all duration-700"
                    />

                    {/* Floating Card 1 */}
                    <div className="floating-card floating-card-1 absolute top-10 -left-8 z-20 bg-white/95 backdrop-blur rounded-2xl shadow-2xl px-6 py-4 border border-white/50">
                      <h4 className="text-blue-800 font-bold text-2xl">
                        15K+
                      </h4>
                      <p className="text-slate-600 text-sm">
                        Happy Students
                      </p>
                    </div>

                    {/* Floating Card 2 */}
                    <div className="floating-card floating-card-2 absolute bottom-16 -right-10 z-20 bg-white/95 backdrop-blur rounded-2xl shadow-2xl px-6 py-4 border border-white/50">
                      <h4 className="text-orange-500 font-bold text-2xl">
                        100%
                      </h4>
                      <p className="text-slate-600 text-sm">
                        Placement Support
                      </p>
                    </div>

                  </div>

                </div>

              </div>

            </SwiperSlide>
          );
        })}

      </Swiper>

      <style>{`
        .heroSwiper,
        .heroSwiper .swiper-wrapper,
        .heroSwiper .swiper-slide {
          min-height: 100vh;
        }

        /* Grid texture */
        .bg-grid-pattern {
          background-image:
            linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px);
          background-size: 48px 48px;
        }

        /* Background blobs drifting slowly for ambient motion */
        @keyframes blobDrift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(24px, -18px) scale(1.08); }
          66% { transform: translate(-16px, 14px) scale(0.96); }
        }
        .animate-blob-slow {
          animation: blobDrift 14s ease-in-out infinite;
        }

        /* Progress bar synced to autoplay delay */
        @keyframes progressFill {
          from { width: 0%; }
          to { width: 100%; }
        }
        .progress-fill {
          animation: progressFill ${AUTOPLAY_DELAY}ms linear forwards;
        }

        /* Slow decorative ring rotation */
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spinSlow 22s linear infinite;
        }

        /* Staggered entrance animation for active slide content */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .slide-badge, .slide-title, .slide-desc, .slide-actions, .slide-image, .floating-card {
          opacity: 0;
        }
        .swiper-slide-active .slide-badge   { animation: fadeUp .7s ease forwards; animation-delay: .05s; }
        .swiper-slide-active .slide-title   { animation: fadeUp .7s ease forwards; animation-delay: .18s; }
        .swiper-slide-active .slide-desc    { animation: fadeUp .7s ease forwards; animation-delay: .32s; }
        .swiper-slide-active .slide-actions { animation: fadeUp .7s ease forwards; animation-delay: .46s; }
        .swiper-slide-active .slide-image   { animation: fadeUp .9s ease forwards; animation-delay: .2s; }
        .swiper-slide-active .floating-card-1{ animation: fadeUp .7s ease forwards; animation-delay: .55s; }
        .swiper-slide-active .floating-card-2{ animation: fadeUp .7s ease forwards; animation-delay: .68s; }

        /* Gentle continuous float once cards have entered */
        @keyframes floatCard1 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes floatCard2 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }
        .swiper-slide-active .floating-card-1 {
          animation: fadeUp .7s ease forwards .55s, floatCard1 4.5s ease-in-out infinite 1.2s;
        }
        .swiper-slide-active .floating-card-2 {
          animation: fadeUp .7s ease forwards .68s, floatCard2 5s ease-in-out infinite 1.4s;
        }

        /* Navigation Buttons */
        .heroSwiper .swiper-button-next,
        .heroSwiper .swiper-button-prev {
          width: 52px;
          height: 52px;
          color: #ffff;
          border-radius: 9999px;
          transition: all .3s ease;
        }

        .heroSwiper .swiper-button-next:hover,
        .heroSwiper .swiper-button-prev:hover {
          transform: scale(1.08);
        }

        .heroSwiper .swiper-button-next::after,
        .heroSwiper .swiper-button-prev::after {
          font-size: 16px;
          font-weight: bold;
        }

        /* Pagination */

        .heroSwiper .swiper-pagination {
          bottom: 35px;
        }

        .heroSwiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: rgba(255,255,255,.5);
          opacity: 1;
          transition: .35s;
        }

        .heroSwiper .swiper-pagination-bullet-active {
          width: 34px;
          border-radius: 20px;
          background: #fb923c;
        }

        @media (max-width:1024px){

          .heroSwiper,
          .heroSwiper .swiper-wrapper,
          .heroSwiper .swiper-slide{
            min-height:auto;
          }

          .heroSwiper .swiper-slide{
            padding:120px 0 80px;
          }

        }

        @media (max-width:768px){

          .heroSwiper .swiper-button-next,
          .heroSwiper .swiper-button-prev{
            display:none;
          }

          .heroSwiper .swiper-slide{
            padding:100px 0 70px;
          }

        }

        @media (prefers-reduced-motion: reduce) {
          .animate-blob-slow, .animate-spin-slow,
          .slide-badge, .slide-title, .slide-desc, .slide-actions, .slide-image, .floating-card,
          .progress-fill {
            animation: none !important;
            opacity: 1 !important;
          }
        }
      `}</style>

    </section>
  );
};

export default Home;