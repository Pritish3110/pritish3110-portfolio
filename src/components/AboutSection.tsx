import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  GraduationCap, 
  Heart, 
  Lightbulb, 
  Users, 
  Code2, 
  Cpu, 
  Globe, 
  Monitor, 
  Gamepad2, 
  Code, 
  Zap, 
  GitBranch, 
  Database, 
  Terminal,
  Brain,
  MessageCircle,
  Target,
  Puzzle,
  Clock,
  Handshake,
  Eye,
  Settings,
  ToggleLeft
} from 'lucide-react';
import { useState } from 'react';

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
    rootMargin: '-20px 0px'
  });

  const [showTechnicalSkills, setShowTechnicalSkills] = useState(true);

  const technicalSkills = [
    { name: 'Robotics & Automation', icon: <Cpu className="w-4 h-4" /> },
    { name: 'Data Structures & Algorithms', icon: <Code2 className="w-4 h-4" /> },
    { name: 'ROS2', icon: <Settings className="w-4 h-4" /> },
    { name: 'SLAM', icon: <Eye className="w-4 h-4" /> },
    { name: 'Web Development', icon: <Globe className="w-4 h-4" /> },
    { name: 'Operating Systems', icon: <Monitor className="w-4 h-4" /> },
    { name: 'Game Development', icon: <Gamepad2 className="w-4 h-4" /> },
    { name: 'Python Programming', icon: <Code className="w-4 h-4" /> },
    { name: 'C Programming', icon: <Zap className="w-4 h-4" /> },
    { name: 'Version Control', icon: <GitBranch className="w-4 h-4" /> },
    { name: 'Database Management', icon: <Database className="w-4 h-4" /> },
    { name: 'Shell Scripting', icon: <Terminal className="w-4 h-4" /> }
  ];

  const softSkills = [
    { icon: Users, label: 'Teamwork & Collaboration', color: 'text-blue-400' },
    { icon: Brain, label: 'Critical Thinking', color: 'text-purple-400' },
    { icon: MessageCircle, label: 'Communication', color: 'text-pink-400' },
    { icon: Lightbulb, label: 'Creative Problem Solving', color: 'text-yellow-400' },
    { icon: Target, label: 'Goal-Oriented', color: 'text-green-400' },
    { icon: Puzzle, label: 'Analytical Skills', color: 'text-cyan-400' },
    { icon: Clock, label: 'Time Management', color: 'text-orange-400' },
    { icon: Handshake, label: 'Leadership', color: 'text-indigo-400' }
  ];

  return (
    <section id="about" className="py-20 px-6 lg:px-12">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-orbitron font-bold text-neon-green mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-green to-purple-accent mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-start">
          {/* Left Side - Journey & Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* My Journey */}
            <div className="bg-surface-light rounded-2xl p-6 lg:p-8 border border-border-subtle hover:border-neon-green/30 transition-all duration-300">
              <h3 className="text-xl lg:text-2xl font-space font-semibold text-purple-accent mb-4 lg:mb-6">
                My Journey
              </h3>
              <p className="text-text-secondary leading-relaxed mb-4 lg:mb-6 text-sm lg:text-base">
                I'm Pritish Bhatasana, a passionate and hands-on tech enthusiast pursuing a 
                B.Tech in Computer Science with a specialization in AI and Robotics at VIT. 
                I thrive on solving real-world problems through robotics, embedded systems, 
                and intelligent automation.
              </p>
              <p className="text-text-secondary leading-relaxed text-sm lg:text-base">
                Whether it's building a chess-playing robot or designing autonomous micromice, 
                I blend creativity with precision. My passion lies in creating intelligent 
                systems that push the boundaries of what's possible.
              </p>
            </div>

            {/* Education */}
            <div className="bg-surface-light rounded-2xl p-6 lg:p-8 border border-border-subtle hover:border-neon-green/30 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4 lg:mb-6">
                <GraduationCap className="w-6 h-6 lg:w-8 lg:h-8 text-neon-green" />
                <h3 className="text-xl lg:text-2xl font-space font-semibold text-purple-accent">
                  Education
                </h3>
              </div>
              
              <div className="space-y-4 lg:space-y-6">
                {/* VIT */}
                <div className="border-l-4 border-neon-green pl-4">
                  <h4 className="text-lg lg:text-xl font-inter font-semibold text-text-primary">
                    B.Tech in Computer Science
                  </h4>
                  <p className="text-neon-green font-medium text-sm lg:text-base">
                    AI & Robotics Specialization
                  </p>
                  <p className="text-text-muted mb-1 text-sm lg:text-base">
                    Vellore Institute of Technology (VIT), 2023–2027
                  </p>
                  <p className="text-purple-accent font-medium text-sm lg:text-base">
                    Current CGPA: 8.4
                  </p>
                </div>

                {/* 12th Grade */}
                <div className="border-l-4 border-purple-accent pl-4">
                  <h4 className="text-base lg:text-lg font-inter font-semibold text-text-primary">
                    Higher Secondary Education (12th Grade)
                  </h4>
                  <p className="text-text-muted mb-1 text-sm lg:text-base">
                    Sarwamangal High School
                  </p>
                  <p className="text-purple-accent font-medium text-sm lg:text-base">
                    89.90 Percentile
                  </p>
                </div>

                {/* 10th Grade */}
                <div className="border-l-4 border-text-secondary pl-4">
                  <h4 className="text-base lg:text-lg font-inter font-semibold text-text-primary">
                    Secondary Education (10th Grade)
                  </h4>
                  <p className="text-text-muted mb-1 text-sm lg:text-base">
                    Mahan High School
                  </p>
                  <p className="text-neon-green font-medium text-sm lg:text-base">
                    99.68 Percentile
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Specialized Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-surface-light rounded-2xl p-6 lg:p-8 border border-border-subtle hover:border-neon-green/30 transition-all duration-300">
              <div className="flex items-center justify-between mb-4 lg:mb-6">
                <h3 className="text-xl lg:text-2xl font-space font-semibold text-purple-accent">
                  Specialized In
                </h3>
                <motion.button
                  onClick={() => setShowTechnicalSkills(!showTechnicalSkills)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-background/50 border border-border-subtle hover:border-neon-green/50 transition-all duration-200"
                >
                  <ToggleLeft className={`w-4 h-4 transition-transform duration-200 ${showTechnicalSkills ? 'text-neon-green rotate-180' : 'text-purple-accent'}`} />
                  <span className="text-xs lg:text-sm font-mono text-text-secondary">
                    {showTechnicalSkills ? 'Technical' : 'Soft Skills'}
                  </span>
                </motion.button>
              </div>
              
              <div className="min-h-[400px] lg:min-h-[500px]">
                <motion.div
                  key={showTechnicalSkills ? 'technical' : 'soft'}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="max-h-[380px] lg:max-h-[480px] overflow-y-auto pr-2 scrollbar-thin scrollbar-track-background scrollbar-thumb-neon-green/30"
                >
                  {showTechnicalSkills ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {technicalSkills.map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="bg-background/70 rounded-lg p-3 text-center border border-border-subtle hover:border-neon-green/50 hover:bg-neon-green/5 transition-all duration-200 cursor-pointer"
                        >
                          <div className="flex items-center justify-center space-x-2">
                            <span className="text-neon-green flex-shrink-0">{skill.icon}</span>
                            <span className="text-xs lg:text-sm font-mono text-text-secondary truncate">
                              {skill.name}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 gap-4">
                      {softSkills.map((skill, index) => (
                        <motion.div
                          key={skill.label}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          whileHover={{ scale: 1.02, x: 5 }}
                          className="flex items-center space-x-3 p-3 rounded-lg bg-background/50 border border-border-subtle hover:border-neon-green/30 hover:bg-neon-green/5 transition-all duration-200 cursor-pointer"
                        >
                          <skill.icon className={`w-5 h-5 lg:w-6 lg:h-6 ${skill.color}`} />
                          <span className="font-inter text-text-primary text-sm lg:text-base">{skill.label}</span>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;