import { motion } from "framer-motion";
import { ArrowUp, Heart } from "lucide-react";
import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-zinc-500 md:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with React &amp;
          Tailwind
          <Heart size={12} className="mx-1 inline text-pink-400" />
        </p>

        <motion.a
          href="#home"
          whileHover={{ y: -4 }}
          className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-zinc-300 hover:text-white"
        >
          Back to top <ArrowUp size={14} />
        </motion.a>
      </div>
    </footer>
  );
}
