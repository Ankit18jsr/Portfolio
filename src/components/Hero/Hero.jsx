import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Magnetic from '../Magnetic/Magnetic';
import heroImage from '../../assets/profile.png';

export default function Hero() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="home"
      ref={heroRef}
      className="h-screen relative flex items-center justify-center overflow-hidden px-6"
    >
      {/* Semi-transparent Background Portrait */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 0.8, x: 0 }}
        transition={{ duration: 1.5, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-12 top-1/2 -translate-y-1/2 w-[80vw] md:w-[35vw] max-w-[600px] h-[70vh] pointer-events-none z-0"
        style={{ y }}
      >
        {/* Gradients to seamlessly fade the image edges into the background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020205] via-transparent via-10% to-[#020205] z-10 opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#020205] z-10 opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#020205] z-10 opacity-70" />

        <img
          src={heroImage}
          alt="Ankit Portrait"
          className="w-full h-full object-contain object-center opacity-90"
        />
      </motion.div>
      <motion.div
        style={{ y, opacity }}
        className="flex flex-col items-center text-center z-10 md:-ml-[15vw]"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-sm md:text-base tracking-[0.3em] uppercase mb-6 md:mb-8 text-gray-400"
        >
          Data Analyst & Developer
        </motion.p>

        <motion.h1
          className="text-huge font-editorial italic font-normal tracking-tight flex flex-row flex-wrap justify-center gap-x-4 md:gap-x-8 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500"
        >
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            Ankit
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Kumar
          </motion.span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 pointer-events-auto"
        >
          <Magnetic>
            <a
              href="https://drive.google.com/file/d/17wvVLJuabJJASetMHkLgktd5C6_7uQ0d/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4.5 py-2.5 bg-white/5 border border-white/10 rounded-full text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-white hover:bg-white hover:text-black hover:border-white transition-all duration-500 backdrop-blur-md cursor-expand shadow-[0_4px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_10px_35px_rgba(255,255,255,0.15)] group"
            >
              <span>View Resume</span>
              <svg
                className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
          </Magnetic>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <Magnetic>
          <div className="flex flex-col items-center gap-2 p-4 cursor-pointer">
            <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
            <span className="text-[10px] tracking-widest uppercase text-white/50">Scroll</span>
          </div>
        </Magnetic>
      </motion.div>
    </section>
  );
}
