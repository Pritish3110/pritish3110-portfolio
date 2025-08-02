import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Cpu, Brain, Navigation, ArrowUpRight } from 'lucide-react';
import { Button } from './ui/button';

const ProjectsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.15,
    rootMargin: '-30px 0px'
  });

  const projects = [
    {
      title: 'MicroMice – Autonomous Maze Solver',
      description: 'Hardware-based robot with IR sensors and N20 motors using a flood-fill algorithm to map and solve mazes. Features full exploration-return-replay phase with intelligent pathfinding.',
      tech: ['Arduino', 'C++', 'IR Sensors', 'N20 Motors', 'Flood-Fill Algorithm'],
      github: 'https://github.com/Pritish3110',
      icon: Navigation,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20'
    },
    {
      title: 'ChessBotX – AI Chessboard',
      description: 'Smart 8x8 chessboard using electromagnets and an AI engine. Recognizes board state with 95% accuracy and performs real-time, strategic moves with advanced chess algorithms.',
      tech: ['AI Engine', 'Electromagnets', 'Computer Vision', 'Chess Algorithms', 'Real-time Processing'],
      github: 'https://github.com/Pritish3110',
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20'
    },
    {
      title: 'Linefollower - Autonomous Robot',
      description: 'Hardware-based robot with IR and ultrasonic sensors using BO motors and L298N motor driver. Precisely follows black lines with obstacle detection and avoidance capabilities.',
      tech: ['Arduino', 'IR Sensors', 'Ultrasonic Sensors', 'L298N', 'BO Motors'],
      github: 'https://github.com/Pritish3110',
      icon: Cpu,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20'
    }
  ];

  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-surface/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ x: -50 }}
          animate={inView ? { x: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-orbitron font-bold text-neon-green mb-4">
            Featured Projects
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-neon-green to-purple-accent mx-auto mb-6" />
          <p className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto px-4">
            Innovative robotics and AI solutions that showcase my passion for intelligent automation
          </p>
        </motion.div>

        <div className="space-y-6 sm:space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ x: -60, scale: 0.95 }}
              animate={inView ? { x: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              className="group relative"
            >
              {/* Minimalistic card with subtle border animation */}
              <div className="relative bg-surface-light rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-border-subtle overflow-hidden transition-all duration-500 ease-out hover:border-neon-green/30">
                
                {/* Subtle top accent line that expands on hover */}
                <div className="absolute top-0 left-0 h-0.5 bg-gradient-to-r from-neon-green to-purple-accent w-0 group-hover:w-full transition-all duration-700 ease-out" />
                
                {/* Content container */}
                <div className="relative z-10">
                  <div className="flex flex-col space-y-6">
                    
                    {/* Header section */}
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                      <div className={`${project.bgColor} p-3 rounded-xl self-start transition-all duration-300 group-hover:scale-105`}>
                        <project.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${project.color}`} />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl sm:text-2xl font-space font-bold text-text-primary mb-3 transition-colors duration-300 group-hover:text-neon-green">
                          {project.title}
                        </h3>
                        <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Tech stack and button section */}
                    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-6">
                      
                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-2 flex-1">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 sm:px-3 py-1 text-xs font-mono bg-background/40 text-text-muted rounded-md border border-border-subtle transition-all duration-300 hover:border-neon-green/30 hover:text-text-secondary"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      {/* GitHub button */}
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-shrink-0"
                      >
                        <Button
                          onClick={() => window.open(project.github, '_blank')}
                          className="w-full sm:w-auto bg-transparent border border-neon-green/30 text-neon-green hover:bg-neon-green/10 hover:border-neon-green/50 font-inter font-medium px-4 sm:px-6 py-2.5 rounded-lg transition-all duration-300 group/btn"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          <span className="hidden sm:inline">View Code</span>
                          <span className="sm:hidden">Code</span>
                          <ArrowUpRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Services Section */}
        <motion.div
          initial={{ x: -40 }}
          animate={inView ? { x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="mt-16 sm:mt-24 text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-space font-semibold text-purple-accent mb-8 sm:mb-12">
            Services I Offer
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              'Robotics Prototyping & Development',
              'Sensor-based Automation Solutions',
              'Frontend Web Design (React.js)',
              'DSA & Backend Development'
            ].map((service, index) => (
              <motion.div
                key={service}
                initial={{ x: -30, scale: 0.9 }}
                animate={inView ? { x: 0, scale: 1 } : {}}
                transition={{ 
                  duration: 0.4, 
                  delay: 0.6 + index * 0.08,
                  ease: "easeOut"
                }}
                className="group relative"
              >
                <div className="bg-surface-light rounded-xl p-5 sm:p-6 border border-border-subtle transition-all duration-300 hover:border-neon-green/30 h-full">
                  
                  {/* Minimalistic top indicator */}
                  <div className="h-1 w-6 bg-gradient-to-r from-neon-green to-purple-accent rounded-full mb-4 mx-auto transition-all duration-300 group-hover:w-10" />
                  
                  <p className="text-sm sm:text-base text-text-secondary font-inter text-center leading-relaxed">
                    {service}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;