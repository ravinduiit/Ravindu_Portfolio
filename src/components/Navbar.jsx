import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/",
    symbol: "GH",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/",
    symbol: "in",
  },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Navbar */}
        <div className="mt-4 flex h-16 items-center justify-between rounded-2xl border border-white/10 bg-black/60 px-5 shadow-2xl shadow-black/20 backdrop-blur-xl">

          {/* Logo */}
          <a
            href="#home"
            onClick={handleNavClick}
            className="group flex items-center gap-2"
          >
            {/* Logo Box */}
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-fuchsia-500 text-sm font-bold text-white shadow-md shadow-purple-500/20 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-fuchsia-500/40 group-hover:scale-105">
              R
            </div>

            {/* Logo Text */}
            <span className="text-lg font-bold tracking-tight text-white">
              RAVINDU
              <span className="text-purple-500">.</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group relative rounded-lg px-3 py-2 text-sm font-medium text-zinc-400 transition-colors duration-300 hover:text-white"
              >
                {link.name}

                {/* Red Hover Line */}
                <span className="absolute bottom-1 left-1/2 h-px w-0 -translate-x-1/2 bg-purple-500 transition-all duration-300 group-hover:w-1/2" />
              </a>
            ))}
          </div>

          {/* Desktop Right Side */}
          <div className="hidden items-center gap-3 lg:flex">

            {/* Social Links */}
            <div className="flex items-center gap-1 border-r border-white/10 pr-3">

              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-9 min-w-9 items-center justify-center rounded-lg px-2 text-xs font-bold text-zinc-400 transition-all duration-300 hover:bg-white/5 hover:text-white"
                >
                  {social.symbol}
                </a>
              ))}

            </div>

            {/* Contact Button */}
            <a
              href="#contact"
              className="group flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-500 to-fuchsia-500 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-purple-500/10 transition-all duration-300 hover:shadow-lg hover:shadow-fuchsia-500/40"
            >
              Let's Talk

              <span className="text-base transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-lg text-zinc-300 transition-all duration-300 hover:border-purple-400/30 hover:bg-purple-500/10 hover:text-white lg:hidden"
          >
            {isOpen ? "×" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
                y: -10,
              }}
              animate={{
                opacity: 1,
                height: "auto",
                y: 0,
              }}
              exit={{
                opacity: 0,
                height: 0,
                y: -10,
              }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
              className="mt-2 overflow-hidden lg:hidden"
            >
              <div className="rounded-2xl border border-white/10 bg-black/90 p-3 shadow-2xl shadow-black/30 backdrop-blur-xl">

                {/* Mobile Navigation Links */}
                <div className="space-y-1">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={handleNavClick}
                      initial={{
                        opacity: 0,
                        x: -10,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: index * 0.04,
                        duration: 0.2,
                      }}
                      className="group flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-zinc-400 transition-all duration-300 hover:bg-white/5 hover:text-white"
                    >
                      <span>{link.name}</span>

                      <span className="text-zinc-600 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-purple-500">
                        ↗
                      </span>
                    </motion.a>
                  ))}
                </div>

                {/* Mobile Bottom Section */}
                <div className="mt-3 border-t border-white/10 pt-3">
                  <div className="flex items-center justify-between px-2">

                    {/* Social Links */}
                    <div className="flex items-center gap-2">

                      {socialLinks.map((social) => (
                        <a
                          key={social.name}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.name}
                          className="flex h-9 min-w-9 items-center justify-center rounded-lg border border-white/10 px-2 text-xs font-bold text-zinc-400 transition-all duration-300 hover:border-purple-400/30 hover:bg-fuchsia-500/10 hover:text-fuchsia-400"
                        >
                          {social.symbol}
                        </a>
                      ))}

                      {/* Email */}
                      <a
                        href="mailto:your-email@example.com"
                        aria-label="Email"
                        className="flex h-9 min-w-9 items-center justify-center rounded-lg border border-white/10 px-2 text-xs font-bold text-zinc-400 transition-all duration-300 hover:border-purple-400/30 hover:bg-fuchsia-500/10 hover:text-fuchsia-400"
                      >
                        @
                      </a>

                    </div>

                    {/* Mobile Contact */}
                    <a
                      href="#contact"
                      onClick={handleNavClick}
                      className="rounded-lg bg-gradient-to-r from-purple-500 to-fuchsia-500 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-purple-500/10 transition-all duration-300 hover:shadow-lg hover:shadow-fuchsia-500/40"
                    >
                      Let's Talk
                    </a>

                  </div>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

export default Navbar;
