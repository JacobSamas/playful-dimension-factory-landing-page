
import React, { useState, useEffect } from 'react';
import { Box } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/80 backdrop-blur-md py-2 shadow-sm' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-2xl font-bold text-foreground group">
            <Box className="w-6 h-6 text-purple-500 group-hover:rotate-[-20deg] transition-transform duration-300" />
            <span className="text-glow">Dimension</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-foreground/80 hover:text-purple-500 font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-purple-500 after:transition-all hover:after:w-full"
              >
                {item}
              </a>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground p-2 rounded-full hover:bg-purple-100/50"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-0.5 w-full bg-foreground transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block h-0.5 bg-foreground transition-all ${menuOpen ? 'opacity-0 w-0' : 'opacity-100 w-full'}`}></span>
              <span className={`block h-0.5 w-full bg-foreground transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-64 mt-4' : 'max-h-0'}`}>
          <nav className="flex flex-col gap-4 pb-4">
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-foreground/80 hover:text-purple-500 font-medium transition-colors py-2 px-4 rounded-md hover:bg-purple-100/20"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
