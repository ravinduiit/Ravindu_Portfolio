import { motion } from "motion/react";
import {
  Code2,
  Server,
  Database,
  BrainCircuit,
  Wrench,
} from "lucide-react";

const skillGroups = [
  {
    title: "Frontend",
    icon: Code2,
    skills: [
      "React",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Vite",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      "Node.js",
      "Express.js",
      "Python",
      "FastAPI",
      "Laravel",
      "REST APIs",
      "PHP",
      "Java",
    ],
  },
  {
    title: "Database",
    icon: Database,
    skills: [
      "MongoDB",
      "MySQL",
      "SQLite",
      "Mongoose",
      "Database Design",
      "PostgreSQL",
    ],
  },
  {
    title: "AI / ML",
    icon: BrainCircuit,
    skills: [
      "Machine Learning",
      "LLMs",
      "RAG",
      "LangChain",
      "Chroma",
      "Ollama",
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "VS Code",
      "REST APIs",
      "Bitbucket",
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-t border-white/5 bg-[#0a0518] py-24 sm:py-32"
    >
      <div className="blob absolute right-0 top-1/4 h-80 w-80 rounded-full bg-purple-500/10 blur-[130px]" />
      <div className="blob-slow absolute left-0 bottom-1/4 h-72 w-72 rounded-full bg-fuchsia-500/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-purple-500" />

            <span className="text-sm font-medium uppercase tracking-[0.25em] text-fuchsia-400">
              Skills
            </span>
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Technologies I{" "}
            <span className="text-zinc-500">work with.</span>
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="glass group rounded-2xl bg-black/20 p-6 transition-all duration-300 hover:border-purple-400/30 hover:shadow-lg hover:shadow-purple-500/10"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-fuchsia-500/10 text-fuchsia-400 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                    <Icon size={21} />
                  </div>

                  <h3 className="text-lg font-semibold text-white">
                    {group.title}
                  </h3>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-zinc-400 transition-all duration-300 hover:border-purple-400/30 hover:bg-purple-500/10 hover:text-fuchsia-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
