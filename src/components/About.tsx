
import React from 'react';
import { Box, RotateCw, Maximize2, Move } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-purple-100">
      <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-purple-500" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-foreground/70">{description}</p>
    </div>
  );
};

const About = () => {
  const features = [
    {
      icon: Box,
      title: "Interactive Objects",
      description: "Engage with 3D objects that respond to your movements and interactions in real-time."
    },
    {
      icon: RotateCw,
      title: "Dynamic Animations",
      description: "Experience fluid animations that bring the digital world to life with every scroll and click."
    },
    {
      icon: Maximize2,
      title: "Responsive Design",
      description: "Enjoy the same immersive experience across all your devices, from desktop to mobile."
    },
    {
      icon: Move,
      title: "Creative Visuals",
      description: "Discover unique visual elements that combine art and technology in surprising ways."
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                Pushing the Boundaries
              </span>
            </h2>
            
            <p className="text-lg text-foreground/80 mb-6">
              We're on a mission to transform the digital landscape by creating immersive 3D experiences 
              that captivate, inspire, and delight. Our work combines cutting-edge technology with 
              artistic vision to create spaces that feel alive.
            </p>
            
            <p className="text-lg text-foreground/80 mb-8">
              Every animation, every interaction, and every visual element is thoughtfully designed 
              to create a cohesive and memorable journey through digital space.
            </p>
            
            <div className="flex gap-3">
              <div className="h-1 w-20 bg-purple-500 rounded-full"></div>
              <div className="h-1 w-10 bg-blue-500 rounded-full"></div>
              <div className="h-1 w-5 bg-purple-300 rounded-full"></div>
            </div>
          </div>
          
          <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-300/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default About;
