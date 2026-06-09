import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Magnetic from '../Magnetic/Magnetic';
import weatherDashboardImg from '../../assets/weather_dashboard.png';
import movieRecommendationImg from '../../assets/movie_recommendation_system.png';
import skillbridgeImg from '../../assets/skillbridge.png';
import onlineImg from '../../assets/online.png';

const projects = [
  {
    id: 1,
    title: 'WEATHER DASHBOARD',
    category: 'Data Analytics',
    color: '#10b981',
    image: weatherDashboardImg,
    link: 'https://www.linkedin.com/posts/ankit-kumar-6450b620b_powerbi-dataanalytics-weatheranalytics-activity-7470041489029623809-Wvmp?utm_source=share&utm_medium=member_desktop&rcm=ACoAADU61xUBLJFM9Wn-yWLgyKN0CdvTDdG4iyY',
    description: 'Built an interactive Weather Dashboard in Power BI to analyze temperature, humidity, wind speed, and precipitation trends, etc. Used DAX formulas for calculated measures, KPI indicators, and time-based analysis, creating dynamic reports with interactive filters and visualizations.',
    tools: ['Python', 'OpenWeatherMap API', 'PowerBI', 'DAX Formulas', 'KPI Indicators', 'Time-Based Analysis', 'Interactive Filters', 'Visualizations']
  },
  {
    id: 2,
    title: 'MOVIE RECOMMENDATION SYSTEM',
    category: 'Data Science',
    color: '#f59e0b',
    image: movieRecommendationImg,
    link: 'https://movie-recommender-system-04.streamlit.app/',
    description: 'Built a content-based movie recommendation system using Python and Streamlit that recommends similar movies by analyzing genres, cast, keywords, and movie overviews. Implemented feature engineering and cosine similarity on a dataset of 5000+ movies to generate accurate recommendations.',
    tools: ['Python', 'Streamlit', 'Scikit-learn', 'TMDB API', 'Pandas', 'Numpy', 'Cosine Similarity']
  },
  {
    id: 3,
    title: 'SKILL BRIDGE',
    category: 'Web Development',
    color: '#0b8cf5ff',
    image: skillbridgeImg,
    link: 'https://skill-bridge-gold-five.vercel.app/',
    description: 'Built a MERN-stack micro-internship platform where companies post short-term projects and students apply to gain real-world experience. Implemented authentication, internship management, application tracking, and responsive UI to streamline the hiring process.',
    tools: ['React', 'Vite', 'MongoDB', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'Express.js', 'JWT Authentication']
  },
  {
    id: 4,
    title: 'Online Quiz Platform',
    category: 'Web Development',
    color: '#0b8cf5ff',
    image: onlineImg,
    link: 'https://online-quiz-platform-navy.vercel.app/',
    description: 'Developed a full-stack Online Quiz Platform that enables users to participate in quizzes, track scores, and evaluate their knowledge across various topics. The platform features secure user authentication, timed quizzes, automatic score calculation, result tracking, and an admin panel for managing quiz questions and categories. Designed a responsive user interface to ensure a seamless experience across devices.',
    tools: ['React', 'Vite', 'MongoDB', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'Express.js', 'JWT Authentication']
  }

];

