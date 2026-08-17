import { motion } from "motion/react";
import {
//   Github,
  ExternalLink,
  ArrowUpRight,
} from "lucide-react";

const projects = [
  {
    title: "TRANSQUIZX",
    category: "AI / Machine Learning",
    description:
      "An explainable AI powered personalized learning system that analyzes learning performance, generates adaptive quizzes and personalized content, and predicts learner knowledge levels.",
    technologies: [
      "React",
      "Python",
      "FastAPI",
      "Machine Learning",
      "LangChain",
      "RAG",
      "Chroma",
      "Ollama",
    ],
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    title: "MindVault",
    category: "AI / Machine Learning & Knowledge Management",
    description:
      "An explainable AI powered personalized learning system that analyzes learning performance, generates adaptive quizzes and personalized content, and predicts learner knowledge levels.",
    technologies: [
      "React",
      "Python",
      "FastAPI",
      "Machine Learning",
      "LangChain",
      "RAG",
      "Chroma",
      "Ollama",
    ],
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    title: "Debt Recovery System",
    category: "Enterprise Web Application",
    description:
      "A full stack enterprise system designed to manage debt recovery workflows, customer information and recovery processes for the SLT.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "MERN",
    ],
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    title: "Point of Sale System",
    category: "Full Stack Application",
    description:
      "A modern AI powered POS system for managing products, customers, carts, sales, payments and inventory.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "AI",
      "Express",
    ],
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    title: "Voucher Management System",
    category: "Web Application",
    description:
      "A web based voucher management platform with authentication, database management and administrative functionality.",
    technologies: [
      "Laravel",
      "MySQL",
      "JavaScript",
      "REST API",
    ],
    github: "#",
    demo: "#",
    featured: false,
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden border-t border-white/5 bg-[#0a0518] py-24 sm:py-32"
    >
      {/* Background */}
      <div className="blob absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-[150px]" />
      <div className="blob-slow absolute right-0 bottom-0 h-72 w-72 rounded-full bg-fuchsia-500/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-purple-500" />

              <span className="text-sm font-medium uppercase tracking-[0.25em] text-fuchsia-400">
                Projects
              </span>
            </div>

            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Things I've{" "}
              <span className="text-zinc-500">built.</span>
            </h2>
          </div>

        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              whileHover={{ y: -6 }}
              className={`glass group relative overflow-hidden rounded-2xl bg-black/20 p-6 transition-all duration-500 hover:border-purple-400/30 hover:shadow-xl hover:shadow-purple-500/10 sm:p-8 ${
                project.featured ? "md:min-h-[380px]" : ""
              }`}
            >
              {/* Hover Glow */}
              <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-purple-500/0 blur-[80px] transition-all duration-500 group-hover:bg-fuchsia-500/15" />

              <div className="relative z-10 flex h-full flex-col">
                {/* Top */}
                <div className="flex items-start justify-between gap-4">
                  <span className="text-xs font-medium uppercase tracking-wider text-fuchsia-400">
                    {project.category}
                  </span>

                  <ArrowUpRight
                    size={20}
                    className="text-zinc-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-fuchsia-400"
                  />
                </div>

                {/* Title */}
                <h3 className="mt-8 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-500">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-zinc-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-auto flex gap-3 pt-8">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-xs font-semibold text-zinc-300 transition-all duration-300 hover:border-white/20 hover:bg-white/5 hover:text-white"
                  >
                    {/* <Github size={15} /> */}
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-500 to-fuchsia-500 px-4 py-2 text-xs font-semibold text-white shadow-md shadow-purple-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-fuchsia-500/40"
                  >
                    <ExternalLink size={15} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
