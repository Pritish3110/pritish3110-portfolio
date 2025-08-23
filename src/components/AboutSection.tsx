import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { User, GraduationCap, Award, Target } from 'lucide-react';

const AboutSection = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: false, // Allow re-triggering for better navigation
    threshold: 0.1, // Lower threshold for faster triggering
    rootMargin: '0px 0px -50px 0px', // Reduced margin for faster detection
  });

  // Force animation when section comes into view
  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  // Reset animation state when navigating (for better mobile navigation)
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#about') {
        setHasAnimated(false);
        setTimeout(() => setHasAnimated(true), 100);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const relevantCourses = [
    'Data Structures and Algorithms',
    'Operating Systems',
    'Computer Networks',
    'Microprocessors & Interfacing',
    'Artificial Intelligence',
    'Robotics & Control',
    'Embedded Systems',
    'Software Engineering',
  ];

  const shouldAnimate = inView || hasAnimated;

  return (
    <section id="about" className="py-16 md:py-24 px-4 md:px-6 lg:px-12 bg-surface/30">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="container mx-auto max-w-7xl"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-orbitron font-bold text-neon-green mb-4">
            About Me
          </h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-neon-green to-purple-accent mx-auto mb-6"
            initial={{ scaleX: 0 }}
            animate={shouldAnimate ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
          />
          <p className="text-base md:text-lg text-text-secondary max-w-2xl mx-auto">
            Innovation-driven engineer passionate about robotics and AI automation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          {/* Left - My Journey Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={shouldAnimate ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            whileHover={{ 
              y: -8,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            className="group relative"
          >
            {/* Subtle background glow on hover */}
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-neon-green/10 to-purple-accent/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            
            <div className="relative bg-surface-light rounded-xl p-6 md:p-8 border border-border-subtle group-hover:border-neon-green/30 transition-all duration-300 flex flex-col h-full">
              <div className="flex items-center space-x-4 mb-6">
                <motion.div 
                  className="bg-neon-green/10 p-3 rounded-xl"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <User className="w-5 md:w-6 h-5 md:h-6 text-neon-green" />
                </motion.div>
                <h3 className="text-xl md:text-2xl font-space font-bold text-text-primary">My Journey</h3>
              </div>
              
              <div className="space-y-4 md:space-y-6 text-text-secondary leading-relaxed flex-grow">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={shouldAnimate ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                >
                  I'm an <span className="text-neon-green font-semibold">AI & Robotics Engineer</span> driven by the 
                  vision of creating intelligent systems that bridge the gap between imagination and reality. My journey 
                  began with a fascination for autonomous systems and has evolved into a passion for building technology 
                  that makes a meaningful impact.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={shouldAnimate ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                >
                  From developing <span className="text-purple-accent font-medium">autonomous maze-solving robots</span> to creating 
                  <span className="text-purple-accent font-medium"> AI-powered chess engines</span>, I believe in pushing 
                  the boundaries of what's possible. Each project teaches me something new about the intricate dance between 
                  hardware and software.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={shouldAnimate ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                >
                  Currently pursuing my B.Tech at <span className="text-neon-green font-medium">VIT</span> with a 
                  stellar <span className="text-neon-green font-semibold">8.4 CGPA</span>, I'm constantly expanding my 
                  knowledge in machine learning, computer vision, and embedded systems.
                </motion.p>
                
                <motion.div 
                  className="bg-gradient-to-r from-neon-green/10 to-purple-accent/10 p-4 md:p-6 rounded-xl border border-neon-green/20 mt-auto"
                  initial={{ opacity: 0, y: 15 }}
                  animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                  transition={{ delay: 0.6, duration: 0.4, ease: "easeOut" }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start space-x-3">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Target className="w-4 md:w-5 h-4 md:h-5 text-neon-green mt-1 flex-shrink-0" />
                    </motion.div>
                    <div>
                      <h4 className="text-neon-green font-semibold mb-2">My Vision</h4>
                      <p className="text-xs md:text-sm">
                        To develop intelligent automation solutions that enhance human capabilities and advance the fields 
                        of robotics and artificial intelligence, making technology more accessible and impactful for everyone.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right - Education Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={shouldAnimate ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            whileHover={{ 
              y: -8,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            className="group relative"
          >
            {/* Subtle background glow on hover */}
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-purple-accent/10 to-neon-green/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            
            <div className="relative bg-surface-light rounded-xl p-6 md:p-8 border border-border-subtle group-hover:border-purple-accent/30 transition-all duration-300 flex flex-col h-full">
              <div className="flex items-center space-x-4 mb-6 md:mb-8">
                <motion.div 
                  className="bg-purple-accent/10 p-3 rounded-xl"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <GraduationCap className="w-5 md:w-6 h-5 md:h-6 text-purple-accent" />
                </motion.div>
                <h3 className="text-xl md:text-2xl font-space font-bold text-text-primary">Education</h3>
              </div>
              
              <div className="space-y-6 md:space-y-8 flex-grow">
                {/* College */}
                <motion.div 
                  className="border-l-4 border-neon-green pl-4 md:pl-6"
                  initial={{ opacity: 0, x: 15 }}
                  animate={shouldAnimate ? { opacity: 1, x: 0 } : { opacity: 0, x: 15 }}
                  transition={{ delay: 0.4, duration: 0.4, ease: "easeOut" }}
                  whileHover={{ x: 4 }}
                >
                  <h4 className="text-lg md:text-xl font-semibold text-text-primary mb-2">
                    B.Tech in Computer Science (AI & Robotics)
                  </h4>
                  <p className="text-sm md:text-base text-text-secondary font-medium mb-3">
                    Vellore Institute of Technology (VIT), 2023 – 2027
                  </p>
                  <div className="flex items-center space-x-2 mb-4">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Award className="w-4 h-4 text-neon-green" />
                    </motion.div>
                    <span className="text-xs md:text-sm text-neon-green font-semibold">Current CGPA: 8.4</span>
                  </div>
                  
                  <div className="mt-4">
                    <p className="text-sm md:text-base text-text-primary font-semibold mb-3">Relevant Coursework:</p>
                    <div className="grid grid-cols-1 gap-1 md:gap-2">
                      {relevantCourses.map((course, index) => (
                        <motion.div
                          key={course}
                          className="flex items-center space-x-2 py-1 hover:bg-neon-green/5 rounded px-2 -mx-2 transition-colors duration-200"
                          initial={{ opacity: 0, x: -8 }}
                          animate={shouldAnimate ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }}
                          transition={{ delay: 0.5 + index * 0.03, duration: 0.3, ease: "easeOut" }}
                          whileHover={{ x: 4 }}
                        >
                          <motion.div 
                            className="w-1.5 h-1.5 bg-neon-green rounded-full flex-shrink-0"
                            whileHover={{ scale: 1.5 }}
                            transition={{ duration: 0.2 }}
                          />
                          <span className="text-xs md:text-sm text-text-secondary">{course}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* 12th */}
                <motion.div 
                  className="border-l-4 border-purple-accent pl-4 md:pl-6"
                  initial={{ opacity: 0, x: 15 }}
                  animate={shouldAnimate ? { opacity: 1, x: 0 } : { opacity: 0, x: 15 }}
                  transition={{ delay: 0.6, duration: 0.4, ease: "easeOut" }}
                  whileHover={{ x: 4 }}
                >
                  <h4 className="text-base md:text-lg font-semibold text-text-primary mb-2">
                    12th Grade – Sarwamangal High School
                  </h4>
                  <div className="flex items-center space-x-2">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 15 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Award className="w-4 h-4 text-purple-accent" />
                    </motion.div>
                    <span className="text-xs md:text-sm text-purple-accent font-semibold">
                      Passed with 89.97 percentile
                    </span>
                  </div>
                </motion.div>

                {/* 10th */}
                <motion.div 
                  className="border-l-4 border-yellow-400 pl-4 md:pl-6"
                  initial={{ opacity: 0, x: 15 }}
                  animate={shouldAnimate ? { opacity: 1, x: 0 } : { opacity: 0, x: 15 }}
                  transition={{ delay: 0.7, duration: 0.4, ease: "easeOut" }}
                  whileHover={{ x: 4 }}
                >
                  <h4 className="text-base md:text-lg font-semibold text-text-primary mb-2">
                    10th Grade – Mahan High School
                  </h4>
                  <div className="flex items-center space-x-2">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: -15 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Award className="w-4 h-4 text-yellow-400" />
                    </motion.div>
                    <span className="text-xs md:text-sm text-yellow-400 font-semibold">
                      Passed with 99.62 percentile
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;