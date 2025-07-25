//src/Portfolio.js
import React, { useState, useEffect } from "react";
import Navbar from './components/Navbar';
import HeroSection from "./components/sections/HeroSection";
import projects from "./data/projects.json";
import ProjectSection from "./components/sections/ProjectSection";
import PixelCard from "./components/ui/PixelCard";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Download,
  ExternalLink,
  Moon,
  Sun,
  Code,
  Trophy,
  Award,
  Briefcase,
  User,
  Palette,
  Database,
  Globe,
} from "lucide-react";

const FloatingShape = ({ className, style }) => (
  <div
    className={`absolute rounded-full opacity-20 blur-md pointer-events-none ${className}`}
    style={style}
  />
  );

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);

 

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);


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

  const skills = [
    "Python",
    "React",
    "Django",
    "Tailwind CSS",
    "JavaScript",
    "MongoDB",
    "MySQL",
    "AWS",
    "Machine Learning",
    "Chrome APIs",
    "Node.js",
    "Express",
  ];
  const achievements = [
    {
      year: "2024",
      title: "SIH'24 Pre-Finalist",
      desc: "Selected for Smart India Hackathon final round",
    },
    {
      year: "2024",
      title: "Rascade Hackathon - Special Mention",
      desc: "Outstanding performance in technical innovation",
    },
    {
      year: "2024",
      title: "IEEE Day Presentation - 1st Prize",
      desc: "Best technical presentation award",
    },
    {
      year: "2024",
      title: "Scientium'24 - 1st Prize",
      desc: "First place in science and technology competition",
    },
    {
      year: "2024",
      title: "LeetCode Top 48%",
      desc: "300+ problems solved with consistent performance",
    },
    {
      year: "2024",
      title: "CodeTantra Award",
      desc: "Excellence in programming and problem-solving",
    },
  ];
  const certifications = [
    { name: "MongoDB Associate Developer", provider: "MongoDB", year: "2025" },
    {
      name: "AWS Cloud Practitioner",
      provider: "Amazon Web Services",
      year: "2024",
    },
    { name: "Intro to Machine Learning", provider: "Kaggle", year: "2024" },
    {
      name: "Privacy & Security in Online Social Media",
      provider: "NPTEL",
      year: "2024",
    },
    { name: "Python Programming", provider: "Guvi", year: "2024" },
    {
      name: "Python Fundamentals",
      provider: "Infosys Springboard",
      year: "2024",
    },
  ];
  const experiences = [
    {
      role: "Additional Treasurer",
      org: "CSE Coding Club",
      desc: "Leading coding activities and mentoring junior students in programming",
      year: "2025–26",
    },
    {
      role: "Member",
      org: "CSI @ KEC",
      desc: "Active participation in technical events and skill‑development programs",
      year: "2024–25",
    },
    {
      role: "Design Thinking Leader",
      org: "Overflowing Garbage Detector Project",
      desc: "Led team in developing innovative IoT solution for waste management",
      year: "2025",
    },
    {
      role: "Girls House Captain",
      org: "School Leadership",
      desc: "Managed house activities and represented students in school council",
      year: "High School",
    },
  ];
  const projects = [
    {
      name: "Freelancing Platform",
      description:
        "SIH'24 project connecting freelancers with clients, featuring real-time chat and project management.",
      tech: ["React", "MongoDB", "Python", "Express"],
      github: "#",
    },
    {
      name: "Grammar Checker Extension",
      description:
        "Chrome extension that helps users improve their writing with real-time grammar suggestions.",
      tech: ["JavaScript", "Chrome APIs", "HTML/CSS"],
      github: "#",
    },
    {
      name: "Admin-User Task System",
      description:
        "Full-stack application for task management with role-based access control.",
      tech: ["Django", "MySQL", "Bootstrap"],
      github: "#",
    },
    {
      name: "Event Management Portal",
      description:
        "MERN stack application for organizing and managing events with user registration.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      github: "#",
    },
    {
      name: "UI Design Projects",
      description:
        "Collection of UI/UX designs including Community Report, GoBus, and BookBay prototypes.",
      tech: ["Figma", "UI/UX", "Design"],
      github: "#",
    },
  ];


  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "dark" : ""
      }`}
    >
      <div className="bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white">
        <Navbar /> {/* Place vertically floating Navbar outside of top nav */}

      <nav className="fixed top-0 w-full bg-white/70 dark:bg-neutral-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Add logo/title or leave empty */}
            <div className="text-lg font-bold">My Portfolio</div>

            {/* Dark Mode Toggle */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => setDarkMode(!darkMode)}
              className="ml-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors"
            >
              {darkMode ? <Moon /> : <Sun />}
            </motion.button>
          </div>
        </div>
      </nav>

        <HeroSection/>

        {/* About Me Section */}
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center mb-0"
            >
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-5xl font-bold text-center mb-16 text-amber-600 dark:text-amber-400 text-shadow-animated"
              >
                About Me
              </motion.h2>
              <p className="text-base text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
                I'm an engineering student with a passion for Web Development,
                AI, and building useful tools. I focus on crafting practical,
                real-world solutions using Python, ML, and modern frontend
                stacks.
              </p>
            </motion.div>
          </div>
        </section>

        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Skills */}
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    delayChildren: 0.2,
                    staggerChildren: 0.1,
                  },
                },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="px-4 py-2 rounded-full text-center text-sm font-medium bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 shadow-sm"
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Achievements Section */}
        <section
          id="achievements"
          className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-100 dark:bg-neutral-800"
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-5xl font-bold text-center mb-16 text-amber-600 dark:text-amber-400 text-shadow-animated"
            >
              Achievements
            </motion.h2>

            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.2 },
                },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {achievements.map((achievement) => (
                <motion.div
                  key={achievement.title}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="p-6 bg-amber-100 dark:bg-amber-900/30 rounded-xl shadow hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-amber-700 dark:text-amber-400">
                      {achievement.year}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    {achievement.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-12 px-6">
          <ProjectSection projects={projects} />
        </section>

        {/* Certifications Section */}
        <section
          id="certifications"
          className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-100 dark:bg-neutral-800"
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-5xl font-bold text-center mb-16 text-amber-600 dark:text-amber-400 text-shadow-animated"
            >
              <Award className="w-8 h-8 mr-3 text-amber-600" />
              Certifications
            </motion.h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="bg-amber-100 dark:bg-amber-900/30 border border-neutral-200 dark:border-neutral-700 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center mb-3">
                    <Database className="w-6 h-6 text-amber-600 mr-3" />
                    <span className="text-sm text-neutral-500 dark:text-neutral-400">
                      {cert.year}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{cert.name}</h3>
                  <p className="text-amber-600 dark:text-amber-400 font-medium">
                    {cert.provider}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-5xl font-bold text-center mb-16 text-amber-600 dark:text-amber-400 text-shadow-animated"
            >
              <Briefcase className="w-8 h-8 mr-3 text-amber-600" />
              Roles & Experience
            </motion.h2>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.2 },
                },
              }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {experiences.map((exp) => (
                <motion.div
                  key={exp.role}
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                  className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-xl p-6 hover:shadow-lg transition-shadow flex flex-col gap-2"
                >
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-xl font-bold mr-2">{exp.role}</h3>
                    <span className="text-sm font-semibold text-amber-600 dark:text-amber-400 whitespace-nowrap">
                      {exp.year}
                    </span>
                  </div>
                  <p className="text-amber-600 dark:text-amber-400 font-medium">{exp.org}</p>
                  <p className="text-neutral-600 dark:text-neutral-300 text-sm">{exp.desc}</p>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-20 px-4 sm:px-6 lg:px-8 bg-stone-50 dark:bg-neutral-800"
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-5xl font-bold text-center mb-16 text-amber-600 dark:text-amber-400 text-shadow-animated"
            >
              <Mail className="w-8 h-8 mr-3 text-amber-600" />
              Contact Me
            </motion.h2>

            <div className="grid lg:grid-cols-2 gap-12 ">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white dark:bg-neutral-900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white dark:bg-neutral-900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white dark:bg-neutral-900"
                    />
                  </div>
                  <motion.button
                    onClick={handleFormSubmit}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg font-semibold hover:shadow-lg transition-shadow"
                  >
                    Send Message
                  </motion.button>
                </div>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      shubha.sv.shree@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      +91 86109 92902
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Erode, Tamil Nadu
                    </p>
                  </div>
                </div>
                <div className="flex space-x-4 pt-4">
                  <motion.a
                    href="https://www.linkedin.com/in/shubha-shree-sv/"
                    whileHover={{ scale: 1.1 }}
                    className="p-3 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="https://github.com/shubhashreesv/portfolio"
                    whileHover={{ scale: 1.1 }}
                    className="p-3 bg-neutral-800 text-white rounded-full hover:bg-neutral-700 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="https://leetcode.com/u/shubha_shree/"
                    whileHover={{ scale: 1.1 }}
                    className="p-3 bg-rose-600 text-white rounded-full hover:bg-rose-700 transition-colors"
                  >
                    <Code className="w-5 h-5" />
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-neutral-900 text-white">
          <div className="max-w-7xl mx-auto text-center">
            <p>
              &copy; {new Date().getFullYear()} Shubha Shree S V. All rights
              reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;
