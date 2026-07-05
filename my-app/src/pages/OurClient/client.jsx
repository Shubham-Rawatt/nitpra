
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/autoplay";

// import client1 from "../../assets/images/client.jpg";
// import rightimg from "../../assets/images/counter.png";

// import { FaBullhorn } from "react-icons/fa";

// const OurClient = () => {
//   const testimonials = [
//     {
//       id: 1,
//       img: client1,
//       name: "Client 1",
//       review:
//         "The team delivered exactly what we needed. The website performance improved drastically and the support was always quick.",
//     },
//     {
//       id: 2,
//       img: client1,
//       name: "Client 2",
//       review:
//         "The team delivered exactly what we needed. The website performance improved drastically and the support was always quick and helpful.",
//     },
//     {
//       id: 3,
//       img: client1,
//       name: "Client 3",
//       review:
//         "The team delivered exactly what we needed. The website performance improved drastically and the support was always quick.",
//     },
//     {
//       id: 4,
//       img: client1,
//       name: "Client 4",
//       review:
//         "The team delivered exactly what we needed. The website performance improved drastically and the support was always quick and helpful.",
//     },
//     {
//       id: 5,
//       img: client1,
//       name: "Client 5",
//       review:
//         "The team delivered exactly what we needed. The website performance improved drastically and the support was always quick and helpful.",
//     },
//     {
//       id: 6,
//       img: client1,
//       name: "Client 6",
//       review:
//         "The team delivered exactly what we needed. The website performance improved drastically and the support was always quick and helpful.",
//     },
//     {
//       id: 7,
//       img: client1,
//       name: "Client 7",
//       review:
//         "The team delivered exactly what we needed. The website performance improved drastically and the support was always quick and helpful.",
//     },
//   ];

//   return (
//     <section className="py-16 mt-10">
//       {/* Heading */}

//       <div className="text-center mb-10 px-5">
//         <p className="text-orange-500 uppercase tracking-[3px] font-semibold">
//           Testimonials
//         </p>

//         <h2 className="text-3xl md:text-4xl font-bold mt-2">
//           What Our Clients Say
//         </h2>
//       </div>

//       {/* Swiper */}

//       <Swiper
//         modules={[Autoplay]}
//         loop={true}
//         speed={800}
//         spaceBetween={25}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         breakpoints={{
//           0: {
//             slidesPerView: 1,
//           },

//           640: {
//             slidesPerView: 2,
//           },

//           1024: {
//             slidesPerView: 3,
//           },
//         }}
//         className="w-[92%] lg:w-[80%]"
//       >
//         {testimonials.map((item) => (
//           <SwiperSlide key={item.id} className="pb-5">
//             <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 min-h-[320px] flex flex-col items-center text-center">
//               <img
//                 src={item.img}
//                 alt={item.name}
//                 className="w-20 h-20 rounded-full object-cover border-4 border-blue-100"
//               />

//               <h3 className="mt-5 text-xl font-bold text-gray-700">{item.name}</h3>

//               <p className="mt-5 text-gray-600 leading-7">{item.review}</p>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Second Section Starts Here */}
//       {/* Second Section */}
//       <div className="max-w-7xl mx-auto mt-20 px-5 sm:px-8 lg:px-10">
//         <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
//           {/* Left Content */}
//           <div className="w-full lg:w-[60%]">
//             <p className="text-orange-500 font-semibold uppercase tracking-[3px]">
//               Why Choose Us
//             </p>

//             <h2 className="text-3xl sm:text-4xl font-bold mt-3 leading-tight">
//               Build Your Career With The Best Learning Experience
//             </h2>

//             <p className="mt-6 text-gray-600 leading-8">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
//               quidem enim reprehenderit. Eius mollitia id facere aperiam dolore
//               odit modi assumenda corrupti sit. Necessitatibus eos suscipit
//               fugiat ipsam architecto sint.
//             </p>

//             {/* Stats */}


//  <div className="grid grid-cols-2 gap-5 mt-10">

//   <div className="flex items-center gap-4 bg-white rounded-xl shadow-md px-5 py-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
//     <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
//       <FaBullhorn className="text-blue-700 text-xl" />
//     </div>

//     <div>
//       <h3 className="text-2xl font-bold text-blue-800">330+</h3>
//       <p className="text-gray-600 text-sm">Professional Courses</p>
//     </div>
//   </div>

//   <div className="flex items-center gap-4 bg-white rounded-xl shadow-md px-5 py-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
//     <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
//       <FaBullhorn className="text-blue-700 text-xl" />
//     </div>

//     <div>
//       <h3 className="text-2xl font-bold text-blue-800">15+</h3>
//       <p className="text-gray-600 text-sm">Team Advisors</p>
//     </div>
//   </div>

//   <div className="flex items-center gap-4 bg-white rounded-xl shadow-md px-5 py-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
//     <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
//       <FaBullhorn className="text-blue-700 text-xl" />
//     </div>

//     <div>
//       <h3 className="text-2xl font-bold text-blue-800">35+</h3>
//       <p className="text-gray-600 text-sm">Educators</p>
//     </div>
//   </div>

//   <div className="flex items-center gap-4 bg-white rounded-xl shadow-md px-5 py-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
//     <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
//       <FaBullhorn className="text-blue-700 text-xl" />
//     </div>

//     <div>
//       <h3 className="text-2xl font-bold text-blue-800">15+</h3>
//       <p className="text-gray-600 text-sm">Glorious Years</p>
//     </div>
//   </div>

// </div> 

//           </div>

//           {/* Right Image */}

