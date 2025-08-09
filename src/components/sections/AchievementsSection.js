import { motion } from "framer-motion";
import { Award, Trophy, Star, Medal, Certificate, Calendar } from "lucide-react";

const AchievementsSection = () => {
  const achievements = [
    {
      title: "Academic Excellence Award - KEC",
      year: "2023-24",
      description: "CGPA: 9.33",
      type: "academic",
      icon: <Star className="w-5 h-5" />
    },
    {
      title: "Second I Prize in Inter Dept Programming Contest by KEC Coding Forum",
      year: "2024",
      description: "Competitive programming excellence",
      type: "competition",
      icon: <Trophy className="w-5 h-5" />
    },
    {
      title: "Special Mention - Rascade Hackathon by VIT, Chennai",
      year: "2024",
      description: "Outstanding technical innovation",
      type: "hackathon",
      icon: <Award className="w-5 h-5" />
    },
    {
      title: "Smart India Hackathon'24 PreFinalist",
      year: "2024",
      description: "Selected for national-level competition",
      type: "hackathon",
      icon: <Trophy className="w-5 h-5" />
    },
    {
      title: "Secured I Prize in IEEE Day Idea Presentation",
      year: "2024",
      description: "Best technical presentation award",
      type: "presentation",
      icon: <Medal className="w-5 h-5" />
    },
    {
      title: "Secured I Place Inter Department Paper Presentation - Scientium'24",
      year: "2024",
      description: "Research paper presentation excellence",
      type: "presentation",
      icon: <Medal className="w-5 h-5" />
    }
  ];

  const certifications = [
    {
      name: "MongoDB Associate Node Developer",
      provider: "MongoDB",
      year: "May 2025",
      status: "Upcoming"
    },
    {
      name: "AWS Cloud Practitioner (Cloud Quest)",
      provider: "Amazon Web Services",
      year: "2024",
      status: "Completed"
    },
    {
      name: "Intro to Machine Learning",
      provider: "Kaggle",
      year: "2024",
      status: "Completed"
    },
    {
      name: "Privacy and Security in Social Media",
      provider: "NPTEL",
      year: "2025",
      status: "In Progress"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const getTypeColor = (type) => {
    const colorMap = {
      academic: "from-blue-500 to-cyan-500",
      competition: "from-purple-500 to-pink-500",
      hackathon: "from-orange-500 to-red-500",
      presentation: "from-green-500 to-emerald-500"
    };
    return colorMap[type] || "from-gray-500 to-slate-500";
  };

  const getStatusColor = (status) => {
    const colorMap = {
      "Completed": "bg-green-500/20 text-green-400 border-green-500/30",
      "In Progress": "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
      "Upcoming": "bg-blue-500/20 text-blue-400 border-blue-500/30"
    };
    return colorMap[status] || "bg-gray-500/20 text-gray-400 border-gray-500/30";
  };

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-800">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold text-center mb-16 text-white"
        >
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Achievements & Certifications
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Awards & Achievements */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-white mb-8 flex items-center"
            >
              <Award className="w-6 h-6 mr-3 text-yellow-500" />
              Awards & Achievements
            </motion.h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="bg-neutral-900 border border-neutral-700 rounded-xl p-6 hover:border-yellow-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/10"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${getTypeColor(achievement.type)} text-white flex-shrink-0`}>
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-lg font-semibold text-white leading-tight">
                          {achievement.title}
                        </h4>
                        <span className="text-sm text-neutral-400 flex items-center ml-4">
                          <Calendar className="w-4 h-4 mr-1" />
                          {achievement.year}
                        </span>
                      </div>
                      <p className="text-neutral-300 text-sm">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Certifications */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-white mb-8 flex items-center"
            >
              <Certificate className="w-6 h-6 mr-3 text-cyan-500" />
              Certifications
            </motion.h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: -10 }}
                  className="bg-neutral-900 border border-neutral-700 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-lg font-semibold text-white">
                      {cert.name}
                    </h4>
                    <span className={`px-3 py-1 text-xs font-medium rounded-full border ${getStatusColor(cert.status)}`}>
                      {cert.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-cyan-400 font-medium">
                      {cert.provider}
                    </p>
                    <span className="text-sm text-neutral-400 flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {cert.year}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Additional Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-white mb-2">300+</div>
            <div className="text-purple-400 font-medium">LeetCode Problems Solved</div>
          </div>
          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-white mb-2">9.33</div>
            <div className="text-blue-400 font-medium">Current CGPA</div>
          </div>
          <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-white mb-2">5+</div>
            <div className="text-green-400 font-medium">Major Projects</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;

