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
  Terminal 
} from 'lucide-react';

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
    rootMargin: '-50px 0px'
  });

  const skills = [
    { name: 'Data Structures & Algorithms', icon: <Code2 className="w-4 h-4" /> },
    { name: 'Robotics & Automation', icon: <Cpu className="w-4 h-4" /> },
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
    { icon: Users, label: 'Teamwork', color: 'text-blue-400' },
    { icon: Lightbulb, label: 'Project Management', color: 'text-yellow-400' },
    { icon: Heart, label: 'Communication', color: 'text-pink-400' }
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

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-stretch">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-surface-light rounded-2xl p-8 border border-border-subtle">
              <h3 className="text-2xl font-space font-semibold text-purple-accent mb-6">
                My Journey
              </h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                I'm Pritish Bhatasana, a passionate and hands-on tech enthusiast pursuing a 
                B.Tech in Computer Science with a specialization in AI and Robotics at VIT. 
                I thrive on solving real-world problems through robotics, embedded systems, 
                and intelligent automation.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Whether it's building a chess-playing robot or designing autonomous micromice, 
                I blend creativity with precision. My passion lies in creating intelligent 
                systems that push the boundaries of what's possible.
              </p>
            </div>

            {/* Soft Skills */}
            <div className="bg-surface-light rounded-2xl p-8 border border-border-subtle">
              <h3 className="text-2xl font-space font-semibold text-purple-accent mb-6">
                Soft Skills
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={skill.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-background/50"
                  >
                    <skill.icon className={`w-6 h-6 ${skill.color}`} />
                    <span className="font-inter text-text-primary">{skill.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Education & Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Education */}
            <div className="bg-surface-light rounded-2xl p-8 border border-border-subtle">
              <div className="flex items-center space-x-3 mb-6">
                <GraduationCap className="w-8 h-8 text-neon-green" />
                <h3 className="text-2xl font-space font-semibold text-purple-accent">
                  Education
                </h3>
              </div>
              
              <div className="space-y-6">
                {/* VIT */}
                <div className="border-l-4 border-neon-green pl-4">
                  <h4 className="text-xl font-inter font-semibold text-text-primary">
                    B.Tech in Computer Science
                  </h4>
                  <p className="text-neon-green font-medium">
                    AI & Robotics Specialization
                  </p>
                  <p className="text-text-muted mb-1">
                    Vellore Institute of Technology (VIT), 2023–2027
                  </p>
                  <p className="text-purple-accent font-medium">
                    Current CGPA: 8.4
                  </p>
                </div>

                {/* 12th Grade */}
                <div className="border-l-4 border-purple-accent pl-4">
                  <h4 className="text-lg font-inter font-semibold text-text-primary">
                    Higher Secondary Education (12th Grade)
                  </h4>
                  <p className="text-text-muted mb-1">
                    Sarwamangal High School
                  </p>
                  <p className="text-purple-accent font-medium">
                    89.90 Percentile
                  </p>
                </div>

                {/* 10th Grade */}
                <div className="border-l-4 border-text-secondary pl-4">
                  <h4 className="text-lg font-inter font-semibold text-text-primary">
                    Secondary Education (10th Grade)
                  </h4>
                  <p className="text-text-muted mb-1">
                    Mahan High School
                  </p>
                  <p className="text-neon-green font-medium">
                    99.68 Percentile
                  </p>
                </div>
              </div>
            </div>

            {/* Technical Areas */}
            <div className="bg-surface-light rounded-2xl p-8 border border-border-subtle h-fit">
              <h3 className="text-2xl font-space font-semibold text-purple-accent mb-6">
                Specialized In
              </h3>
              
              <div className="max-h-80 overflow-y-auto pr-2 scrollbar-thin scrollbar-track-background scrollbar-thumb-neon-green/30">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="bg-background/70 rounded-lg p-3 text-center border border-border-subtle hover:border-neon-green/50 transition-all duration-300"
                    >
                      <div className="flex items-center justify-center space-x-2">
                        <span className="text-neon-green flex-shrink-0">{skill.icon}</span>
                        <span className="text-xs sm:text-sm font-mono text-text-secondary truncate">
                          {skill.name}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;