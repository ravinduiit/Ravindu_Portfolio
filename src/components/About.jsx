import { motion } from "motion/react";
import {
  Code2,
  Database,
  BrainCircuit,
  Users,
  ArrowUpRight,
} from "lucide-react";

const highlights = [
  {
    icon: BrainCircuit,
    title: "AI & Intelligent Systems",
    description:
      "Transforming complex daily workflows into simple, automated solutions using modern AI tools and algorithms.",
  },
  {
    icon: Database,
    title: "Database Architecture",
    description:
      "Designing clean, efficient data models and robust backends structured to scale effortlessly under real-world loads.",
  },
  {
    icon: Code2,
    title: "Problem First Development",
    description:
      "Approaching projects as a problem solver first analyzing manual friction before writing a single line of code.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Thriving in collaborative environments through active communication, structured code, and cross-functional teamwork.",
  },
];

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#07030f] py-24 sm:py-32"
    >
      {/* Background Glow */}
      <div className="blob absolute left-0 top-1/3 h-72 w-72 rounded-full bg-purple-500/10 blur-[120px]" />
      <div className="blob-slow absolute right-0 bottom-0 h-64 w-64 rounded-full bg-fuchsia-500/5 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-purple-500" />

            <span className="text-sm font-medium uppercase tracking-[0.25em] text-fuchsia-400">
              About Me
            </span>
          </div>

          <h2 className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
           Engineering simple systems {" "}
            <span className="text-zinc-500">for complex workflows.</span>
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-lg leading-8 text-zinc-300">
              I consider myself a <b>problem solver before a developer</b>. Every repetitive task, inefficient routine, or real-world problem is an opportunity to build an elegant system.
            </p>

            <p className="mt-6 leading-7 text-zinc-500">
              My expertise centers on converting daily complexities into simplified, digital solutions using AI and intelligent software architecture. From designing scalable database schemas to writing clean, maintainable code, I focus on building systems that genuinely ease practical work.
            </p>

            <p className="mt-6 leading-7 text-zinc-500">
              I believe the strongest solutions emerge from effective teamwork working closely with stakeholders and developers to transform raw ideas into reliable, high impact products.
            </p>

            {/* Small CTA */}
            <a
              href="#experience"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-fuchsia-400"
            >
              Explore my experience

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </motion.div>

          {/* Highlights */}
          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="glass group rounded-2xl p-6 transition-all duration-300 hover:border-purple-400/30 hover:shadow-lg hover:shadow-purple-500/10"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-purple-400/25 bg-fuchsia-500/10 text-fuchsia-400 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-purple-400/20">
                    <Icon size={21} />
                  </div>

                  <h3 className="font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-zinc-500">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;