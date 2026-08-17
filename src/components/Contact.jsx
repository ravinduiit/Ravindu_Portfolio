import { useState } from "react";
import { motion } from "motion/react";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  MessageSquare,
} from "lucide-react";

// Custom Inline SVGs for Social Icons
const GithubIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const XIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 24.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// Contact Methods Data
const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "ravindupathumiit@gmail.com",
    href: "mailto:ravindupathumiit@gmail.com",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-400/25",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+94 76 356 5501",
    href: "tel:+94763565501",
    color: "text-fuchsia-400",
    bg: "bg-fuchsia-500/10",
    border: "border-fuchsia-400/25",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Matara, Sri Lanka",
    href: "#",
    color: "text-zinc-400",
    bg: "bg-white/5",
    border: "border-white/10",
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/5 bg-[#07030f] py-24 sm:py-32"
    >
      {/* Background Animated Blobs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[-10%] top-1/4 h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[150px]"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[-10%] right-[-5%] h-[600px] w-[600px] rounded-full bg-fuchsia-600/10 blur-[150px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 md:mb-24"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-gradient-to-r from-purple-500 to-fuchsia-500" />
            <span className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-fuchsia-400">
              <MessageSquare size={14} /> Contact
            </span>
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Let's build something{" "}
            <span className="bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              extraordinary.
            </span>
          </h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          
          {/* Left Column: Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-6"
          >
            <motion.p variants={itemVariants} className="text-lg leading-relaxed text-zinc-400 mb-4">
              Whether you have a question, a project in mind, or just want to say hi, I'm always open to discussing new opportunities and architectural challenges.
            </motion.p>

            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={info.label}
                  variants={itemVariants}
                  href={info.href}
                  className="group relative flex items-center gap-6 overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-md transition-all duration-300 hover:border-purple-500/30 hover:bg-white/[0.04]"
                >
                  <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 ${info.bg} ${info.border} ${info.color}`}>
                    <Icon size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-medium uppercase tracking-wider text-zinc-500">
                      {info.label}
                    </p>
                    <p className="mt-1 text-lg font-semibold text-zinc-200 transition-colors group-hover:text-white">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}

            {/* Social Links Row (Using SVG Components) */}
            <motion.div variants={itemVariants} className="mt-4 flex gap-4">
              {[
                { icon: GithubIcon, href: "#" },
                { icon: LinkedinIcon, href: "#" },
                { icon: XIcon, href: "#" }, // Using X instead of the bird
              ].map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] text-zinc-400 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-purple-400"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <form
              onSubmit={handleSubmit}
              className="relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] p-8 backdrop-blur-md sm:p-10"
            >
              {/* Form Glow */}
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-purple-500/5 blur-[100px]" />
              
              <div className="relative z-10 grid gap-6 sm:grid-cols-2">
                
                {/* Name Input */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-zinc-400">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white placeholder:text-zinc-600 focus:border-purple-500/50 focus:outline-none focus:ring-1 focus:ring-purple-500/50 transition-colors"
                  />
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-zinc-400">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white placeholder:text-zinc-600 focus:border-purple-500/50 focus:outline-none focus:ring-1 focus:ring-purple-500/50 transition-colors"
                  />
                </div>

                {/* Subject Input */}
                <div className="space-y-2 sm:col-span-2">
                  <label htmlFor="subject" className="text-sm font-medium text-zinc-400">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="How can I help you?"
                    className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white placeholder:text-zinc-600 focus:border-purple-500/50 focus:outline-none focus:ring-1 focus:ring-purple-500/50 transition-colors"
                  />
                </div>

                {/* Message Textarea */}
                <div className="space-y-2 sm:col-span-2">
                  <label htmlFor="message" className="text-sm font-medium text-zinc-400">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white placeholder:text-zinc-600 focus:border-purple-500/50 focus:outline-none focus:ring-1 focus:ring-purple-500/50 transition-colors"
                  />
                </div>

                {/* Submit Button */}
                <div className="sm:col-span-2 mt-2">
                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-500 to-fuchsia-500 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-purple-500/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-fuchsia-500/40"
                  >
                    <span>Send Message</span>
                    <Send
                      size={18}
                      className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </button>
                </div>

              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Contact;