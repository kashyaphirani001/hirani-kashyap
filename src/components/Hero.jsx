import { motion } from "framer-motion";
import { ArrowRight, Download, Linkedin, Mail, Phone, ChevronDown } from "lucide-react";
import { profile } from "../data/portfolio";
import useTypewriter from "../hooks/useTypewriter";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};
const item = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const role = useTypewriter(profile.roles);
  const [first, ...rest] = profile.name.split(" ");

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24"
    >
      {/* backdrop */}
      <div className="grid-bg absolute inset-0" />
      <div className="absolute -top-40 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-brand-600/20 blur-[140px]" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-2">
        {/* left: text */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div
            variants={item}
            className="glass inline-flex items-center gap-3 rounded-full px-4 py-2 text-xs text-zinc-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-emerald-400" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to Frontend Developer roles
          </motion.div>

          <motion.p variants={item} className="mt-8 font-mono text-brand-400">
            Hi, my name is
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-2 text-5xl leading-tight font-extrabold tracking-tight text-white md:text-7xl"
          >
            {first} <span className="text-gradient">{rest.join(" ")}</span>
          </motion.h1>

          <motion.h2
            variants={item}
            className="mt-4 h-10 font-mono text-xl text-zinc-300 md:text-3xl"
          >
            {role}
            <span className="ml-1 inline-block h-6 w-[3px] translate-y-1 animate-blink bg-brand-400 md:h-8" />
          </motion.h2>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400"
          >
            {profile.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary group">
              View my work
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a href={profile.resume} download="Kashyap_Hirani_Resume.pdf" className="btn-ghost">
              <Download size={16} /> Download Resume
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex items-center gap-4">
            {[
              { Icon: Linkedin, href: profile.socials.linkedin, label: "LinkedIn", external: true },
              { Icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
              { Icon: Phone, href: `tel:${profile.phone.replace(/\s/g, "")}`, label: "Phone" },
            ].map(({ Icon, href, label, external }) => (
              <motion.a
                key={label}
                href={href}
                aria-label={label}
                {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                whileHover={{ y: -4, scale: 1.1 }}
                className="glass grid h-11 w-11 place-items-center rounded-full text-zinc-300 transition-colors hover:border-brand-400 hover:text-white"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* right: floating code card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: 4 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden lg:block"
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-brand-500/30 via-cyan-400/10 to-pink-500/20 blur-3xl" />

          <div className="relative animate-float">
            <div className="glass overflow-hidden rounded-2xl shadow-2xl shadow-brand-900/40">
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-red-500/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <span className="h-3 w-3 rounded-full bg-green-500/80" />
                <span className="ml-3 font-mono text-xs text-zinc-500">
                  kashyap.tsx
                </span>
              </div>
              <pre className="p-6 font-mono text-sm leading-7">
                <code>
                  <div>
                    <span className="text-pink-400">const</span>
                    <span className="text-cyan-300"> developer</span>
                    <span className="text-zinc-400"> = {"{"}</span>
                  </div>
                  <div className="pl-6">
                    <span className="text-zinc-300">name:</span>{" "}
                    <span className="text-emerald-300">"{profile.name}"</span>,
                  </div>
                  <div className="pl-6">
                    <span className="text-zinc-300">role:</span>{" "}
                    <span className="text-emerald-300">"Frontend Developer"</span>,
                  </div>
                  <div className="pl-6">
                    <span className="text-zinc-300">experience:</span>{" "}
                    <span className="text-brand-300">3.5</span>
                    <span className="text-zinc-500"> /* years */</span>,
                  </div>
                  <div className="pl-6">
                    <span className="text-zinc-300">stack:</span>{" "}
                    <span className="text-amber-300">
                      ["ReactJs", "NextJs", "Angular" , "TypeScript"]
                    </span>
                    ,
                  </div>
                  <div className="pl-6">
                    <span className="text-zinc-300">ai:</span>{" "}
                    <span className="text-amber-300">["LLM", "SSE"]</span>,
                  </div>
                  <div className="pl-6">
                    <span className="text-pink-400">hireMe</span>
                    <span className="text-zinc-400">: </span>
                    <span className="text-cyan-300">() =&gt;</span>{" "}
                    <span className="text-emerald-300">"yes 🚀"</span>
                  </div>
                  <div className="text-zinc-400">{"};"}</div>
                </code>
              </pre>
            </div>

            {/* floating chips */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="glass absolute -top-6 -right-6 rounded-xl px-4 py-2 font-mono text-xs text-cyan-300"
            >
              &lt;React /&gt;
            </motion.div>
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="glass absolute -bottom-6 -left-6 rounded-xl px-4 py-2 font-mono text-xs text-pink-300"
            >
              🏆 Brainathon 2023 · 1st
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.a
        href="#about"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-500 hover:text-white"
        aria-label="Scroll down"
      >
        <ChevronDown />
      </motion.a>
    </section>
  );
}
