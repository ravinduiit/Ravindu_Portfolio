import { motion } from "motion/react";
import { BriefcaseBusiness, MapPin } from "lucide-react";

const experiences = [
  {
    period: "May 2025 — Present",
    role: "Freelance Software Developer",
    company: "Sri Lanka Telecom PLC",
    location: "Sri Lanka Telecom PLC Colombo, Sri Lanka",
    description:
      "Developing web applications and software solutions for different business requirements, with a focus on full stack development, system design and practical user experiences.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Laravel",
      "PostgreSQL",
      "Python",
    ],
  },

  {
    period: "May 2025 — Present",
    role: "Freelance Software Developer and Project Manager",
    company: "CodeWave Solutions",
    location: "Matara, Sri Lanka",
    description:
      "Architecting, developing, and maintaining AI powered POS, Employee Management, Reservation, Booking, and LMS platforms tailored for retail, hospitality, transport, and education. Focused on full stack engineering",
    technologies: [
      "React",
      "Node.js",
      "Next.js",
      "MongoDB",
      "Laravel",
      "PostgreSQL",
      "Python",
    ],
  },

  {
    period: "May 2024 — May 2025",
    role: "Intern Software Engineer",
    company: "Sri Lanka Telecom PLC",
    location: "Sri Lanka",
    description:
      "Worked on enterprise software development and contributed to the Debt Recovery System and Voucher Management System. Worked across frontend, backend and database development while collaborating with a development team.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "MERN",
      "Laravel",
      "Python",
      "MySQL",
      "PostgreSQL",
      "Git",
    ],
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden border-t border-white/5 bg-[#07030f] py-24 sm:py-32"
    >
      <div className="blob absolute right-0 top-0 h-80 w-80 rounded-full bg-purple-500/5 blur-[130px]" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-purple-500" />

            <span className="text-sm font-medium uppercase tracking-[0.25em] text-fuchsia-400">
              Experience
            </span>
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Where I've{" "}
            <span className="text-zinc-500">worked.</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-[7px] top-2 hidden h-full w-px bg-gradient-to-b from-purple-500 via-white/10 to-transparent md:block" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.period}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                className="relative md:pl-12"
              >
                {/* Timeline Dot */}
                <div className="pulse-glow absolute left-0 top-1 hidden h-[15px] w-[15px] rounded-full border-2 border-purple-500 bg-[#07030f] shadow-[0_0_12px_2px_rgba(168,85,247,0.5)] md:block" />

                <div className="glass rounded-2xl p-6 transition-all duration-300 hover:border-purple-400/30 hover:shadow-lg hover:shadow-purple-500/10 sm:p-8">
                  {/* Period */}
                  <span className="text-sm font-medium text-fuchsia-400">
                    {experience.period}
                  </span>

                  {/* Role */}
                  <h3 className="mt-3 text-2xl font-bold text-white">
                    {experience.role}
                  </h3>

                  {/* Company */}
                  <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-zinc-500">
                    <span className="flex items-center gap-2">
                      <BriefcaseBusiness size={15} />
                      {experience.company}
                    </span>

                    <span className="flex items-center gap-2">
                      <MapPin size={15} />
                      {experience.location}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mt-6 max-w-3xl leading-7 text-zinc-500">
                    {experience.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {experience.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-zinc-400"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;

