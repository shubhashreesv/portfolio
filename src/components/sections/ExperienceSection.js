import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import Particles from "../ui/Particles";

const ExperienceSection = () => {
  const experiences = [
    {
      role: "Intern",
      company: "Gen AI Consortium",
      period: "Nov 2024 – Apr 2025",
      location: "Remote",
      description: "Working on cutting-edge AI projects and gaining hands-on experience with generative AI technologies.",
      type: "internship",
      current: false
    },
    {
      role: "Treasurer",
      company: "CSE Coding Club",
      period: "2025 – Present",
      location: "KEC",
      description: "Department Coding Club",
      type: "leadership",
      current: true
    },
    {
      role: "Intern Trainee",
      company: "Nutz Technovation Pvt. Ltd.",
      period: "Jul 2024",
      location: "Remote",
      description: "Gained experience in modern web development technologies and contributed to real-world projects.",
      type: "internship",
      current: false
    },
    {
      role: "Executive Member",
      company: "CSE Coding Club",
      period: "2024 – 2025",
      location: "KEC",
      description: "Organized coding competitions, hackathons and technical workshops for fellow students.",
      type: "leadership",
      current: false
    },
    {
      role: "Member",
      company: "Computer Society of India, KEC",
      period: "2024 – 2025",
      location: "KEC",
      description: "Active participation in technical events and skill-development programs.",
      type: "membership",
      current: false
    }
  ];

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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'internship':
        return 'from-blue-500 to-cyan-500';
      case 'leadership':
        return 'from-purple-500 to-pink-500';
      case 'membership':
        return 'from-green-500 to-emerald-500';
      default:
        return 'from-gray-500 to-slate-500';
    }
  };

  const getTypeIcon = (type) => {
    return <Briefcase className="w-4 h-4" />;
  };

  return (
    <section id="experience" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-neutral-900 overflow-hidden">
      {/* Particles Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <Particles particleCount={200} particleColors={["#00ffff", "#00ffea", "#0055ff"]} speed={0.08} particleSpread={10} particleBaseSize={100} alphaParticles={true} className="w-full h-full" />
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
            Roles & Experience
          </span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-blue-600 hidden md:block"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative flex items-start space-x-6 md:space-x-8"
              >
                {/* Timeline dot */}
                <div className="relative flex-shrink-0 hidden md:block">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${getTypeColor(exp.type)} flex items-center justify-center shadow-lg`}>
                    <div className="text-white">
                      {getTypeIcon(exp.type)}
                    </div>
                  </div>
                  {exp.current && (
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white animate-pulse">
                      <div className="w-full h-full bg-green-400 rounded-full animate-ping"></div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-neutral-800 border border-neutral-700 rounded-xl p-6 shadow-xl hover:shadow-2xl hover:border-cyan-500/30 transition-all duration-300"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">
                          {exp.role}
                        </h3>
                        <p className="text-cyan-400 font-medium text-lg">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex flex-col sm:items-end mt-2 sm:mt-0">
                        <div className="flex items-center text-sm text-neutral-400 mb-1">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.period}
                          {exp.current && (
                            <span className="ml-2 px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                              Current
                            </span>
                          )}
                        </div>
                        <div className="flex items-center text-sm text-neutral-400">
                          <MapPin className="w-4 h-4 mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-neutral-300 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Mobile timeline indicator */}
                    <div className="md:hidden mt-4 flex items-center">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${getTypeColor(exp.type)} mr-2`}></div>
                      <span className="text-xs text-neutral-500 capitalize">{exp.type}</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;

