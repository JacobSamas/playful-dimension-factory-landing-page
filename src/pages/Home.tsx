import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import EnhancedScene from '../components/EnhancedScene';
import { AnimatedButton } from '../components/ui/animated-button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    setMousePosition({ x: clientX, y: clientY });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div 
      className="min-h-screen relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background gradient that follows mouse */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-black via-purple-900 to-black opacity-50"
        style={{
          backgroundPosition: `${mousePosition.x}px ${mousePosition.y}px`,
          transition: 'background-position 0.1s ease-out',
        }}
      />

      {/* Enhanced 3D Scene */}
      <div className="absolute inset-0 z-0">
        <EnhancedScene />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
            variants={itemVariants}
          >
            Welcome to Dimension Factory
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 mb-8"
            variants={itemVariants}
          >
            Where creativity meets innovation
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card className="bg-black/50 backdrop-blur-sm border-purple-500/20">
                <CardHeader>
                  <CardTitle className="text-purple-400">Feature {item}</CardTitle>
                  <CardDescription className="text-gray-400">
                    Amazing feature description
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <AnimatedButton
                    className="mt-4 bg-purple-600 hover:bg-purple-700"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                  </AnimatedButton>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Loading overlay */}
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-black z-50 flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="w-16 h-16 border-4 border-purple-500 rounded-full"
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      )}
    </div>
  );
};

export default Home; 