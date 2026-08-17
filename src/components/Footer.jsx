import { ArrowUp } from "lucide-react";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/5 bg-[#07030f] py-8 text-zinc-500">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-center text-sm sm:flex-row sm:text-left lg:px-8">
        {/* Copyright */}
        <p className="text-zinc-400">
          © {new Date().getFullYear()} Architected & Built with precision.
        </p>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-xs font-medium text-zinc-400 backdrop-blur-md transition-all duration-300 hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-white"
        >
          <span>Back to top</span>
          <ArrowUp
            size={14}
            className="transition-transform duration-300 group-hover:-translate-y-1"
          />
        </button>
      </div>
    </footer>
  );
}

export default Footer;