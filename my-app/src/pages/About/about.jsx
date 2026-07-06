import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import rightimg from "../../assets/images/counter.png";
import WhyChooseUs from "../WhyChooseUs/chooseUs";

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

const About = () => {
  const [expanded, setExpanded] = React.useState(0);

  const handleChange = (index) => (_event, isExpanded) => {
    setExpanded(isExpanded ? index : false);
  };

  return (
    <section className="py-16 lg:py-20 bg-white">
      
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Image */}
          <div className="hidden lg:flex lg:w-5/12 justify-center relative">
            <div className="absolute w-72 h-72 bg-orange-100 rounded-full blur-3xl -z-10"></div>
            <img
              src={rightimg}
              alt="about"
              className="w-full max-w-md object-contain animate-float-soft"
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
              {accordionData.map((item, index) => {
                const isOpen = expanded === index;
                return (
                  <Accordion
                    key={index}
                    expanded={isOpen}
                    onChange={handleChange(index)}
                    disableGutters
                    elevation={0}
                    sx={{
                        background: "#ffffff",
                        minHeight: "64px",
                        "&.Mui-expanded": {
                        minHeight: "64px",
  },
}}
                  >
                    <AccordionSummary
                      expandIcon={
                        <span
                          className={`flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-300 ${
                            isOpen ? "bg-orange-500 text-white" : "bg-slate-100 text-slate-500"
                          }`}
                        >
                          <ExpandMoreIcon fontSize="small" />
                        </span>
                      }
                      sx={{
                        background: isOpen ? "#fff7ed" : "#ffffff",
                        minHeight: "64px",
                        "&.Mui-expanded": { minHeight: "64px" },
                      }}
                    >
                      <div className="flex items-center gap-3.5">
                        <span
                          className={`w-1.5 h-6 rounded-full transition-colors duration-300 ${
                            isOpen ? "bg-orange-500" : "bg-slate-200"
                          }`}
                        ></span>
                        <Typography sx={{ fontWeight: 600, fontSize: "18px", color: "#1e293b" }}>
                          {item.title}
                        </Typography>
                      </div>
                    </AccordionSummary>

                    <AccordionDetails sx={{ background: "#f8fafc" }}>
                      <Typography sx={{ color: "#64748b", lineHeight: 1.8, fontSize: "15px", pl: "20px" }}>
                        {item.desc}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes floatSoft {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .animate-float-soft {
          animation: floatSoft 5s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-float-soft { animation: none !important; }
        }
      `}</style>
      <WhyChooseUs />
    </section>
  );
};

export default About;