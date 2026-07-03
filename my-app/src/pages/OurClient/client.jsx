// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/autoplay";
// import { Autoplay } from "swiper/modules";
// import client1 from "../../assets/images/client.jpg";
// import rightimg from "../../assets/images/counter.png";
// import { FaBullhorn } from "react-icons/fa";

// const OurClient = () => {
//   const testimonials = [
//     {
//       id: 1,
//       img: client1,
//       name: "client 1",
//       review:
//         "The team delivered exactly what we needed. The website performance improved drastically and the support was always quick",
//     },
//     {
//       id: 2,
//       img: client1,
//       name: "client 2",
//       review:
//         "The team delivered exactly what we needed. The website performance improved drastically and the support was always quick and helpful!",
//     },
//     {
//       id: 3,
//       img: client1,
//       name: "client 3",
//       review:
//         "The team delivered exactly what we needed. The website performance improved drastically and the support was always quick",
//     },
//     {
//       id: 4,
//       img: client1,
//       name: "client 4",
//       review:
//         "The team delivered exactl3y what we needed. The website performance improved drastically and the support was always quick and helpful.",
//     },
//     {
//       id: 5,
//       img: client1,
//       name: "client 5",
//       review:
//         "The team delivered exactly what we needed. The website performance improved drastically and the support was always quick and helpful.",
//     },
//     {
//       id: 6,
//       img: client1,
//       name: "client 6",
//       review:
//         "The team delivered exactly what we needed. The website performance improved drastically and the support was always quick and helpful. !",
//     },
//     {
//       id: 7,
//       img: client1,
//       name: "client 7",
//       review:
//         "The team delivered exactly what we needed. The website performance improved drastically and the support was always quick and helpful!",
//     },
//   ];
//   return (
//     <div className="mt-15 py-10">
//       <div>
//         <p className="text-center text-2xl mb-6">Our Clients</p>

//         <Swiper
//           modules={[Autoplay]}
//           slidesPerView={3}
//           spaceBetween={20}
//           autoplay={{
//             delay: 2500,
//             disableOnInteraction: false,
//           }}
//           loop={true}
//           speed={800}
//           className="w-[80%]"
//         >
//           {testimonials.map((item) => (
//             <SwiperSlide key={item.id} className="flex h-auto">
//               <div className="w-full  bg-white shadow-lg rounded-xl  flex flex-col items-center text-center">
//                 <img
//                   src={item.img}
//                   alt={item.name}
//                   className="w-16 h-16 rounded-full object-cover"
//                 />

//                 <h3 className="mt-4 font-bold text-lg">{item.name}</h3>

//                 <p className="text-gray-600 text-sm mt-3 leading-6 overflow-hidden">
//                   {item.review}
//                 </p>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       {/*  second part */}
//       <div className="flex w-full px-10 mt-15">
//         <div className="w-[60%] flex flex-col gap-4 justify-center">
//           <p className="font-sans">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit.
//           </p>
//           <h5 className="font-sans">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit.
//           </h5>
//           <p className="font-sans">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
//             quidem enim reprehenderit. Eius, mollitia id? Facere aperiam dolore
//             odit. Modi assumenda corrupti sit! Necessitatibus eos suscipit
//             fugiat, ipsam architecto sint!
//           </p>

//           {/* 4 card code */}
//           <div className="flex flex-wrap gap-6 px-15 mt-10">
//             <div className="w-[40%]">
//               <FaBullhorn />
//               <p className="text-blue-800 font-bold text-2xl">330+</p>
//               <p>professional course</p>
//             </div>
//             <div className="w-[40%]">
//               <FaBullhorn />
//               <p className="text-blue-800 font-bold text-2xl">15+</p>
//               <p>team advisors</p>
//             </div>
//             <div className="w-[40%]">
//               <FaBullhorn />
//               <p className="text-blue-800 font-bold text-2xl">35+</p>
//               <p>educators</p>
//             </div>
//             <div className="w-[40%]">
//               <FaBullhorn />
//               <p className="text-blue-800 text-2xl font-bold">15+</p>
//               <p>Glorious Years</p>
//             </div>
//           </div>
//         </div>
//         <div className="w-[30%] flex justify-center">
//           <img src={rightimg} alt="right img" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurClient;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

import client1 from "../../assets/images/client.jpg";
import rightimg from "../../assets/images/counter.png";

