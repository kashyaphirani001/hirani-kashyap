import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ParticlesBackground from "./components/ParticlesBackground";
import CursorGlow from "./components/CursorGlow";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

/** Full-screen intro loader shown for ~1.8s */
function Loader() {
  return (
    <motion.div
      key="loader"
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[100] grid place-items-center bg-black"
    >
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-gradient font-mono text-4xl font-bold"
        >
          {"</>"}
        </motion.div>
        <div className="mx-auto mt-6 h-[3px] w-48 overflow-hidden rounded-full bg-white/10">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="h-full bg-gradient-to-r from-brand-500 to-cyan-400"
          />
        </div>
        <p className="mt-4 font-mono text-xs tracking-widest text-zinc-500">
          Fronted Developer
        </p>
      </div>
    </motion.div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>

      <ParticlesBackground />
      <CursorGlow />

      {!loading && (
        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}