//           <div className="w-full lg:w-[35%] flex justify-center">
//             <img
//               src={rightimg}
//               alt="Counter"
//               className="w-[80%] sm:w-[70%] lg:w-full object-contain"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurClient;

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

import client1 from "../../assets/images/client.jpg";
import rightimg from "../../assets/images/counter.png";

import { FaBullhorn, FaQuoteLeft, FaStar } from "react-icons/fa";

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

const testimonials = [
  {
    id: 1,
    img: client1,
    name: "Client 1",
    review:
      "The team delivered exactly what we needed. The website performance improved drastically and the support was always quick.",
  },
  {
    id: 2,
    img: client1,
    name: "Client 2",
    review:
      "The team delivered exactly what we needed. The website performance improved drastically and the support was always quick and helpful.",
  },
  {
    id: 3,
    img: client1,
    name: "Client 3",
    review:
      "The team delivered exactly what we needed. The website performance improved drastically and the support was always quick.",
  },
  {
    id: 4,
    img: client1,
    name: "Client 4",
    review:
      "The team delivered exactly what we needed. The website performance improved drastically and the support was always quick and helpful.",
  },
  {
    id: 5,
    img: client1,
    name: "Client 5",
    review:
      "The team delivered exactly what we needed. The website performance improved drastically and the support was always quick and helpful.",
  },
  {
    id: 6,
    img: client1,
    name: "Client 6",
    review:
      "The team delivered exactly what we needed. The website performance improved drastically and the support was always quick and helpful.",
  },
  {
    id: 7,
    img: client1,
    name: "Client 7",
    review:
      "The team delivered exactly what we needed. The website performance improved drastically and the support was always quick and helpful.",
  },
];

const stats = [
  { id: 1, num: "330+", label: "Professional Courses" },
  { id: 2, num: "15+", label: "Team Advisors" },
  { id: 3, num: "35+", label: "Educators" },
  { id: 4, num: "15+", label: "Glorious Years" },
];

const OurClient = () => {
  const [headRef, headIn] = useReveal();
  const [leftRef, leftIn] = useReveal();
  const [imgRef, imgIn] = useReveal();

  return (
    <section className="py-16 mt-10 relative overflow-hidden">
      {/* ambient accents */}
      <div className="absolute -top-10 right-0 w-72 h-72 bg-orange-100/50 blur-3xl rounded-full -z-0"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-100/50 blur-3xl rounded-full -z-0"></div>

      {/* Heading */}
      <div
        ref={headRef}
        className={`text-center mb-10 px-5 transition-all duration-700 ease-out ${
          headIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="text-orange-500 uppercase tracking-[3px] font-semibold">
          Testimonials
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-slate-900">
          What Our Clients Say
        </h2>
      </div>

      {/* Swiper */}

      <Swiper
        modules={[Autoplay, Pagination]}
        loop={true}
        speed={800}
        spaceBetween={25}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pauseOnMouseEnter={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },

          640: {
            slidesPerView: 2,
          },

          1024: {
            slidesPerView: 3,
          },
        }}
        className="testimonialSwiper w-[92%] lg:w-[80%]"
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.id} className="pb-12">
            <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 p-8 pt-10 min-h-[320px] flex flex-col items-center text-center">
              <FaQuoteLeft className="absolute top-6 left-6 text-orange-100 text-3xl" />

              <div className="relative">
                <span className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-400 to-blue-500 -m-[3px]"></span>
                <img
                  src={item.img}
                  alt={item.name}
                  className="relative w-20 h-20 rounded-full object-cover border-4 border-white"
                />
              </div>

              <h3 className="mt-5 text-xl font-bold text-gray-700">{item.name}</h3>

              <div className="flex gap-1 mt-2 text-orange-400 text-xs">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <p className="mt-4 text-gray-600 leading-7">{item.review}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Second Section */}
      <div className="max-w-7xl mx-auto mt-10 px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <div
            ref={leftRef}
            className={`w-full lg:w-[60%] transition-all duration-700 ease-out ${
              leftIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-orange-500 font-semibold uppercase tracking-[3px]">
              Why Choose Us
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold mt-3 leading-tight text-gray-600">
              Build Your Career With The Best Learning Experience
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              quidem enim reprehenderit. Eius mollitia id facere aperiam dolore
              odit modi assumenda corrupti sit. Necessitatibus eos suscipit
              fugiat ipsam architecto sint.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-5 mt-10">
              {stats.map((stat, index) => (
                <div
                  key={stat.id}
                  style={{ transitionDelay: leftIn ? `${index * 90}ms` : "0ms" }}
                  className={`flex items-center gap-4 bg-white rounded-xl shadow-md px-5 py-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
                    leftIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center flex-shrink-0">
                    <FaBullhorn className="text-blue-700 text-xl" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-blue-800">{stat.num}</h3>
                    <p className="text-gray-600 text-sm">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}

          <div
            ref={imgRef}
            className={`w-full lg:w-[35%] flex justify-center relative transition-all duration-700 ease-out delay-150 ${
              imgIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="absolute w-64 h-64 bg-orange-100 rounded-full blur-3xl -z-10"></div>
            <img
              src={rightimg}
              alt="Counter"
              className="w-[80%] sm:w-[70%] lg:w-full object-contain hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      <style>{`
        .testimonialSwiper .swiper-pagination-bullet {
          width: 9px;
          height: 9px;
          background: #cbd5e1;
          opacity: 1;
          transition: .3s;
        }
        .testimonialSwiper .swiper-pagination-bullet-active {
          width: 24px;
          border-radius: 20px;
          background: #f97316;
        }
      `}</style>
    </section>
  );
};

export default OurClient;
