
import React from "react";
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

const Home = () => {
  return (
    <section className="w-full min-h-screen bg-linear-to-r from-slate-950 via-blue-900 to-blue-700">

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={900}
        loop={true}
        className="heroSwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>

            {/* <div className="max-w-7xl mx-auto min-h-screen flex items-center px-5 sm:px-8 lg:px-10"> */}
            <div className="max-w-7xl mx-auto flex items-center min-h-[calc(100vh-80px)] px-5 sm:px-8 lg:px-10 ">

              <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-14 w-full">

                {/* Left */}

                <div className="text-center lg:text-left">

                  <p className="uppercase tracking-[4px] text-orange-400 font-semibold text-sm mb-4">
                    Admissions Open
                  </p>

                  <h1 className="text-white font-bold leading-tight text-4xl sm:text-4xl lg:text-6xl">
                    {slide.title}
                  </h1>

                  <p className="text-gray-200 mt-6 text-base sm:text-lg leading-8 max-w-xl mx-auto lg:mx-0">
                    {slide.description}
                  </p>

                  <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8">

                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition duration-300 hover:scale-105 shadow-lg">
                      Apply Now
                    </button>

                    <button className="border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-blue-900 transition duration-300">
                      Explore Courses
                    </button>

                  </div>

                </div>

                {/* Right */}

               <div className="hidden lg:flex justify-center">
  <img
    src={slide.image}
    alt="banner"
    className="w-full max-w-xl object-contain drop-shadow-2xl"
  />
</div>

              </div>

            </div>

          </SwiperSlide>
        ))}
      </Swiper>
         

      <style>{`
        .heroSwiper,
        .heroSwiper .swiper-wrapper,
        .heroSwiper .swiper-slide{
          min-height:100vh;
        }

        .heroSwiper .swiper-button-next,
        .heroSwiper .swiper-button-prev{      
          color:white;
          transition:.4s;
        }

        .heroSwiper .swiper-button-next:hover,
        .heroSwiper .swiper-button-prev:hover{
          // background:#f97316;
          transform:scale(1.08);
        }

        .heroSwiper .swiper-button-next::after,
        .heroSwiper .swiper-button-prev::after{
          font-size:18px;
          font-weight:bold;
        }

        .heroSwiper .swiper-pagination{
          bottom:25px;
        }

        .heroSwiper .swiper-pagination-bullet{
          background:#fff;
          opacity:.5;
          transition:.3s;
        }

        .heroSwiper .swiper-pagination-bullet-active{
          background:#fb923c;
          opacity:1;
          width:28px;
          border-radius:20px;
        }

        @media(max-width:768px){

          .heroSwiper .swiper-button-next,
          .heroSwiper .swiper-button-prev{
            display:none;
          }

          .heroSwiper,
          .heroSwiper .swiper-wrapper,
          .heroSwiper .swiper-slide{
            min-height:auto;
          }

          .heroSwiper .swiper-slide{
            padding:70px 0;
          }

        }
      `}</style>

    </section>
  );
};

export default Home;