import React, { useEffect, useRef, useState } from "react";
import { FaBullhorn } from "react-icons/fa";
import rightimg from "../../assets/images/counter.png";

const stats = [
  { id: 1, num: "330+", label: "Professional Courses" },
  { id: 2, num: "15+", label: "Team Advisors" },
  { id: 3, num: "35+", label: "Educators" },
  { id: 4, num: "15+", label: "Glorious Years" },
];

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

const WhyChooseUs = () => {
  const [leftRef, leftIn] = useReveal();
  const [imgRef, imgIn] = useReveal();

  return (
    <section className="py-16">
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
                  style={{
                    transitionDelay: leftIn ? `${index * 90}ms` : "0ms",
                  }}
                  className={`flex items-center gap-4 bg-white rounded-xl shadow-md px-5 py-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
                    leftIn
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6"
                  }`}
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center flex-shrink-0">
                    <FaBullhorn className="text-blue-700 text-xl" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-blue-800">
                      {stat.num}
                    </h3>
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
    </section>
  );
};

export default WhyChooseUs;