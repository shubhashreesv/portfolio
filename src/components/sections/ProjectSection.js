import PixelCard from "../ui/PixelCard";
import projects from "../../data/projects.json";
import { ExternalLink, Github } from "lucide-react";
import Orb from "../ui/Orb"; // adjust the path if needed

const ProjectsSection = () => {
  return (
    <section className="relative bg-[#1a1a1a] border-4 border-[#5f5f5f] rounded-none p-6 sm:p-10 overflow-hidden">
      
      {/* Orb Background */}
      <div className="absolute inset-0 z-0">
        <Orb hue={240} hoverIntensity={0.25} rotateOnHover={true} forceHoverState={false} />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-white font-mono tracking-wider">
          Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <PixelCard key={index} variant={project.variant}>
              <div className="flex flex-col items-center justify-between h-full bg-[#1f1f1f]/80 backdrop-blur-sm p-5 rounded-md shadow-lg transition-transform hover:scale-[1.02] duration-300">
                <div className="space-y-4 text-center">
                  <h3 className="text-lg font-bold text-white font-mono tracking-wide">{project.name}</h3>
                  <p className="text-gray-300 text-sm">{project.description}</p>
                </div>

                <div className="flex flex-wrap justify-center gap-2 mt-4">
                  {project.tech?.map((t, i) => (
                    <span key={i} className="px-2 py-0.5 bg-[#333] text-white text-xs rounded">{t}</span>
                  ))}
                </div>

                <div className="flex gap-4 mt-6">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                      <Github className="w-6 h-6" />
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                      <ExternalLink className="w-6 h-6" />
                    </a>
                  )}
                </div>
              </div>
            </PixelCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
