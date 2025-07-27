import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsComplete(true);
      setTimeout(onComplete, 800);
    }, 1200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-background flex items-center justify-center z-50"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="relative"
        initial={{ scale: 1 }}
        animate={isComplete ? { scale: 0.3, x: -window.innerWidth * 0.4, y: -window.innerHeight * 0.4 } : {}}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* Hexagon with P */}
        <div className="relative w-24 h-24">
          {/* Hexagon outline */}
          <svg 
            className="w-24 h-24 animate-hexagon-spin" 
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon
              points="50,5 85,25 85,75 50,95 15,75 15,25"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-neon-green"
            />
          </svg>
          
          {/* Letter P in center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl font-orbitron font-bold text-neon-green">
              P
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;