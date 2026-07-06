import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

import client1 from "../../assets/images/client.jpg";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

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

const Client = [
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

const OurClient = () => {
  const [headRef, headIn] = useReveal();

  return (
    <section className="py-16 mt-10 relative overflow-hidden">
      {/* Background Blur */}
      <div className="absolute -top-10 right-0 w-72 h-72 bg-orange-100/50 blur-3xl rounded-full -z-0"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-100/50 blur-3xl rounded-full -z-0"></div>

      {/* Heading */}
      <div
        ref={headRef}
        className={`text-center mb-10 px-5 transition-all duration-700 ease-out ${
          headIn
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
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
        {Client.map((item) => (
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

              <h3 className="mt-5 text-xl font-bold text-gray-700">
                {item.name}
              </h3>

              <div className="flex gap-1 mt-2 text-orange-400 text-xs">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <p className="mt-4 text-gray-600 leading-7">
                {item.review}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

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
