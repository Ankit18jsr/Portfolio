import { motion } from 'framer-motion';

const skillCategories = [
  {
    id: "data-science",
    title: "Data Science & Analytics",
    color: "#10b981", // Emerald
    accentText: "text-emerald-400",
    accentBg: "bg-emerald-400/5",
    accentBorder: "border-emerald-500/10",
    glowClass: "shadow-emerald-500/5 hover:shadow-emerald-500/15 hover:border-emerald-500/30",
    glowBackground: "from-emerald-500/10 via-transparent to-transparent",
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
      </svg>
    ),
    skills: ["Python", "SQL", "Pandas", "NumPy", "Data Cleaning", "Business insights", "Dashboard creation", "Data visualization"]
  },
  {
    id: "web-dev",
    title: "Web Development",
    color: "#8b5cf6", // Violet
    accentText: "text-violet-400",
    accentBg: "bg-violet-400/5",
    accentBorder: "border-violet-500/10",
    glowClass: "shadow-violet-500/5 hover:shadow-violet-500/15 hover:border-violet-500/30",
    glowBackground: "from-violet-500/10 via-transparent to-transparent",
    icon: (
      <svg className="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    skills: ["React.js", "JavaScript", "Tailwind CSS", "HTML5 & CSS", "Framer Motion", ""]
  },
  {
    id: "power-bi",
    title: "Power BI & Visualization",
    color: "#f59e0b", // Amber
    accentText: "text-amber-400",
    accentBg: "bg-amber-400/5",
    accentBorder: "border-amber-500/10",
    glowClass: "shadow-amber-500/5 hover:shadow-amber-500/15 hover:border-amber-500/30",
    glowBackground: "from-amber-500/10 via-transparent to-transparent",
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 12l3-3 3 3 4-4M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    skills: ["Power BI", "DAX Formulas", "Data Modeling", "Interactive Dashboards", "Tableau", "Excel"]
  },
  {
    id: "tools",
    title: "Tools & Ecosystem",
    color: "#0ea5e9", // Sky
    accentText: "text-sky-400",
    accentBg: "bg-sky-400/5",
    accentBorder: "border-sky-500/10",
    glowClass: "shadow-sky-500/5 hover:shadow-sky-500/15 hover:border-sky-500/30",
    glowBackground: "from-sky-500/10 via-transparent to-transparent",
    icon: (
      <svg className="w-6 h-6 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    skills: ["Git & GitHub", "VS Code", "Jupyter Notebook", "Excel", "Antigravity"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen py-32 px-6 flex items-center justify-center relative z-10 overflow-hidden">
      {/* Soft Ambient Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
        {/* Left Side Header */}
        <div className="col-span-1 lg:col-span-4 flex flex-col justify-start pt-4">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-4"
          >
            Skills
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
            Continuously learning and improving in Analytical thinking and Software Development to deliver impactful solutions.
          </motion.p>
        </div>

        {/* Right Side Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="col-span-1 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.id}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className={`group relative overflow-hidden bg-white/[0.015] backdrop-blur-lg border border-white/5 hover:border-white/10 rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-2xl transition-all duration-500 cursor-default ${category.glowClass}`}
            >
              {/* Internal Card Ambient Glow */}
              <div className={`absolute -right-24 -top-24 w-48 h-48 rounded-full bg-gradient-to-br ${category.glowBackground} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

              <div>
                {/* Icon & Category Tag */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl border border-white/5 bg-white/[0.02] flex items-center justify-center transition-colors duration-500 group-hover:bg-white/[0.04]`}>
                    {category.icon}
                  </div>
                  <h4 className="text-lg md:text-xl font-semibold tracking-tight text-white group-hover:text-gray-100 transition-colors">
                    {category.title}
                  </h4>
                </div>

                {/* Subtitle / Description */}
                <div className="h-[1px] w-full bg-white/5 group-hover:bg-white/10 transition-colors duration-500 mb-6" />

                {/* Interactive Pills */}
                <div className="flex flex-wrap gap-2 md:gap-2.5">
                  {category.skills.map((skill, index) => (
                    <motion.span
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      className={`px-3.5 py-2 text-xs font-mono rounded-full bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-white/12 text-gray-400 hover:text-white transition-all duration-300 cursor-expand block`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
