import { motion } from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  Download,
//   Github,
//   Linkedin,
  Mail,
} from "lucide-react";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#07030f]"
    >
      {/* Background */}
      <div className="absolute inset-0">
        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

        {/* Neon Purple Glow */}
        <div className="blob absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/10 blur-[120px]" />

        {/* Top Glow */}
        <div className="blob-slow absolute -right-40 -top-40 h-[400px] w-[400px] rounded-full bg-violet-600/15 blur-[100px]" />

        {/* Lower left ambient glow */}
        <div className="blob-slow absolute -bottom-32 -left-32 h-[350px] w-[350px] rounded-full bg-purple-500/10 blur-[110px]" />

        {/* Twinkling particles */}
        {[
          { top: "18%", left: "12%", size: 3, delay: 0 },
          { top: "28%", left: "82%", size: 2, delay: 0.6 },
          { top: "62%", left: "22%", size: 2, delay: 1.2 },
          { top: "72%", left: "68%", size: 3, delay: 0.3 },
          { top: "42%", left: "48%", size: 2, delay: 1.6 },
          { top: "85%", left: "88%", size: 2, delay: 0.9 },
        ].map((p, i) => (
          <span
            key={i}
            className="twinkle absolute rounded-full bg-fuchsia-300"
            style={{
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
              animationDelay: `${p.delay}s`,
              boxShadow: "0 0 8px 2px rgba(232,121,249,0.6)",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-24 lg:px-8">
        <div className="max-w-4xl">

          {/* Small Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-purple-500" />

            <span className="text-sm font-medium uppercase tracking-[0.25em] text-fuchsia-400">
              Software Engineer
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Hi, I'm{" "}
            <span className="gradient-text">
              Ravindu.
            </span>

            <br />
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-7xl lg:text-7xl"
          >
            I engineer systems
            <br />

            <span className="text-zinc-500">
              to solve real problems.
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg"
          >
            A problem solver at heart. I design scalable databases, develop intelligent software, and harness AI to simplify daily operational workflows into clean, automated digital systems.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            {/* Projects */}
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="group relative flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-purple-500 to-fuchsia-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-500/20 transition-shadow duration-300 hover:shadow-2xl hover:shadow-fuchsia-500/40"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative">Explore My Work</span>

              <ArrowRight
                size={17}
                className="relative transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.a>

            {/* CV */}
            <motion.a
              href="/Ravindu_Pathum_CV.pdf"
              download
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="glass flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-zinc-200 transition-all duration-300 hover:border-purple-400/30 hover:text-white hover:shadow-lg hover:shadow-purple-500/10"
            >
              <Download size={17} />

              Download CV
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 flex items-center gap-5"
          >
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 transition-colors duration-300 hover:text-white"
              aria-label="GitHub Profile"
            >
              <svg
                className="h-5 w-5 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>

            <a
              href="https://linkedin.com/in/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 transition-colors duration-300 hover:text-white"
              aria-label="LinkedIn Profile"
            >
              <svg
                className="h-5 w-5 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>

            <motion.a
              href="mailto:your-email@example.com"
              whileHover={{ scale: 1.15, y: -2 }}
              className="text-zinc-500 transition-colors duration-300 hover:text-fuchsia-400"
            >
              <Mail size={20} />
            </motion.a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-6 hidden items-center gap-3 text-xs uppercase tracking-widest text-zinc-600 transition-colors hover:text-zinc-300 md:flex"
        >
          <span>Scroll to explore</span>

          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          >
            <ArrowDown size={15} />
          </motion.span>
        </motion.a>
      </div>

      {/* Decorative Corner */}
      <div className="absolute bottom-0 right-0 hidden h-40 w-40 border-l border-t border-white/5 md:block" />
    </section>
  );
}

export default Hero;