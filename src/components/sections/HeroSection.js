// src/components/sections/HeroSection.jsx
import { motion } from "framer-motion";
import { Github, Linkedin, Code, Download, Mail, Phone } from "lucide-react";
import LetterGlitch from "../ui/LetterGlitch"; // ✅ import the glitch bg

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Glitch Background */}
      <div className="absolute inset-0 z-0">
        <LetterGlitch glitchSpeed={60} smooth outerVignette />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto relative z-10 text-center bg-black/70 dark:bg-slate-900/90 rounded-xl px-8 py-12 shadow-2xl border border-cyan-500/20">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl font-bold mb-4 tracking-tight text-white drop-shadow-lg"
        >
          SHUBHA SHREE S V
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl sm:text-2xl text-cyan-400 font-semibold mb-6"
        >
          BE CSE'27 (Hons)
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-lg text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          I'm an aspiring developer passionate about learning emerging technologies and solving real-world problems, 
          continuously driven to improve skills through hands-on experience, project development, and collaboration.
        </motion.p>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-8 text-sm text-slate-400"
        >
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>shubha.sv.shree@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>+91 86109 92202</span>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center space-x-4 mb-10"
        >
          <motion.a
            href="https://linkedin.com/in/shubhashreesv"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/25"
          >
            <Linkedin className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="https://github.com/shubhashreesv"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, rotate: -5 }}
            className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-all shadow-lg hover:shadow-gray-500/25"
          >
            <Github className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="https://leetcode.com/shubha-shree"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="p-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-500/25"
          >
            <Code className="w-5 h-5" />
          </motion.a>
        </motion.div>

        {/* Resume Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(6, 182, 212, 0.3)" }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all shadow-lg"
        >
          <Download className="w-5 h-5 mr-2" />
          Download Resume
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
