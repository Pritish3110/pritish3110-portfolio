import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { User, GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      filter: 'blur(8px)'
    },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      rotateY: 90,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      rotateY: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const relevantCourses = [
    'Data Structures and Algorithms',
    'Operating Systems', 
    'Computer Networks',
    'Microprocessors & Interfacing',
    'Artificial Intelligence',
    'Robotics & Control',
    'Embedded Systems',
    'Software Engineering'
  ];

  return (
    <section id="about" className="py-20 px-6 lg:px-12 bg-surface/30">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto max-w-7xl"
      >
        {/* Section Header */}
        <motion.div 
          variants={itemVariants}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-orbitron font-bold text-neon-green mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-green to-purple-accent mx-auto mb-6" />
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Innovation-driven engineer passionate about robotics and AI automation
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - My Journey */}
          <div className="space-y-8">
            {/* My Journey Card */}
            <motion.div
              variants={cardVariants}
              className="bg-surface-light rounded-2xl p-8 border border-border-subtle hover:border-neon-green/50 transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-neon-green/10 p-4 rounded-2xl">
                  <User className="w-8 h-8 text-neon-green" />
                </div>
                <h3 className="text-2xl font-space font-bold text-text-primary">
                  My Journey
                </h3>
              </div>
              
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  I'm an AI & Robotics Engineer driven by the vision of creating intelligent systems that solve real-world problems. My passion lies in the intersection of hardware and software, where mechanical precision meets algorithmic intelligence.
                </p>
                <p>
                  From autonomous maze-solving robots to AI-powered chess systems, I believe in building technology that not only showcases innovation but delivers tangible impact. Every project is an opportunity to push the boundaries of what's possible in automation.
                </p>
                <p>
                  <strong className="text-neon-green">My Vision:</strong> To develop intelligent automation solutions that enhance human capabilities and create meaningful technological advancement in robotics and AI.
                </p>
              </div>
            </motion.div>

            {/* Education Card */}
            <motion.div
              variants={cardVariants}
              className="bg-surface-light rounded-2xl p-8 border border-border-subtle hover:border-purple-accent/50 transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-purple-accent/10 p-4 rounded-2xl">
                  <GraduationCap className="w-8 h-8 text-purple-accent" />
                </div>
                <h3 className="text-2xl font-space font-bold text-text-primary">
                  Education
                </h3>
              </div>
              
              <div className="space-y-4">
                <div className="border-l-4 border-neon-green pl-6">
                  <h4 className="text-xl font-semibold text-text-primary mb-2">
                    Bachelor of Technology
                  </h4>
                  <p className="text-text-secondary font-medium mb-1">
                    Computer Science & Engineering
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-text-muted">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>Vellore Institute of Technology, Vellore</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-text-muted mt-2">
                    <Calendar className="w-4 h-4" />
                    <span>2022 - 2026</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Technical Skills */}
          <motion.div
            variants={cardVariants}
            className="bg-surface-light rounded-2xl p-8 border border-border-subtle hover:border-neon-green/50 transition-all duration-300 h-fit"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-neon-green/10 p-4 rounded-2xl">
                <BookOpen className="w-8 h-8 text-neon-green" />
              </div>
              <h3 className="text-2xl font-space font-bold text-text-primary">
                Technical Skills
              </h3>
            </div>

            {/* Web Development */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-purple-accent mb-4">
                Web Development
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Framer Motion'].map((skill) => (
                  <motion.div
                    key={skill}
                    className="bg-background/70 rounded-lg px-3 py-2 text-sm font-mono text-text-secondary border border-border-subtle hover:border-neon-green/50 transition-all duration-200"
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Embedded Systems & Robotics */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-purple-accent mb-4">
                Embedded Systems & Robotics
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {['Robotics & Automation', 'ROS2', 'SLAM', 'Arduino', 'C++', 'L298N Motor Driver', 'IR Sensors', 'Motor Control', 'Flood Fill Algorithm', 'BFS Algorithm'].map((skill) => (
                  <motion.div
                    key={skill}
                    className="bg-background/70 rounded-lg px-3 py-2 text-sm font-mono text-text-secondary border border-border-subtle hover:border-purple-accent/50 transition-all duration-200"
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tools & Platforms */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-purple-accent mb-4">
                Tools & Platforms
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {['Git', 'GitHub', 'Vercel', 'Tinkercad', 'MATLAB', 'SolidWorks'].map((skill) => (
                  <motion.div
                    key={skill}
                    className="bg-background/70 rounded-lg px-3 py-2 text-sm font-mono text-text-secondary border border-border-subtle hover:border-neon-green/50 transition-all duration-200"
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Relevant Coursework */}
            <div>
              <h4 className="text-lg font-semibold text-purple-accent mb-4">
                Relevant Coursework
              </h4>
              <div className="space-y-2">
                {relevantCourses.map((course, index) => (
                  <motion.div
                    key={course}
                    className="flex items-center space-x-3 py-2 px-3 rounded-lg bg-background/50 border border-border-subtle hover:border-purple-accent/30 transition-all duration-200"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-2 h-2 bg-neon-green rounded-full" />
                    <span className="text-sm font-inter text-text-secondary">
                      {course}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;