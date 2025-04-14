
import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Cosmic Explorer",
    description: "An immersive journey through a stylized galaxy with interactive celestial bodies.",
    tags: ["Three.js", "WebGL", "Animation"],
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=800&auto=format&fit=crop",
    color: "from-purple-500/20 to-blue-500/20"
  },
  {
    title: "Architectural Visualizer",
    description: "Interactive 3D models of architectural designs allowing virtual walkthroughs.",
    tags: ["3D Modeling", "Interaction", "Responsive"],
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=800&auto=format&fit=crop",
    color: "from-blue-500/20 to-purple-500/20"
  },
  {
    title: "Particle Symphony",
    description: "A musical experience where sound waves generate captivating particle animations.",
    tags: ["Audio", "Particles", "Creative"],
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    color: "from-purple-500/20 to-blue-500/20"
  }
];

const ProjectCard = ({ project }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-500">
      <div className="absolute inset-0 bg-gradient-to-br opacity-80 group-hover:opacity-90 transition-opacity duration-500 z-10"></div>
      
      {/* Background image */}
      <div className="relative h-[350px] overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      
      {/* Content overlay */}
      <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 text-white">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <div className="flex items-center gap-2 mb-2">
            {project.tags.map((tag, index) => (
              <span key={index} className="text-xs font-medium px-2 py-1 rounded-full bg-white/20 backdrop-blur-sm">
                {tag}
              </span>
            ))}
          </div>
          
          <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
          <p className="text-white/80 mb-4 max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            {project.description}
          </p>
          
          <a 
            href="#" 
            className="inline-flex items-center gap-1 text-sm font-medium text-white bg-purple-500/80 hover:bg-purple-500 px-4 py-2 rounded-full transition-colors"
          >
            View Project <ExternalLink className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
              Featured Projects
            </span>
          </h2>
          <p className="text-lg text-foreground/80">
            Explore our collection of immersive 3D experiences that push the boundaries 
            of what's possible on the web.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-medium hover:bg-foreground/80 transition-colors"
          >
            View All Projects <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-gradient-to-tl from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Projects;
