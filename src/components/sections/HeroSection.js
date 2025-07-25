// src/components/sections/HeroSection.jsx
import { motion } from "framer-motion";
import { Github, Linkedin, Code, Download } from "lucide-react";
import LetterGlitch from "../ui/LetterGlitch"; // ✅ import the glitch bg

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Glitch Background */}
      <div className="absolute inset-0 z-0">
        <LetterGlitch glitchSpeed={60} smooth outerVignette />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto relative z-10 text-center bg-black/60 dark:bg-slate-900/90 rounded-xl px-6 py-10 shadow-lg">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl font-bold mb-6 tracking-tight text-white drop-shadow-lg"
        >
          Shubha Shree S V
        </motion.h1>

        <p className="text-lg sm:text-xl text-slate-600 text-white dark:text-slate-300 mb-8 max-w-2xl mx-auto">
          KEC CSE'27 · Web Developer · Aspiring Data Scientist
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-4 mb-10">
          <motion.a
            href="https://www.linkedin.com/in/shubha-shree-sv/"
            whileHover={{ scale: 1.1 }}
            className="p-2 bg-slate-800 text-white rounded-full hover:bg-slate-700 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="https://github.com/shubhashreesv"
            whileHover={{ scale: 1.1 }}
            className="p-2 bg-zinc-800 text-white rounded-full hover:bg-zinc-700 transition-colors"
          >
            <Github className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="https://leetcode.com/u/shubha_shree/"
            whileHover={{ scale: 1.1 }}
            className="p-2 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-colors"
          >
            <Code className="w-5 h-5" />
          </motion.a>
        </div>

        {/* Resume Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center px-6 py-3 bg-white text-amber-600 font-semibold rounded-full hover:shadow-lg transition-all"
        >
          <Download className="w-5 h-5 mr-2" />
          Download Resume
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
