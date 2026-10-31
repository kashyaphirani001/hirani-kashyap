import { motion } from "framer-motion";
import { Briefcase, Trophy, GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { timeline } from "../data/portfolio";

const icons = {
  work: Briefcase,
  award: Trophy,
  education: GraduationCap,
};

const accents = {
  work: "text-brand-300 border-brand-500/60 shadow-[0_0_25px_-2px_rgba(139,92,246,0.7)]",
  award: "text-amber-300 border-amber-400/60 shadow-[0_0_25px_-2px_rgba(251,191,36,0.6)]",
  education: "text-cyan-300 border-cyan-400/60 shadow-[0_0_25px_-2px_rgba(34,211,238,0.6)]",
};

export default function Experience() {
  return (
    <section id="experience" className="section overflow-hidden">
      <SectionHeading
        eyebrow="experience & education"
        title="My journey so far"
        subtitle="Where I've worked, what I've won and where I studied."
      />

      <div className="relative mx-auto max-w-4xl">
        {/* animated vertical line */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
          className="absolute top-0 bottom-0 left-5 w-px origin-top bg-gradient-to-b from-brand-500 via-cyan-400 to-transparent md:left-1/2"
        />

        <div className="space-y-14">
          {timeline.map((e, i) => {
            const left = i % 2 === 0;
            const Icon = icons[e.type];
            return (
              <motion.div
                key={e.title}
                initial={{ opacity: 0, x: left ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`relative pl-14 md:w-1/2 md:pl-0 ${
                  left ? "md:pr-12" : "md:ml-auto md:pl-12"
                }`}
              >
                {/* node */}
                <span
                  className={`absolute top-1 left-0 grid h-10 w-10 place-items-center rounded-full border bg-black md:left-auto ${
                    accents[e.type]
                  } ${left ? "md:-right-5" : "md:-left-5"}`}
                >
                  <Icon size={16} />
                </span>

                <motion.div
                  whileHover={{ y: -6 }}
                  className="glass rounded-2xl p-6 transition-colors hover:border-brand-500/50"
                >
                  <span className="font-mono text-xs text-brand-400">
                    {e.period}
                  </span>
                  <h3 className="mt-2 text-xl font-bold text-white">{e.title}</h3>
                  <p className="text-sm text-cyan-300">{e.org}</p>

                  {e.points.length > 0 && (
                    <ul className="mt-4 space-y-2">
                      {e.points.map((p) => (
                        <li
                          key={p}
                          className="flex gap-3 text-sm leading-relaxed text-zinc-400"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  )}

                  {e.tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {e.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-white/5 px-3 py-1 font-mono text-xs text-zinc-300 ring-1 ring-white/10"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
