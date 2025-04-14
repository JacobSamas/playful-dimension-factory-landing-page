import React, { useEffect } from 'react';
import Scene from '@/components/Scene';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

const Index = () => {
  // Enable smooth scrolling to section anchors
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const href = target.getAttribute('href');
      
      if (href && href.startsWith('#') && href.length > 1) {
        e.preventDefault();
        const element = document.getElementById(href.substring(1));
        if (element) {
          window.scrollTo({
            top: element.offsetTop,
            behavior: 'smooth'
          });
        }
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick as unknown as EventListener);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick as unknown as EventListener);
      });
    };
  }, []);

  return (
    <div className="min-h-screen relative">
      <Scene />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      
      <footer className="py-8 bg-background border-t border-border">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-foreground/60">
            © {new Date().getFullYear()} Dimension Factory. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