export default function Projects() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  return (
    <section id="projects" ref={containerRef} className="min-h-screen py-20 sm:py-32 px-4 sm:px-6 flex flex-col justify-center relative overflow-hidden bg-[#050505]">
      {/* Background Soft Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-white/2 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center">
        {/* Header Tagline */}
        <div className="flex flex-col items-center mb-10 sm:mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-4"
          >
            Featured Work
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[1px] bg-white/20"
          />
        </div>

        {isMobile ? (
          <div className="w-full flex flex-col gap-6 mt-4 px-2">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6 }}
                className="w-full bg-white/[0.02] backdrop-blur-md border border-white/[0.06] rounded-2xl overflow-hidden flex flex-col relative"
              >
                {/* Ambient Background Glow matching the project's color */}
                <div
                  className="absolute -top-24 -left-24 w-48 h-48 rounded-full blur-[100px] opacity-15 pointer-events-none"
                  style={{ backgroundColor: project.color }}
                />

                {/* Card Cover Image */}
                <div className="relative w-full aspect-[16/10] overflow-hidden border-b border-white/[0.06] z-10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover select-none pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                </div>

                {/* Card Details */}
                <div className="p-5 flex flex-col gap-4 relative z-10 text-left">
                  <div>
                    <span
                      className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase block mb-1"
                      style={{ color: project.color }}
                    >
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold uppercase tracking-tight text-white">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-sm text-gray-300 leading-relaxed font-light">
                    {project.description}
                  </p>

                  {/* Tools Badges */}
                  <div>
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 block mb-2">
                      Tools Used
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-2.5 py-1 rounded-lg text-[10px] font-medium border border-white/10 bg-white/[0.03] text-gray-300"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  {project.link && project.link !== '' && (
                    <div className="mt-2">
                      <a
                        href={project.link || '#'}
                        target={project.link && project.link !== '#' ? "_blank" : undefined}
                        rel={project.link && project.link !== '#' ? "noopener noreferrer" : undefined}
                        className="w-full bg-[#f59e0b] hover:bg-[#d97706] text-black font-bold text-[10px] tracking-[0.2em] uppercase py-3.5 px-6 rounded-lg flex items-center justify-center gap-2.5 transition-all duration-300 shadow-[0_10px_30px_rgba(245,158,11,0.2)] cursor-expand"
                      >
                        <span>View Project</span>
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <>
            {/* 3D Perspective Card Slider Wrapper */}
            <div className="relative w-full flex items-center justify-center px-4 md:px-16">

              {/* Navigation Arrows Container */}
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between items-center pointer-events-none z-50 px-1 sm:px-4 md:px-12">
                {/* Left Chevron Button */}
                <div className="pointer-events-auto">
                  <Magnetic>
                    <button
                      onClick={handlePrev}
                      className="p-2 sm:p-4 rounded-full border border-white/10 bg-black/40 hover:bg-white/[0.08] hover:border-white/20 text-white transition-all duration-300 flex items-center justify-center shadow-2xl cursor-expand"
                      aria-label="Previous Project"
                    >
                      <svg className="w-5 h-5 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                  </Magnetic>
                </div>

                {/* Right Chevron Button */}
                <div className="pointer-events-auto">
                  <Magnetic>
                    <button
                      onClick={handleNext}
                      className="p-2 sm:p-4 rounded-full border border-white/10 bg-black/40 hover:bg-white/[0.08] hover:border-white/20 text-white transition-all duration-300 flex items-center justify-center shadow-2xl cursor-expand"
                      aria-label="Next Project"
                    >
                      <svg className="w-5 h-5 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </Magnetic>
                </div>
              </div>

              {/* 3D Scene Viewport */}
              <div
                className="relative w-full h-[300px] sm:h-[380px] md:h-[460px] flex items-center justify-center overflow-visible select-none"
                style={{ perspective: isMobile ? "800px" : "1400px", transformStyle: "preserve-3d" }}
              >
                {projects.map((project, index) => {
                  // Calculate cyclic dynamic index offset from center card
                  let offset = index - activeIndex;
                  if (offset < -Math.floor(projects.length / 2)) {
                    offset += projects.length;
                  } else if (offset > Math.floor(projects.length / 2)) {
                    offset -= projects.length;
                  }

                  const isActive = offset === 0;
                  const isLeft = offset === -1;
                  const isRight = offset === 1;

                  // Compute responsive position values
                  let xPos = "0%";
                  if (!isMobile) {
                    if (offset === -1) xPos = "-34%";
                    if (offset === 1) xPos = "34%";
                  } else {
                    if (offset === -1) xPos = "-15px";
                    if (offset === 1) xPos = "15px";
                  }

                  let rotateY = 0;
                  if (!isMobile) {
                    if (offset === -1) rotateY = 22;
                    if (offset === 1) rotateY = -22;
                  }

                  let scale = isActive ? 1.0 : 0.76;
                  let zIndex = isActive ? 30 : 10;
                  let opacity = isActive ? 1 : (isMobile ? 0 : 0.35);
                  let blurFilter = isActive ? "brightness(100%) blur(0px)" : "brightness(35%) blur(2px)";

                  return (
                    <motion.div
                      key={project.id}
                      style={{
                        zIndex: zIndex,
                        transformStyle: "preserve-3d",
                      }}
                      animate={{
                        x: xPos,
                        scale: scale,
                        rotateY: rotateY,
                        opacity: opacity,
                        z: isActive ? 80 : 0,
                        filter: blurFilter
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 280,
                        damping: 24,
                      }}
                      onClick={() => {
                        if (!isActive) {
                          setActiveIndex(index);
                        }
                      }}
                      className={`absolute w-[280px] sm:w-[380px] md:w-[500px] h-[200px] sm:h-[260px] md:h-[330px] overflow-hidden border border-white/10 bg-black/60 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-colors duration-500 flex flex-col justify-end group ${isActive ? "cursor-default" : (isMobile ? "pointer-events-none" : "cursor-pointer hover:border-white/20")
                        }`}
                    >
                      {/* Background Project Cover Image */}
                      <div className="absolute inset-0 w-full h-full select-none pointer-events-none">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover opacity-50 group-hover:opacity-75 transition-opacity duration-500 select-none pointer-events-none"
                        />
                      </div>

                      {/* Gradient Overlay for Contrast */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent z-10 select-none pointer-events-none" />

                      {/* Glassmorphic Active Card Highlights */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-white/5 to-transparent pointer-events-none mix-blend-overlay z-20" />

                      {/* Content Overlay */}
                      <div className="absolute inset-0 p-4 sm:p-6 md:p-8 flex flex-col justify-end items-center z-30 select-none">
                        <div className="flex flex-col items-center w-full">
                          {/* Project Category */}
                          <span
                            className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase mb-1.5 sm:mb-2 block text-center"
                            style={{ color: project.color }}
                          >
                            {project.category}
                          </span>

                          {/* Project Title */}
                          <h3 className="text-base sm:text-lg md:text-2xl font-bold uppercase tracking-tighter text-white text-center mb-4 sm:mb-5 md:mb-6 leading-tight max-w-sm drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                            {project.title}
                          </h3>

                          {/* solid Gold call-to-action Button */}
                          <motion.div
                            animate={{
                              opacity: isActive ? 1 : 0,
                              y: isActive ? 0 : 20,
                            }}
                            transition={{ duration: 0.3 }}
                            className="pointer-events-auto"
                          >
                            <a
                              href={project.link || '#'}
                              target={project.link && project.link !== '#' ? "_blank" : undefined}
                              rel={project.link && project.link !== '#' ? "noopener noreferrer" : undefined}
                              onClick={(e) => {
                                if (!isActive) {
                                  e.preventDefault();
                                }
                              }}
                              className="bg-[#f59e0b] hover:bg-[#d97706] text-black font-bold text-[10px] sm:text-xs tracking-[0.2em] uppercase py-2 sm:py-2.5 px-4 sm:px-6 rounded-lg flex items-center gap-2.5 transition-all duration-300 shadow-[0_10px_30px_rgba(245,158,11,0.3)] cursor-expand select-text"
                            >
                              <span>View Project</span>
                              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                              </svg>
                            </a>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Project Info Panel */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full max-w-4xl mt-12 md:mt-16 bg-white/[0.02] backdrop-blur-md border border-white/[0.06] rounded-2xl p-5 sm:p-8 md:p-10 flex flex-col md:flex-row gap-6 md:gap-12 relative overflow-hidden"
              >
                {/* Ambient Background Glow matching the active project's color */}
                <div
                  className="absolute -top-24 -left-24 w-48 h-48 rounded-full blur-[100px] opacity-25 pointer-events-none transition-all duration-500"
                  style={{ backgroundColor: projects[activeIndex].color }}
                />

                {/* Left Column: About */}
                <div className="flex-1 flex flex-col justify-start relative z-10 text-left">
                  <h4
                    className="text-xs font-bold tracking-[0.2em] uppercase mb-4 transition-colors duration-500"
                    style={{ color: projects[activeIndex].color }}
                  >
                    About the Project
                  </h4>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-light">
                    {projects[activeIndex].description}
                  </p>
                </div>

                {/* Right Column: Tools Used */}
                <div className="md:w-[320px] flex flex-col justify-start relative z-10 text-left">
                  <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-4">
                    Tools Used
                  </h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2.5">
                    {projects[activeIndex].tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-lg text-xs font-medium border border-white/10 bg-white/[0.03] text-gray-300 hover:border-white/20 transition-all duration-300 hover:bg-white/[0.06] cursor-default"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </>
        )}
      </div>
    </section>
  );
}
