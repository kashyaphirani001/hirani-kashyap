import { motion } from "framer-motion";
import { Building2, FolderCode } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { projects } from "../data/portfolio";

function ProjectCard({ project, index }) {
  // cursor-follow spotlight
  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <Reveal delay={(index % 2) * 0.12}>
      <motion.article
        onMouseMove={handleMove}
        whileHover={{ y: -10 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="glass group relative h-full overflow-hidden rounded-3xl p-1"
      >
        {/* spotlight */}
        <div
          className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(400px circle at var(--x) var(--y), rgba(139,92,246,0.18), transparent 60%)",
          }}
        />

        {/* preview */}
        <div
          className={`relative grid h-44 place-items-center overflow-hidden rounded-[1.35rem] bg-gradient-to-br ${project.accent}`}
        >
          <div className="grid-bg absolute inset-0 opacity-60" />
          <motion.div
            whileHover={{ rotate: 8, scale: 1.15 }}
            className="relative grid h-20 w-20 place-items-center rounded-2xl border border-white/20 bg-black/40 text-white backdrop-blur"
          >
            <FolderCode size={34} />
          </motion.div>
          <span className="absolute top-4 left-4 font-mono text-xs text-white/60">
            0{index + 1}
          </span>
          <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-black/40 px-3 py-1 text-xs text-white/80 ring-1 ring-white/15 backdrop-blur">
            <Building2 size={12} /> {project.company}
          </span>
        </div>

        <div className="relative p-6">
          <h3 className="text-2xl font-bold text-white transition-colors group-hover:text-brand-300">
            {project.title}
          </h3>

          <p className="mt-3 leading-relaxed text-zinc-400">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span
                key={t}
                className="rounded-full bg-white/5 px-3 py-1 font-mono text-xs text-brand-300 ring-1 ring-white/10"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.article>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <SectionHeading
        eyebrow="projects"
        title="Featured work"
        subtitle="Products I've built and shipped at Brainvire Infotech."
      />

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
