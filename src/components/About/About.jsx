import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax scroll translation for subtle organic movement
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section id="about" ref={containerRef} className="min-h-screen py-32 px-6 flex items-center justify-center relative overflow-hidden bg-transparent">
      <div className="max-w-5xl mx-auto w-full flex flex-col items-center text-center relative z-10">
        {/* Centered Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-4"
        >
          The Mission
        </motion.h2>

        {/* Centered Minimalist Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-12 h-[1px] bg-white/20 mb-12 origin-center"
        />

        {/* Centered Horizontal Mission Statement */}
        <motion.div
          style={{ y }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="text-xl sm:text-2xl md:text-3xl lg:text-[2.2rem] leading-relaxed tracking-tight max-w-6xl font-editorial italic font-normal"
        >
          <span className="text-gray-500">As a Data Analyst and Developer, my mission is to </span>
          <span className="text-white">leverage data-driven decision-making and software development skills </span>
          <span className="text-gray-500">to build smart, scalable, and user-friendly solutions. </span>
          <span className="text-white">I aim to continuously learn, innovate, and contribute to projects that create real value through technology and analytics </span>
          <span className="text-gray-500">& engineering.</span>
        </motion.div>
      </div>
    </section>
  );
}
