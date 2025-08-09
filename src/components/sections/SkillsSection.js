import { motion } from 'framer-motion';
import FadeContent from '../ui/FadeContent';
import { skillsData } from '../../data/skills';
import { Code, Database, Cloud, Palette, Brain, Users, Settings, Trophy } from 'lucide-react';

const SkillsSection = () => {
  const getCategoryIcon = (category) => {
    const iconMap = {
      "Problem Solving": <Brain className="w-5 h-5" />,
      "Web Technologies": <Code className="w-5 h-5" />,
      "Backend Development": <Settings className="w-5 h-5" />,
      "Databases": <Database className="w-5 h-5" />,
      "DevOps & Cloud": <Cloud className="w-5 h-5" />,
      "Design & Tools": <Palette className="w-5 h-5" />,
      "Others": <Trophy className="w-5 h-5" />,
      "Soft Skills": <Users className="w-5 h-5" />
    };
    return iconMap[category] || <Code className="w-5 h-5" />;
  };

  const getCategoryColor = (category) => {
    const colorMap = {
      "Problem Solving": "from-purple-500 to-pink-500",
      "Web Technologies": "from-blue-500 to-cyan-500", 
      "Backend Development": "from-green-500 to-emerald-500",
      "Databases": "from-orange-500 to-red-500",
      "DevOps & Cloud": "from-indigo-500 to-purple-500",
      "Design & Tools": "from-pink-500 to-rose-500",
      "Others": "from-yellow-500 to-orange-500",
      "Soft Skills": "from-teal-500 to-green-500"
    };
    return colorMap[category] || "from-gray-500 to-slate-500";
  };

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-800"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold text-center mb-16 text-white"
        >
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Skills & Technologies
          </span>
        </motion.h2>

        {/* Skills categories */}
        <FadeContent>
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {Object.entries(skillsData).map(([category, skills]) => (
              <motion.div
                key={category}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="bg-neutral-900 border border-neutral-700 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
              >
                {/* Category header */}
                <div className="flex items-center mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${getCategoryColor(category)} text-white mr-3`}>
                    {getCategoryIcon(category)}
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {category}
                  </h3>
                </div>

                {/* Skills list */}
                <div className="space-y-2">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-center"
                    >
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-neutral-300 text-sm hover:text-white transition-colors">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Skill count badge */}
                <div className="mt-4 pt-3 border-t border-neutral-700">
                  <span className="text-xs text-neutral-500">
                    {skills.length} {skills.length === 1 ? 'skill' : 'skills'}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </FadeContent>
      </div>
    </section>
  );
};

export default SkillsSection;
