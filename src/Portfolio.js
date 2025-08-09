// src/Portfolio.js
import React, { useState } from "react";
import Navbar from './components/Navbar';
import HeroSection from "./components/sections/HeroSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import ProjectSection from "./components/sections/ProjectSection";
import SkillsSection from "./components/sections/SkillsSection";
import AchievementsSection from "./components/sections/AchievementsSection";

import { motion } from "framer-motion";
import { Award, GraduationCap, Mail, Phone, MapPin, Linkedin, Github, Code } from "lucide-react";

const Portfolio = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const educationData = [
    {
      degree: "B.E. Computer Science and Engineering (Hons)",
      institution: "Kongu Engineering College",
      period: "2023 – 2027",
      cgpa: "9.16 (Current)",
      description: "Specialized in software development, data structures, and emerging technologies."
    },
    {
      degree: "Higher Secondary Education",
      institution: "Erode Hindu Kalvi Nilayam Mat. Hr. Sec. School",
      period: "2021 – 2023",
      cgpa: "HSC I: 95% | HSC II: 96.37%",
      description: "Strong foundation in mathematics, physics, and computer science."
    }
  ];

  return (
    <div className="min-h-screen dark bg-neutral-900 text-white">
      <div className="bg-neutral-900 text-white">
        <Navbar />

        <nav className="fixed top-0 w-full bg-neutral-900/80 backdrop-blur-md z-50 border-b border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="text-lg font-bold">My Portfolio</div>
            </div>
          </div>
        </nav>

        <HeroSection />

        <SkillsSection />

        <ExperienceSection />

        <ProjectSection />

        <AchievementsSection />

        {/* Education */}
        <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-900">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl font-bold text-center mb-16 text-white"
            >

              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Education
              </span>
            </motion.h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-4xl mx-auto space-y-8"
            >
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="bg-neutral-800 border border-neutral-700 rounded-xl p-8 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-start space-x-6">
                    <div className="p-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg text-white flex-shrink-0">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                        <h3 className="text-xl font-bold text-white">
                          {edu.degree}
                        </h3>
                        <span className="text-sm text-neutral-400 mt-1 sm:mt-0">
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-cyan-400 font-medium text-lg mb-2">
                        {edu.institution}
                      </p>
                      <p className="text-neutral-300 mb-3">
                        {edu.description}
                      </p>
                      <div className="inline-flex items-center px-3 py-1 bg-green-500/20 text-green-400 text-sm font-medium rounded-full">
                        <Award className="w-4 h-4 mr-1" />
                        {edu.cgpa}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-800">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl font-bold text-center mb-16 text-white"
            >
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Let's Connect
              </span>
            </motion.h2>

            <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
                  <p className="text-neutral-300 leading-relaxed mb-8">
                    I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology. Feel free to reach out!
                  </p>
                </div>

                <div className="space-y-6">
                  <motion.a
                    href="mailto:shubha.sv.shree@gmail.com"
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="flex items-center space-x-4 p-4 bg-neutral-900 border border-neutral-700 rounded-xl hover:border-cyan-500/30 transition-all duration-300"
                  >
                    <div className="p-3 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg text-white">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Email</p>
                      <p className="text-neutral-400 text-sm">shubha.sv.shree@gmail.com</p>
                    </div>
                  </motion.a>

                  <motion.a
                    href="tel:+918610992202"
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="flex items-center space-x-4 p-4 bg-neutral-900 border border-neutral-700 rounded-xl hover:border-cyan-500/30 transition-all duration-300"
                  >
                    <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg text-white">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Phone</p>
                      <p className="text-neutral-400 text-sm">+91 86109 92202</p>
                    </div>
                  </motion.a>

                  <motion.div
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="flex items-center space-x-4 p-4 bg-neutral-900 border border-neutral-700 rounded-xl"
                  >
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg text-white">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Location</p>
                      <p className="text-neutral-400 text-sm">Tamil Nadu, India</p>
                    </div>
                  </motion.div>
                </div>

                {/* Social Links */}
                <div className="pt-6">
                  <p className="text-white font-medium mb-4">Follow me on:</p>
                  <div className="flex space-x-4">
                    <motion.a
                      href="https://linkedin.com/in/shubhashreesv"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
                    >
                      <Linkedin className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href="https://github.com/shubhashreesv"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      className="p-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all"
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href="https://leetcode.com/shubha-shree"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="p-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all"
                    >
                      <Code className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-neutral-900 border border-neutral-700 rounded-xl p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div>
                    <label className="block text-white font-medium mb-2">Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-neutral-800 border border-neutral-600 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-neutral-800 border border-neutral-600 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Message</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="w-full px-4 py-3 bg-neutral-800 border border-neutral-600 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors resize-none"
                      required
                    ></textarea>
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all"
                  >
                    Send Message
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-neutral-900 border-t border-neutral-800">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-bold text-white mb-2">Shubha Shree S V</h3>
                <p className="text-neutral-400 text-sm">BE CSE'27 (Hons) | Full Stack Developer</p>
              </div>
              <div className="flex space-x-6">
                <a href="#about" className="text-neutral-400 hover:text-cyan-400 transition-colors text-sm">About</a>
                <a href="#experience" className="text-neutral-400 hover:text-cyan-400 transition-colors text-sm">Experience</a>
                <a href="#projects" className="text-neutral-400 hover:text-cyan-400 transition-colors text-sm">Projects</a>
                <a href="#contact" className="text-neutral-400 hover:text-cyan-400 transition-colors text-sm">Contact</a>
              </div>
            </div>
            <div className="border-t border-neutral-800 mt-8 pt-8 text-center">
              <p className="text-neutral-500 text-sm">
                &copy; {new Date().getFullYear()} Shubha Shree S V. Built with React & Tailwind CSS.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;
