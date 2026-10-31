import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { profile, stats } from "../data/portfolio";

function Counter({ to, suffix = "", decimals = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => setVal(v),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref}>
      {val.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default function About() {
  const initials = profile.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <section id="about" className="section overflow-hidden">
      <SectionHeading
        eyebrow="about me"
        title="Building interfaces that feel effortless"
        subtitle="A quick intro to who I am and what drives me."
      />

      <div className="grid items-center gap-14 lg:grid-cols-5">
        {/* avatar */}
        <Reveal direction="right" className="lg:col-span-2">
          <div className="relative mx-auto aspect-square w-72 md:w-80">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-2 rounded-[2rem] bg-[conic-gradient(from_0deg,#8b5cf6,#22d3ee,#f472b6,#8b5cf6)] opacity-70 blur-md"
            />
            <div className="relative grid h-full w-full place-items-center overflow-hidden rounded-[2rem] border border-white/10 bg-ink-700">
              <span className="text-gradient text-8xl font-extrabold">
                {initials}
              </span>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              {/* To use your photo, replace the block above with:
                  <img src="/me.jpg" alt={profile.name} className="h-full w-full object-cover" /> 
                  */}
            </div>
          </div>
        </Reveal>

        {/* text */}
        <div className="lg:col-span-3">
          {profile.about.map((p, i) => (
            <Reveal key={i} delay={i * 0.15} direction="left">
              <p className="mb-5 text-lg leading-relaxed text-zinc-400">{p}</p>
            </Reveal>
          ))}

          <Reveal delay={0.3} direction="left">
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2">
                <MapPin size={14} className="text-brand-400" />
                {profile.location}
              </span>
              <a
                href={`mailto:${profile.email}`}
                className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 transition-colors hover:text-white"
              >
                <Mail size={14} className="text-brand-400" />
                {profile.email}
              </a>
              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 transition-colors hover:text-white"
              >
                <Phone size={14} className="text-brand-400" />
                {profile.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      {/* stats */}
      <div className="mt-20 grid grid-cols-2 gap-5 md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -6 }}
              className="glass rounded-2xl p-6 text-center transition-colors hover:border-brand-500/50 h-full"
            >
              <div className="text-gradient text-4xl font-extrabold md:text-5xl">
                <Counter to={s.value} suffix={s.suffix} decimals={s.decimals} />
              </div>
              <p className="mt-2 text-sm text-zinc-400">{s.label}</p>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
