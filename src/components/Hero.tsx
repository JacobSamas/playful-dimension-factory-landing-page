
import React, { useEffect, useState } from 'react';
import { MoveDown } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Add animation after mount
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timeout);
  }, []);
  
  return (
    <section 
      id="home" 
      className="min-h-screen relative flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="container mx-auto px-4 md:px-6 z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-1000 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
              Explore The Third Dimension
            </span>
          </h1>
          
          <p 
            className={`text-lg md:text-xl text-foreground/80 mb-8 md:mb-12 max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Step into a world where creativity meets technology, and imagination 
            becomes interactive reality. Welcome to our 3D playground.
          </p>
          
          <div 
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <a 
              href="#projects" 
              className="px-6 py-3 rounded-full bg-purple-500 text-white font-medium hover:bg-purple-600 transition-colors shadow-lg hover:shadow-purple-200 glow"
            >
              Explore Projects
            </a>
            <a 
              href="#about" 
              className="px-6 py-3 rounded-full bg-blue-100 text-blue-600 font-medium hover:bg-blue-200 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
        
        <div 
          className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <a 
            href="#about" 
            className="text-foreground/70 hover:text-purple-500 transition-colors animate-float flex flex-col items-center gap-2"
          >
            <span className="text-sm font-medium">Scroll Down</span>
            <MoveDown className="w-5 h-5" />
          </a>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
