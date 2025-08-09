import TiltedCard from "../ui/TiltedCard";
import { motion } from "framer-motion";
import { Award, Trophy, Star, Medal, ShieldCheck, Calendar } from "lucide-react";
import Particles from "../ui/Particles";

// ====== Static Data ======
const achievements = [
  {
    title: "Academic Excellence Award - KEC",
    year: "2023-24",
    description: "CGPA: 9.33",
    type: "academic",
    icon: <Star className="w-5 h-5" aria-label="Star Icon" />
  },
  {
    title: "Second I Prize in Inter Dept Programming Contest by KEC Coding Forum",
    year: "2024",
    description: "Competitive programming excellence",
    type: "competition",
    icon: <Trophy className="w-5 h-5" aria-label="Trophy Icon" />
  },
  {
    title: "Special Mention - Rascade Hackathon by VIT, Chennai",
    year: "2024",
    description: "Outstanding technical innovation",
    type: "hackathon",
    icon: <Award className="w-5 h-5" aria-label="Award Icon" />
  },
  {
    title: "Smart India Hackathon'24 PreFinalist",
    year: "2024",
    description: "Selected for national-level competition",
    type: "hackathon",
    icon: <Trophy className="w-5 h-5" aria-label="Trophy Icon" />
  },
  {
    title: "Secured I Prize in IEEE Day Idea Presentation",
    year: "2024",
    description: "Best technical presentation award",
    type: "presentation",
    icon: <Medal className="w-5 h-5" aria-label="Medal Icon" />
  },
  {
    title: "Secured I Place Inter Department Paper Presentation - Scientium'24",
    year: "2024",
    description: "Research paper presentation excellence",
    type: "presentation",
    icon: <Medal className="w-5 h-5" aria-label="Medal Icon" />
  }
];

const certifications = [
  {
    name: "MongoDB Associate Node Developer",
    provider: "MongoDB",
    year: "May 2025",
    status: "Completed"
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
    status: "Completed"
  }
];

// ====== Motion Variants ======
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

// ====== Utility Functions ======
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

// ====== Component ======
const AchievementsSection = () => {
  // LeetCode badge data
  const leetcodeBadges = [
    { src: "https://assets.leetcode.com/static_assets/marketing/lg365.png", alt: "365 Days Badge" },
    { src: "https://assets.leetcode.com/static_assets/others/lg25100.png", alt: "Top 100 Weekly Badge" },
    { src: "https://assets.leetcode.com/static_assets/others/lg2550.png", alt: "Top 50 Weekly Badge" },
    { src: "https://assets.leetcode.com/static_assets/marketing/2024-200-lg.png", alt: "2024 - 200 Questions" },
    { src: "https://assets.leetcode.com/static_assets/marketing/2024-100-lg.png", alt: "2024 - 100 Questions" },
    { src: "https://assets.leetcode.com/static_assets/marketing/2024-50-lg.png", alt: "2024 - 50 Questions" },
    { src: "https://leetcode.com/static/images/badges/dcc-2025-4.png", alt: "April 2025 DCC" },
    { src: "https://leetcode.com/static/images/badges/dcc-2025-3.png", alt: "March 2025 DCC" },
    { src: "https://leetcode.com/static/images/badges/dcc-2025-2.png", alt: "Feb 2025 DCC" },
    { src: "https://leetcode.com/static/images/badges/dcc-2025-1.png", alt: "Jan 2025 DCC" },
  ];
  return (
 <section id="achievements" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950 overflow-hidden">

      {/* Particles Background */}
      <div className="fixed inset-0 -z-10">
        <Particles
          particleCount={300}
          particleColors={["#00ffff", "#00ffea", "#0055ff"]}
          speed={0.1}
          particleSpread={12}
          particleBaseSize={120}
          alphaParticles={true}
          className="w-full h-full"
        />
      </div>      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title */}
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
            {/* LeetCode Badges Section */}
    <div className="mb-10 flex flex-col items-center">
      <h3 className="text-xl font-bold text-yellow-400 mb-4 flex items-center gap-2">
        LeetCode Badges
      </h3><div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-white mb-2">300+</div>
            <div className="text-purple-400 font-medium">LeetCode Problems Solved</div>
          </div>
      
      <div className="flex flex-wrap justify-center gap-2 md:gap-4">
        {leetcodeBadges.map((badge, idx) => (
          <TiltedCard
            key={idx}
            imageSrc={badge.src}
            altText={badge.alt}
            containerHeight="80px"
            containerWidth="80px"
            imageHeight="100px"
            imageWidth="100px"
            scaleOnHover={1.08}
            rotateAmplitude={10}
            showMobileWarning={false}
            showTooltip={true}
            captionText={badge.alt}
          />
        ))}
      </div>
      
    </div>

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
              <Award className="w-6 h-6 mr-3 text-yellow-500" aria-label="Awards" />
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
                  className="bg-neutral-950 border border-neutral-800 rounded-xl p-6 hover:border-yellow-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/10"
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
                          <Calendar className="w-4 h-4 mr-1" aria-label="Calendar" />
                          {achievement.year}
                        </span>
                      </div>
                      <p className="text-neutral-300 text-sm">{achievement.description}</p>
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
              <ShieldCheck className="w-6 h-6 mr-3 text-cyan-500" aria-label="Certifications" />
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
                  className="bg-neutral-950 border border-neutral-800 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-lg font-semibold text-white">{cert.name}</h4>
                    <span className={`px-3 py-1 text-xs font-medium rounded-full border ${getStatusColor(cert.status)}`}>
                      {cert.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-cyan-400 font-medium">{cert.provider}</p>
                    <span className="text-sm text-neutral-400 flex items-center">
                      <Calendar className="w-4 h-4 mr-1" aria-label="Calendar" />
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
          
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
