// import Internship from "../Internship/internship";

// const Course = () => {
//   const services = [
//     {
//       id: 1,
//       title: "IT Consulting",
//       description:
//         "We build fast, responsive and scalable websites using modern technologies with clean UI and excellent performance.",
//       image:
//         "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900",
//       icon: "💻",
//     },
//     {
//       id: 2,
//       title: "IT Support Service",
//       description:
//         "Our creative team designs modern, user-friendly and attractive interfaces that improve user experience.",
//       image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=900",
//       icon: "🎨",
//     },
//     {
//       id: 3,
//       title: "IT Purchase",
//       description:
//         "We create high-performance Android and iOS applications with smooth UI and powerful functionality.",
//       image:
//         "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=900",
//       icon: "📱",
//     },
//   ];

//   return (
//     <section className="py-14 lg:py-20">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
//         {services.map((service) => (
//           <div
//             key={service.id}
//             className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col lg:flex-row items-center gap-8 p-5 lg:p-6"
//           >
//             {/* Left Image */}
//             <div className="w-full lg:w-1/2">
//               <img
//                 src={service.image}
//                 alt={service.title}
//                 className="w-full h-60 sm:h-72 lg:h-72 object-cover rounded-2xl"
//               />
//             </div>

//             {/* Right Content */}
//             <div className="w-full lg:w-1/2">
//               <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center text-3xl mb-4">
//                 {service.icon}
//               </div>

//               <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
//                 {service.title}
//               </h2>

//               <p className="text-slate-600 leading-7 mt-4">
//                 {service.description}
//               </p>

//               <div className="flex flex-col sm:flex-row gap-4 mt-7">
//                 <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-lg">
//                   Get Started
//                 </button>

//                 <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition px-6 py-3 rounded-lg">
//                   Learn More
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <Internship />
//     </section>
//   );
// };

// export default Course;

import Internship from "../Internship/internship";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Course = () => {
  const services = [
    {
      id: 1,
      title: "IT Consulting",
      description:
        "We build fast, responsive and scalable websites using modern technologies with clean UI and excellent performance.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900",
      icon: "💻",
    },
    {
      id: 2,
      title: "IT Support Service",
      description:
        "Our creative team designs modern, user-friendly and attractive interfaces that improve user experience.",
      image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=900",
      icon: "🎨",
    },
    {
      id: 3,
      title: "IT Purchase",
      description:
        "We create high-performance Android and iOS applications with smooth UI and powerful functionality.",
      image:
        "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=900",
      icon: "📱",
    },
    {
      id: 4,
      title: "IT",
      description:
        "We create high-performance Android and iOS applications with smooth UI and powerful functionality.",
      image:
        "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=900",
      icon: "📱",
    },
  ];

  return (
    <section className="py-14 lg:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="pb-14"
        >
          {services.map((service) => (
            <SwiperSlide key={service.id}>
              <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col lg:flex-row items-center gap-8 p-6 lg:p-8">
                {/* Left Image */}
                <div className="w-full lg:w-1/2">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 sm:h-72 lg:h-80 object-cover rounded-2xl"
                  />
                </div>

                {/* Right Content */}
                <div className="w-full lg:w-1/2">
                  <div className="w-16 h-16 rounded-xl bg-blue-100 flex items-center justify-center text-3xl mb-5">
                    {service.icon}
                  </div>

                  <h2 className="text-3xl font-bold text-slate-900">
                    {service.title}
                  </h2>

                  <p className="text-slate-600 leading-8 mt-4">
                    {service.description}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition duration-300">
                      Get Started
                    </button>

                    <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg transition duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Internship />
    </section>
  );
};

export default Course;
