// import * as React from "react";
// import Accordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import rightimg from '../../assets/images/counter.png'


// // import img from "../../assets/images/your-image.png"; // apni image

// const AboutCompany = () => {
//   return (
//     <div className="w-full flex justify-center mt-10">

//       {/* WRAPPER */}
//       <div className="w-[90%] flex items-start gap-10">

//         {/* LEFT IMAGE */}
//         <div className="w-[45%]">
//           <img src={rightimg} alt="about" className="w-full" />
//         </div>

//         {/* RIGHT CONTENT */}
//         <div className="w-[55%] flex flex-col gap-5">

//           <p>Why ABC COMPANY</p>
//           <h3 className="text-2xl font-semibold"> Lorem ipsum dolor sit amet consectetur adipisicing elit..</h3>
//           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit...</p>

//           {/* ACCORDION */}
//           <div className="mt-10">

//             <Accordion className="shadow-sm">
//               <AccordionSummary
//                 className="min-h-0 py-1"
//                 expandIcon={<ExpandMoreIcon />}
//               >
//                 <Typography className="text-sm">
//                   High Tech Labs
//                 </Typography>
//               </AccordionSummary>

//               <AccordionDetails className="py-2">
//                 <Typography className="text-xs">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 </Typography>
//               </AccordionDetails>
//             </Accordion>

//             <Accordion className="shadow-sm">
//               <AccordionSummary
//                 className="min-h-0 py-1"
//                 expandIcon={<ExpandMoreIcon />}
//               >
//                 <Typography className="text-sm">
//                 100% Job Assistance
//                 </Typography>
//               </AccordionSummary>

//               <AccordionDetails className="py-2">
//                 <Typography className="text-xs">
//                   Suspendisse malesuada lacus ex, sit amet blandit leo.
//                 </Typography>
//               </AccordionDetails>
//             </Accordion>

//               <Accordion className="shadow-sm">
//               <AccordionSummary
//                 className="min-h-0 py-1"
//                 expandIcon={<ExpandMoreIcon />}
//               >
//                 <Typography className="text-sm">
//                 Live Projects
//                 </Typography>
//               </AccordionSummary>

//               <AccordionDetails className="py-2">
//                 <Typography className="text-xs">
//                   Suspendisse malesuada lacus ex, sit amet blandit leo.
//                 </Typography>
//               </AccordionDetails>
//             </Accordion>

//              <Accordion className="shadow-sm">
//               <AccordionSummary
//                 className="min-h-0 py-1"
//                 expandIcon={<ExpandMoreIcon />}
//               >
//                 <Typography className="text-sm">
//                 Portfolio Development
//                 </Typography>
//               </AccordionSummary>

//               <AccordionDetails className="py-2">
//                 <Typography className="text-xs">
//                   Suspendisse malesuada lacus ex, sit amet blandit leo.
//                 </Typography>
//               </AccordionDetails>
//             </Accordion>

//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutCompany;

import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import rightimg from "../../assets/images/counter.png";

const accordionData = [
  {
    title: "High Tech Labs",
    desc: "Learn with modern laboratories and industry-standard equipment for hands-on practical experience.",
  },
  {
    title: "100% Job Assistance",
    desc: "Dedicated placement support with interview preparation, resume building and career guidance.",
  },
  {
    title: "Live Projects",
    desc: "Work on real client projects to gain practical experience before entering the industry.",
  },
  {
    title: "Portfolio Development",
    desc: "Build an impressive portfolio showcasing your skills and projects to employers.",
  },
];

const AboutCompany = () => {
  return (
    <section className="py-16 lg:py-20">

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* Left Image */}

          <div className="hidden lg:flex lg:w-5/12 justify-center">
            <img
              src={rightimg}
              alt="about"
              className="w-full max-w-md object-contain"
            />
          </div>

          {/* Right */}

          <div className="w-full lg:w-7/12">

            <p className="uppercase tracking-[3px] text-orange-500 font-semibold">
              Why ABC Company
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-4 leading-tight">
              Learn With The Best Training Institute
            </h2>

            <p className="text-gray-600 leading-8 mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium, minima. Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </p>

            {/* Accordion */}

            <div className="mt-10 space-y-4">

              {accordionData.map((item, index) => (
                <Accordion
                  key={index}
                  disableGutters
                  elevation={0}
                  sx={{
                    borderRadius: "14px",
                    overflow: "hidden",
                    border: "1px solid #e5e7eb",
                    boxShadow: "0 8px 20px rgba(0,0,0,.06)",
                    "&:before": {
                      display: "none",
                    },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    sx={{
                      background: "#ffffff",
                      minHeight: "60px",
                      "&.Mui-expanded": {
                        minHeight: "60px",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: 600,
                        fontSize: "18px",
                        color: "#1e293b",
                      }}
                    >
                      {item.title}
                    </Typography>
                  </AccordionSummary>

                  <AccordionDetails
                    sx={{
                      background: "#f8fafc",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#64748b",
                        lineHeight: 1.8,
                        fontSize: "15px",
                      }}
                    >
                      {item.desc}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default AboutCompany;