import { FaBullhorn } from "react-icons/fa";

const OurClient = () => {
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

  return (
    <section className="py-16 mt-10">
      {/* Heading */}

      <div className="text-center mb-10 px-5">
        <p className="text-orange-500 uppercase tracking-[3px] font-semibold">
          Testimonials
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          What Our Clients Say
        </h2>
      </div>

      {/* Swiper */}

      <Swiper
        modules={[Autoplay]}
        loop={true}
        speed={800}
        spaceBetween={25}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
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
        className="w-[92%] lg:w-[80%]"
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.id} className="pb-5">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 min-h-[320px] flex flex-col items-center text-center">
              <img
                src={item.img}
                alt={item.name}
                className="w-20 h-20 rounded-full object-cover border-4 border-blue-100"
              />

              <h3 className="mt-5 text-xl font-bold text-gray-700">{item.name}</h3>

              <p className="mt-5 text-gray-600 leading-7">{item.review}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Second Section Starts Here */}
      {/* Second Section */}
      <div className="max-w-7xl mx-auto mt-20 px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="w-full lg:w-[60%]">
            <p className="text-orange-500 font-semibold uppercase tracking-[3px]">
              Why Choose Us
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold mt-3 leading-tight">
              Build Your Career With The Best Learning Experience
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              quidem enim reprehenderit. Eius mollitia id facere aperiam dolore
              odit modi assumenda corrupti sit. Necessitatibus eos suscipit
              fugiat ipsam architecto sint.
            </p>

            {/* Stats */}
{/* 
            <div className="grid grid-cols-2 gap-8 mt-10">
              <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition">
                <FaBullhorn className="text-4xl text-blue-700 mb-4" />

                <h3 className="text-3xl font-bold text-blue-800">330+</h3>

                <p className="text-gray-600 mt-2">Professional Courses</p>
              </div>

              <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition">
                <FaBullhorn className="text-4xl text-blue-700 mb-4" />

                <h3 className="text-3xl font-bold text-blue-800">15+</h3>

                <p className="text-gray-600 mt-2">Team Advisors</p>
              </div>

              <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition">
                <FaBullhorn className="text-4xl text-blue-700 mb-4" />

                <h3 className="text-3xl font-bold text-blue-800">35+</h3>

                <p className="text-gray-600 mt-2">Educators</p>
              </div>

              <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition">
                <FaBullhorn className="text-4xl text-blue-700 mb-4" />

                <h3 className="text-3xl font-bold text-blue-800">15+</h3>

                <p className="text-gray-600 mt-2">Glorious Years</p>
              </div>
            </div> */}
            {/* Stats */}

<div className="grid grid-cols-2 gap-5 mt-10">

  <div className="flex items-center gap-4 bg-white rounded-xl shadow-md px-5 py-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
      <FaBullhorn className="text-blue-700 text-xl" />
    </div>

    <div>
      <h3 className="text-2xl font-bold text-blue-800">330+</h3>
      <p className="text-gray-600 text-sm">Professional Courses</p>
    </div>
  </div>

  <div className="flex items-center gap-4 bg-white rounded-xl shadow-md px-5 py-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
      <FaBullhorn className="text-blue-700 text-xl" />
    </div>

    <div>
      <h3 className="text-2xl font-bold text-blue-800">15+</h3>
      <p className="text-gray-600 text-sm">Team Advisors</p>
    </div>
  </div>

  <div className="flex items-center gap-4 bg-white rounded-xl shadow-md px-5 py-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
      <FaBullhorn className="text-blue-700 text-xl" />
    </div>

    <div>
      <h3 className="text-2xl font-bold text-blue-800">35+</h3>
      <p className="text-gray-600 text-sm">Educators</p>
    </div>
  </div>

  <div className="flex items-center gap-4 bg-white rounded-xl shadow-md px-5 py-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
      <FaBullhorn className="text-blue-700 text-xl" />
    </div>

    <div>
      <h3 className="text-2xl font-bold text-blue-800">15+</h3>
      <p className="text-gray-600 text-sm">Glorious Years</p>
    </div>
  </div>

</div>
          </div>

          {/* Right Image */}

          <div className="w-full lg:w-[35%] flex justify-center">
            <img
              src={rightimg}
              alt="Counter"
              className="w-[80%] sm:w-[70%] lg:w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClient;
