// import seo from "../../assets/images/seo.png";
// import { FaRegDotCircle } from "react-icons/fa";

// const Internship = () => {
//   const points = [
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//   ];

//   return (
//     <section className="w-full py-5 lg:py-20 bg-linear-to-r from-slate-900 via-blue-900 to-blue-700 mt-10">
//       <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

//         <div className="flex flex-col-reverse lg:flex-row items-center gap-12">

//           {/* LEFT */}
//           <div className="w-full lg:w-1/2">

//             {/* Heading */}
//             <div className="flex items-center gap-4">
//               <h4 className="text-xl sm:text-2xl font-semibold text-white">
//                 Internship
//               </h4>

//               <div className="w-16 h-[2px] bg-red-600"></div>
//             </div>

//             <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-6 leading-tight">
//               Internship Training Program - 2020
//             </h1>

//             <p className="mt-5 text-base sm:text-lg text-gray-200 leading-8">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit.
//               Dolorum cupiditate ratione temporibus quos voluptatem.
//             </p>

//             {/* Apply */}
//             <h2 className="text-2xl sm:text-3xl font-semibold text-white mt-10">
//               Who Can Apply?
//             </h2>

//             {/* Bullet Points */}
//             <div className="mt-8 space-y-5">
//               {points.map((item, index) => (
//                 <div key={index} className="flex items-start gap-3">
//                   <FaRegDotCircle className="text-orange-400 mt-1 shrink-0" />

//                   <p className="text-gray-200 leading-7">
//                     {item}
//                   </p>
//                 </div>
//               ))}
//             </div>

//             {/* Form */}
//             <div className="mt-10 flex flex-col sm:flex-row gap-4">

//               <select className="w-full sm:w-64 px-4 py-3 rounded-lg bg-white text-slate-800 outline-none">
//                 <option>Courses We Offer</option>
//                 <option>Web Development</option>
//                 <option>UI / UX Design</option>
//                 <option>Digital Marketing</option>
//               </select>

//               <input
//                 type="text"
//                 placeholder="Phone Number"
//                 className="w-full sm:flex-1 px-4 py-3 rounded-lg bg-white text-slate-800 outline-none"
//               />

//               <button className="px-8 py-3 rounded-lg bg-linear-to-r from-purple-600 to-blue-700 text-white font-semibold hover:scale-105 transition duration-300">
//                 Send Now
//               </button>

//             </div>

//           </div>

//           {/* RIGHT */}

//           <div className="w-full lg:w-1/2 flex justify-end">

//             <img
//               src={seo}
//               alt="seo"
//               className="w-[85%] sm:w-[70%] lg:w-full max-w-lg object-contain"
//             />

//           </div>

//         </div>

//       </div>
//     </section>
//   );
// };

// export default Internship;

// import seo from "../../assets/images/seo.png";
import img2 from "../../assets/images/seo-1.png";
import { FaRegDotCircle } from "react-icons/fa";

const Internship = () => {
  const points = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  ];

  return (
    <section className="w-full py-14 lg:py-24 bg-gradient-to-r from-slate-900 via-blue-900 to-blue-700 mt-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* LEFT */}
          <div className="w-full lg:w-1/2">

            {/* Heading */}
            <div className="flex items-center gap-4">
              <h4 className="text-xl sm:text-2xl font-semibold text-white">
                Internship
              </h4>

              <div className="w-16 h-[2px] bg-red-600"></div>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-6 leading-tight">
              Internship Training Program - 2020
            </h1>

            <p className="mt-5 text-base sm:text-lg text-gray-200 leading-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dolorum cupiditate ratione temporibus quos voluptatem.
            </p>

            {/* Apply */}
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mt-10">
              Who Can Apply?
            </h2>

            {/* Bullet Points */}
            <div className="mt-6 space-y-4">
              {points.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <FaRegDotCircle className="text-orange-400 mt-1.5 shrink-0" />

                  <p className="text-gray-200 leading-7">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">

              <select className="w-full sm:w-56 px-4 py-3 rounded-lg bg-white text-slate-800 outline-none">
                <option>Courses We Offer</option>
                <option>Web Development</option>
                <option>UI / UX Design</option>
                <option>Digital Marketing</option>
              </select>

              <input
                type="text"
                placeholder="Phone Number"
                className="w-full sm:flex-1 px-4 py-3 rounded-lg bg-white text-slate-800 outline-none"
              />

              <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-700 text-white font-semibold hover:scale-105 transition duration-300 whitespace-nowrap">
                Send Now
              </button>

            </div>

          </div>

          {/* RIGHT */}
          <div className="hidden lg:flex lg:w-1/2 justify-center lg:justify-end">
            <img
              src={img2}
              alt="seo"
              className="w-[60%] sm:w-[65%] lg:w-[110%] lg:-mr-10 max-w-lg lg:max-w-none object-contain"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Internship;