import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin } from 'lucide-react';
import { useState, useEffect } from 'react';
import profilePhoto from '../assets/profile-photo.jpg';

const HeroSection = () => {
  const [isTextFilled, setIsTextFilled] = useState(false);
  const [showParticles, setShowParticles] = useState(false);

  useEffect(() => {
    const fillTimer = setTimeout(() => setIsTextFilled(true), 1000);
    const particleTimer = setTimeout(() => setShowParticles(true), 2500);
    
    return () => {
      clearTimeout(fillTimer);
      clearTimeout(particleTimer);
    };
  }, []);

  // CodeChef Logo Component (Minimalist Angle Brackets ~40 degrees)
  const CodeChefIcon = () => (
    <svg 
      className="w-6 h-6 sm:w-8 sm:h-8" 
      viewBox="0 0 24 24" 
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Left angle bracket < with ~40 degree angle */}
      <path d="M9 17l-2-5 2-5" />
      {/* Right angle bracket > with ~40 degree angle */}
      <path d="M15 7l2 5-2 5" />
    </svg>
  );

  const socialLinks = [
    { 
      icon: Mail, 
      href: 'mailto:pritishbhatasana68@gmail.com',
      label: 'Gmail',
      color: 'hover:text-red-400'
    },
    { 
      icon: Linkedin, 
      href: 'https://linkedin.com/in/pritish3110',
      label: 'LinkedIn',
      color: 'hover:text-blue-400'
    },
    { 
      icon: Github, 
      href: 'https://github.com/Pritish3110',
      label: 'GitHub',
      color: 'hover:text-purple-400'
    },
    { 
      icon: CodeChefIcon, 
      href: 'https://codechef.com/users/pritish_3110',
      label: 'CodeChef',
      color: 'hover:text-orange-400'
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-12 relative">
      {/* Particle Background */}
      {showParticles && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-neon-green rounded-full"
              initial={{ 
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000), 
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                scale: 0 
              }}
              animate={{ 
                scale: [0, 1, 0],
                opacity: [0, 0.8, 0]
              }}
              transition={{ 
                duration: 2,
                delay: i * 0.1,
                ease: "easeOut"
              }}
            />
          ))}
        </div>
      )}

      <div className="container mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          
          {/* Left Content - Centered on mobile */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 sm:space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base sm:text-lg font-inter text-text-secondary tracking-wide"
            >
              👋 Hello, I'm
            </motion.p>

            {/* Name with Liquid Fill Effect */}
            <div className="space-y-2 relative">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="relative"
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-orbitron font-black text-text-primary relative overflow-hidden">
                  PRITISH
                  {/* Liquid Fill Overlay */}
                  <motion.div
                    className="absolute inset-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-orbitron font-black text-neon-green"
                    initial={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' }}
                    animate={isTextFilled ? { clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)' } : {}}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  >
                    PRITISH
                  </motion.div>
                </h1>
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-space font-bold text-text-primary"
              >
                BHATASANA
              </motion.h2>
            </div>

            {/* Role & Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="space-y-4 max-w-xl"
            >
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-space font-semibold text-purple-accent">
                AI & Robotics Engineer
              </h3>
              <p className="text-base sm:text-lg font-inter text-text-secondary leading-relaxed">
                Passionate about creating intelligent automation systems that bridge the gap between innovation and real-world application. Building the future, one robot at a time.
              </p>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="space-y-3"
            >
              <div className="flex items-center justify-center lg:justify-start space-x-3 text-text-muted">
                <Mail className="w-4 h-4" />
                <span className="font-mono text-xs sm:text-sm">pritishbhatasana68@gmail.com</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-3 text-text-muted">
                <MapPin className="w-4 h-4" />
                <span className="font-mono text-xs sm:text-sm">+91-8200080298 • VIT, Chennai</span>
              </div>
            </motion.div>

            {/* Social Links with Snap Animation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="flex items-center justify-center lg:justify-start space-x-4 sm:space-x-6"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-text-secondary icon-snap tap-highlight ${social.color} transition-all duration-300 p-2`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <social.icon />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center mt-8 lg:mt-0 lg:justify-end w-full"
          >
            <div className="relative flex justify-center">
              {/* Background decoration */}
              <motion.div
                className="absolute -inset-6 sm:-inset-8 bg-gradient-to-r from-neon-green/30 to-purple-accent/30 rounded-3xl blur-2xl"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ 
                  scale: { duration: 4, repeat: Infinity },
                  opacity: { duration: 3, repeat: Infinity }
                }}
              />
              
              {/* Profile image container */}
              <motion.div
                className="relative bg-surface-light rounded-2xl sm:rounded-3xl p-2 border border-neon-green/30 overflow-hidden mx-auto"
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.img
                  src={profilePhoto}
                  alt="Pritish Bhatasana"
                  className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover rounded-xl sm:rounded-2xl block"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Floating accent elements */}
                <motion.div
                  className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-neon-green rounded-full shadow-lg shadow-neon-green/50"
                  animate={{ 
                    y: [0, -15, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-5 h-5 sm:w-6 sm:h-6 bg-purple-accent rounded-full shadow-lg shadow-purple-accent/50"
                  animate={{ 
                    y: [0, 15, 0],
                    scale: [1, 1.3, 1]
                  }}
                  transition={{ 
                    duration: 2.5, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - Hidden on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-neon-green rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-neon-green rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;