import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Send, Mail, MapPin, Phone, Linkedin, CheckCircle2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { profile } from "../data/portfolio";

const inputClass =
  "peer w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 pt-6 pb-2 text-white outline-none transition focus:border-brand-400 focus:bg-white/[0.06] focus:shadow-[0_0_30px_-8px_rgba(139,92,246,0.7)]";
const labelClass =
  "pointer-events-none absolute left-4 top-4 text-sm text-zinc-500 transition-all peer-focus:top-2 peer-focus:text-xs peer-focus:text-brand-400 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs";

const contactRows = [
  { Icon: Mail, text: profile.email, href: `mailto:${profile.email}` },
  { Icon: Phone, text: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { Icon: MapPin, text: profile.location },
  {
    Icon: Linkedin,
    text: "linkedin.com/in/kashyap-hirani",
    href: profile.socials.linkedin,
    external: true,
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    // Opens the visitor's mail app with the message prefilled.
    // Replace with EmailJS / your own API for in-page sending.
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="section overflow-hidden">
      <SectionHeading
        eyebrow="contact"
        title="Let's build something great"
        subtitle="Looking for a Frontend Developer? Have a project in mind? My inbox is always open."
      />

      <div className="grid gap-10 lg:grid-cols-5">
        {/* info */}
        <Reveal direction="right" className="lg:col-span-2">
          <div className="glass h-full rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white">Get in touch</h3>
            <p className="mt-3 text-zinc-400">
              I'm currently open to full-time Frontend Developer roles.
            </p>

            <ul className="mt-8 space-y-5">
              {contactRows.map(({ Icon, text, href, external }) => (
                <li key={text} className="flex items-center gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-500/15 text-brand-300 ring-1 ring-brand-500/30">
                    <Icon size={18} />
                  </span>
                  {href ? (
                    <a
                      href={href}
                      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                      className="break-all transition-colors hover:text-white"
                    >
                      {text}
                    </a>
                  ) : (
                    <span>{text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* form */}
        <Reveal direction="left" className="lg:col-span-3">
          <form onSubmit={onSubmit} className="glass space-y-5 rounded-3xl p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <div className="relative">
                <input
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  placeholder=" "
                  required
                  className={inputClass}
                />
                <label className={labelClass}>Your name</label>
              </div>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  placeholder=" "
                  required
                  className={inputClass}
                />
                <label className={labelClass}>Your email</label>
              </div>
            </div>

            <div className="relative">
              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                placeholder=" "
                rows={6}
                required
                className={`${inputClass} resize-none`}
              />
              <label className={labelClass}>Your message</label>
            </div>

            <motion.button
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="btn-primary group w-full justify-center"
            >
              <AnimatePresence mode="wait" initial={false}>
                {sent ? (
                  <motion.span
                    key="sent"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="inline-flex items-center gap-2"
                  >
                    <CheckCircle2 size={16} /> Message ready!
                  </motion.span>
                ) : (
                  <motion.span
                    key="send"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="inline-flex items-center gap-2"
                  >
                    Send message
                    <Send
                      size={16}
                      className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
