import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Cpu, Brain, Navigation } from 'lucide-react';
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
      bgColor: 'bg-blue-500/10'
    },
    {
      title: 'ChessBotX – AI Chessboard',
      description: 'Smart 8x8 chessboard using electromagnets and an AI engine. Recognizes board state with 95% accuracy and performs real-time, strategic moves with advanced chess algorithms.',
      tech: ['AI Engine', 'Electromagnets', 'Computer Vision', 'Chess Algorithms', 'Real-time Processing'],
      github: 'https://github.com/Pritish3110',
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10'
    },
    {
      title: 'Linefollower - Autonomous Robot',
      description: 'Hardware-based robot with IR and ultrasonic sensors using BO motors and L298N motor driver. Precisely follows black lines with obstacle detection and avoidance capabilities.',
      tech: ['Arduino', 'IR Sensors', 'Ultrasonic Sensors', 'L298N', 'BO Motors'],
      github: 'https://github.com/Pritish3110',
      icon: Cpu,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 lg:px-12 bg-surface/30">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-orbitron font-bold text-neon-green mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-green to-purple-accent mx-auto mb-6" />
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Innovative robotics and AI solutions that showcase my passion for intelligent automation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-1 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="bg-surface-light rounded-2xl p-6 sm:p-8 border border-border-subtle hover:border-neon-green/50 transition-all duration-300 group"
            >
              <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-start lg:items-center">
                {/* Project Icon & Title */}
                <div className="lg:col-span-1">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`${project.bgColor} p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                      <project.icon className={`w-8 h-8 ${project.color}`} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-space font-bold text-text-primary mb-4">
                    {project.title}
                  </h3>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-mono bg-background/70 text-text-muted rounded-full border border-border-subtle"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div className="lg:col-span-1">
                  <p className="text-text-secondary leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Actions */}
                <div className="lg:col-span-1 lg:text-right">
                  <div className="flex flex-col sm:flex-row lg:flex-col lg:items-end gap-4">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        onClick={() => window.open(project.github, '_blank')}
                        className="bg-gradient-to-r from-neon-green to-neon-green-dim hover:from-neon-green-dim hover:to-neon-green text-background font-inter font-semibold px-6 py-3 rounded-xl transition-all duration-300"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </Button>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        variant="outline"
                        onClick={() => window.open(project.github, '_blank')}
                        className="border-2 border-purple-accent text-purple-accent hover:bg-purple-accent hover:text-background font-inter font-semibold px-6 py-3 rounded-xl transition-all duration-300"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Learn More
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-space font-semibold text-purple-accent mb-8">
            Services I Offer
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-5xl mx-auto">
            {[
              'Robotics Prototyping & Development',
              'Sensor-based Automation Solutions',
              'Frontend Web Design (React.js)',
              'DSA & Backend Development'
            ].map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-surface-light rounded-xl p-6 border border-border-subtle hover:border-neon-green/50 transition-all duration-300"
              >
                <p className="text-text-secondary font-inter text-center">
                  {service}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;