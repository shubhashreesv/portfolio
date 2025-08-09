import { motion } from "framer-motion";
import projects from "../../data/projects.json";
import { ExternalLink, Github, Calendar, Tag } from "lucide-react";
import Particles from "../ui/Particles";

const ProjectsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const getCategoryColor = (category) => {
    const colorMap = {
      "Full Stack": "from-blue-500 to-cyan-500",
      "Backend": "from-green-500 to-emerald-500", 
      "Frontend": "from-purple-500 to-pink-500",
      "Extension": "from-orange-500 to-red-500",
      "Mobile": "from-indigo-500 to-purple-500"
    };
    return colorMap[category] || "from-gray-500 to-slate-500";
  };


  return (
  <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-neutral-900/90 overflow-hidden">
    {/* Particles Background (fixed, behind all content) */}
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Particles particleCount={350} particleColors={["#00ffff", "#00ffea", "#0055ff"]} speed={0.12} particleSpread={16} particleBaseSize={180} alphaParticles={true} className="w-full h-full" />
    </div>
    <div className="max-w-7xl mx-auto relative z-10">
  <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold text-center mb-16 text-white"
        >
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-neutral-800/80 border border-neutral-700 rounded-xl overflow-hidden hover:border-cyan-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 backdrop-blur"
            >
              {/* Category Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${getCategoryColor(project.category)} text-white`}>
                  {project.category}
                </span>
              </div>

              {/* Project Content */}
              <div className="p-6 pt-10">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.name}
                </h3>
                
                <p className="text-neutral-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech?.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-2 py-1 bg-neutral-700 hover:bg-neutral-600 text-neutral-300 text-xs rounded-md transition-colors flex items-center"
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-3">
                    {project.github && project.github !== "#" && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="p-2 bg-neutral-700 hover:bg-neutral-600 text-neutral-300 hover:text-white rounded-lg transition-all"
                      >
                        <Github className="w-4 h-4" />
                      </motion.a>
                    )}
                    {project.live && project.live !== "#" && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="p-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-all"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                    )}
                  </div>

                  {/* View Details Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all"
                  >
                    View Details
                  </motion.button>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/shubhashreesv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all shadow-lg"
          >
            <Github className="w-5 h-5 mr-2" />
            View More Projects
          </a>
        </motion.div>
  </div>
  </section>
  );
};

export default ProjectsSection;
