import { motion } from "motion/react";
import {
  GraduationCap,
  CalendarDays,
  MapPin,
  BookOpen,
  Award,
  ShieldCheck
} from "lucide-react";

// Easily add or remove educational milestones here
const educationHistory = [
  {
    id: 1,
    type: "Undergraduated Degree",
    degree: "BSc (Hons) Software Engineering",
    institution: "IIT Campus",
    period: "2022 - 2026",
    description:
      "Focusing on advanced software engineering principles, developing scalable architectures, and currently building an AI-driven final year project. Mastering secure coding practices and handling complex multi-threaded systems.",
    focusAreas: [
      "Cyber Security",
      "Concurrent Programming",
      "Software Architecture",
      "Machine Learning",
      "System Design",
    ],
    icon: GraduationCap,
    glowColor: "group-hover:bg-fuchsia-500/15",
    iconColor: "text-fuchsia-400 bg-fuchsia-500/10 border-fuchsia-400/25",
  },
  {
    id: 2,
    type: "Professional Diploma",
    degree: "Diploma in English",
    institution: "British Way English Academy, Matara",
    period: "2022",
    description:
      "A comprehensive language diploma focused on enhancing English proficiency, covering advanced grammar, spoken fluency, and professional business communication.",
    focusAreas: [
      "Business English",
      "Spoken English",
      "Grammar & Composition",
      "Professional Communication",
    ],
    icon: Award,
    glowColor: "group-hover:bg-purple-500/15",
    iconColor: "text-purple-400 bg-purple-500/10 border-purple-400/25",
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden border-t border-white/5 bg-[#07030f] py-24 sm:py-32"
    >
      {/* Background Animated Blobs */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-purple-600/10 blur-[150px]"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute left-[-10%] bottom-1/4 h-80 w-80 rounded-full bg-fuchsia-600/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8 z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-gradient-to-r from-purple-500 to-fuchsia-500" />
            <span className="text-sm font-medium uppercase tracking-[0.25em] text-fuchsia-400">
              Education
            </span>
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            My academic{" "}
            <span className="bg-gradient-to-r from-zinc-400 to-zinc-600 bg-clip-text text-transparent">
              journey.
            </span>
          </h2>
        </motion.div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Vertical Timeline Line (Desktop only) */}
          <div className="absolute left-8 top-8 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-purple-500/50 via-white/10 to-transparent md:block" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-col gap-12"
          >
            {educationHistory.map((edu, index) => {
              const Icon = edu.icon;

              return (
                <motion.div
                  key={edu.id}
                  variants={itemVariants}
                  className="group relative flex flex-col gap-6 md:flex-row md:gap-10"
                >
                  {/* Timeline Dot & Icon */}
                  <div className="relative z-10 hidden md:flex md:flex-col items-center">
                    <div
                      className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${edu.iconColor}`}
                    >
                      <Icon size={30} />
                    </div>
                  </div>

                  {/* Mobile Icon (Only shows on small screens) */}
                  <div className="flex md:hidden items-center gap-4 mb-2">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl border ${edu.iconColor}`}>
                       <Icon size={24} />
                    </div>
                    <span className="text-sm font-medium text-fuchsia-400 uppercase tracking-wider">
                      {edu.type}
                    </span>
                  </div>

                  {/* Content Card */}
                  <div className="glass relative flex-1 overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-md transition-all duration-500 hover:border-purple-500/30 hover:bg-white/[0.04] sm:p-10">
                    
                    {/* Dynamic Card Glow */}
                    <div
                      className={`absolute -right-20 -top-20 h-64 w-64 rounded-full bg-purple-500/5 blur-[100px] transition-all duration-700 ${edu.glowColor}`}
                    />

                    <div className="relative z-10">
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div>
                          {/* Desktop Type Label */}
                          <span className="hidden md:block text-sm font-semibold uppercase tracking-wider text-fuchsia-400">
                            {edu.type}
                          </span>

                          <h3 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                            {edu.degree}
                          </h3>
                        </div>

                        {/* Status Badge */}
                        <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-medium text-zinc-300 shadow-inner">
                          <CalendarDays size={14} className="text-purple-400" />
                          {edu.period}
                        </div>
                      </div>

                      {/* Institution Details */}
                      <div className="mt-5 flex flex-wrap gap-6 text-sm text-zinc-400">
                        <span className="flex items-center gap-2">
                          <BookOpen size={16} className="text-zinc-500" />
                          {edu.type.includes("Degree") ? "Higher Education" : "Certification"}
                        </span>

                        <span className="flex items-center gap-2">
                          <MapPin size={16} className="text-zinc-500" />
                          {edu.institution}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="mt-6 max-w-3xl leading-relaxed text-zinc-400 group-hover:text-zinc-300 transition-colors">
                        {edu.description}
                      </p>

                      {/* Focus Areas (Tags) */}
                      <div className="mt-8 flex flex-wrap gap-2">
                        {edu.focusAreas.map((item) => (
                          <span
                            key={item}
                            className="rounded-lg border border-white/10 bg-black/20 px-3 py-1.5 text-xs font-medium text-zinc-400 transition-colors duration-300 group-hover:border-white/20 group-hover:text-zinc-200"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Education;