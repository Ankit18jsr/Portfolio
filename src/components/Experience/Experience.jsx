import { motion } from 'framer-motion';

const experiences = [
  {
    id: "infotact",
    company: "Infotact Solutions",
    role: "Data Science Intern",
    location: "Bangalore, Karnataka",
    period: "May 2025 – July 2025",
    color: "#10b981", // Emerald Green
    accentText: "text-emerald-400",
    accentBg: "bg-emerald-400/5",
    accentBorder: "border-emerald-500/10",
    glowClass: "shadow-emerald-500/5 hover:shadow-emerald-500/15 hover:border-emerald-500/30",
    glowBackground: "from-emerald-500/10 via-transparent to-transparent",
    certificateUrl: "https://drive.google.com/file/d/1lvbgKTM7o_DxBVcuaYTAMV3IplYQb6mq/view?usp=sharing",
    points: [
      "Analyzed 5,000+ data records to identify trends and improve decision-making insights using Python(Pandas, NumPy).",
      "Performed exploratory data analysis (EDA) to identify trends and patterns.",
      "Built and evaluated machine learning models using Scikit-learn.",
      "Created data visualizations using Power BI, Matplotlib and Seaborn.",
      "Collaborated with team members to develop data-driven solutions."
    ]
  },
  {
    id: "it-developer",
    company: "IT Developer",
    role: "MERN Stack Developer Intern",
    location: "", // Gracefully absent location
    period: "July 2025 – September 2025",
    projectSubtitle: "Online quiz platform",
    color: "#8b5cf6", // Violet
    accentText: "text-violet-400",
    accentBg: "bg-violet-400/5",
    accentBorder: "border-violet-500/10",
    glowClass: "shadow-violet-500/5 hover:shadow-violet-500/15 hover:border-violet-500/30",
    glowBackground: "from-violet-500/10 via-transparent to-transparent",
    certificateUrl: "https://drive.google.com/file/d/1yefpHiFapMl8W1tDb64p4mD8DRY86pvp/view?usp=sharing",
    points: [
      "Built a full-stack web application using MongoDB, Express.js, React, and Node.js.",
      "Implemented user authentication, quiz management, and quiz scoring system.",
      "Designed responsive UI using Tailwind CSS."
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen py-32 px-6 flex items-center justify-center relative z-10 overflow-hidden bg-[#050505]">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
        
        {/* Left Panel: Header */}
        <div className="col-span-1 lg:col-span-4 flex flex-col justify-start pt-4 lg:sticky lg:top-32 h-fit">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-4"
          >
            Work Experience
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-12 h-[1px] bg-white/20 mb-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm md:text-base text-gray-400 max-w-sm font-light italic leading-relaxed"
          >
            A compilation of professional software engineering and data science internships, demonstrating robust technical implementation and analytical prowess.
          </motion.p>
        </div>

        {/* Right Panel: Interactive Timeline */}
        <div className="col-span-1 lg:col-span-8 relative pl-6 md:pl-16">
          
          {/* Vertical Timeline Track */}
          <div className="absolute left-6 md:left-16 top-4 bottom-4 w-[2px] bg-white/10 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-500 via-violet-500 to-transparent opacity-30" />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-8 md:gap-10 max-w-2xl"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={cardVariants}
                className="relative group"
              >
                {/* Timeline Interactive Indicator Point */}
                <div className="absolute -left-[31px] md:-left-[71px] top-6 z-20 flex items-center justify-center">
                  <div className="relative flex items-center justify-center">
                    {/* Glowing outer circle */}
                    <div 
                      className="absolute w-8 h-8 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"
                      style={{ backgroundColor: `${exp.color}25` }}
                    />
                    {/* Interactive pulse circle */}
                    <div 
                      className="absolute w-6 h-6 rounded-full scale-50 group-hover:scale-100 opacity-0 group-hover:opacity-40 border transition-all duration-500 animate-ping"
                      style={{ borderColor: exp.color }}
                    />
                    {/* Middle dot */}
                    <div 
                      className="w-3.5 h-3.5 rounded-full border-2 border-bg-deep bg-gray-500 group-hover:bg-white transition-all duration-500"
                      style={{ 
                        boxShadow: `0 0 10px ${exp.color}40`,
                        borderColor: '#050505'
                      }}
                      id={`timeline-node-${exp.id}`}
                    />
                  </div>
                </div>

                {/* Main Glassmorphic Card */}
                <motion.div
                  whileHover={{ y: -5, scale: 1.005 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className={`relative overflow-hidden bg-white/[0.015] backdrop-blur-lg border border-white/5 hover:border-white/10 rounded-xl p-5 md:p-6 flex flex-col justify-between shadow-2xl transition-all duration-500 cursor-default ${exp.glowClass}`}
                >
                  {/* Subtle ambient interior hover glow */}
                  <div className={`absolute -right-24 -top-24 w-48 h-48 rounded-full bg-gradient-to-br ${exp.glowBackground} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

                  <div>
                    {/* Header: Company and Duration / Location */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-3">
                      <div>
                        {/* Company title */}
                        <h3 className="text-lg md:text-xl font-bold tracking-tight text-white mb-0.5 group-hover:text-gray-100 transition-colors">
                          {exp.company}
                        </h3>
                        {/* Role with Certificate */}
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className={`text-xs md:text-sm font-semibold ${exp.accentText}`}>
                            {exp.role}
                          </span>
                          <a 
                            href={exp.certificateUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-1 px-2 py-0.5 text-[9px] font-mono rounded-full border transition-all duration-300 ${exp.accentBg} ${exp.accentBorder} ${exp.accentText} hover:bg-white/10 hover:text-white`}
                          >
                            <span>Certificate</span>
                            <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        </div>
                      </div>

                      {/* Right Details: Date & Location */}
                      <div className="flex flex-col items-start md:items-end gap-1 md:text-right">
                        <span className="px-2.5 py-0.5 text-[11px] font-mono rounded-full bg-white/[0.03] border border-white/5 text-gray-400">
                          {exp.period}
                        </span>
                        {exp.location && (
                          <span className="text-[11px] text-gray-500 font-light flex items-center gap-1">
                            <svg className="w-2.5 h-2.5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {exp.location}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Subtitle if any */}
                    {exp.projectSubtitle && (
                      <div className="text-xs font-light text-gray-400 italic mb-2">
                        {exp.projectSubtitle}
                      </div>
                    )}

                    <div className="h-[1px] w-full bg-white/5 group-hover:bg-white/10 transition-colors duration-500 my-3" />

                    {/* Work Bullet points list */}
                    <ul className="flex flex-col gap-2 pt-1">
                      {exp.points.map((point, ptIdx) => (
                        <li key={ptIdx} className="flex items-start gap-2.5 group/li">
                          {/* Premium list icon */}
                          <span className="flex-shrink-0 mt-0.5">
                            <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover/li:translate-x-1" fill="none" stroke={exp.color} viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                            </svg>
                          </span>
                          <span className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 font-light leading-relaxed">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
