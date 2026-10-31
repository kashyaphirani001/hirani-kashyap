import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { skillGroups, techMarquee } from "../data/portfolio";

export default function Skills() {
  const loop = [...techMarquee, ...techMarquee];

  return (
    <section id="skills" className="section">
      <SectionHeading
        eyebrow="skills"
        title="Technologies I work with"
        subtitle="The tools I use every day to build fast, scalable and responsive interfaces."
      />

      {/* marquee */}
      <Reveal>
        <div className="relative mb-16 overflow-hidden py-3 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="flex w-max animate-marquee gap-4">
            {loop.map((t, i) => (
              <span
                key={i}
                className="glass rounded-full px-5 py-2 font-mono text-sm whitespace-nowrap text-zinc-300"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </Reveal>

      {/* cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => (
          <Reveal key={g.title} delay={i * 0.08}>
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="glass group relative h-full overflow-hidden rounded-2xl p-6 transition-colors hover:border-brand-500/50"
            >
              <div className="pointer-events-none absolute -top-20 -right-20 h-40 w-40 rounded-full bg-brand-500/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

              <div className="mb-6 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-500/15 text-brand-300 ring-1 ring-brand-500/30 transition-transform duration-500 group-hover:rotate-[360deg]">
                  <g.icon size={20} />
                </span>
                <h3 className="text-lg font-semibold text-white">{g.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {g.skills.map((s, j) => (
                  <motion.span
                    key={s}
                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + j * 0.06, duration: 0.4 }}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="rounded-full bg-white/5 px-3 py-1.5 text-sm text-zinc-300 ring-1 ring-white/10 transition-colors hover:bg-brand-500/20 hover:text-white hover:ring-brand-400/60"
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
