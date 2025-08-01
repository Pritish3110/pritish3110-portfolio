import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code2, 
  Globe, 
  Cpu, 
  Gamepad2, 
  Brain,
  MessageCircle,
  Lightbulb,
  Code,
  FileText,
  Zap,
  Coffee,
  Terminal,
  Palette,
  GitBranch,
  Database,
  Layers,
  Settings,
  Eye,
  Wrench,
  Monitor,
  Target,
  Box,
  Workflow,
  Search,
  Navigation
} from 'lucide-react';

const SkillsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.15,
    rootMargin: '-30px 0px'
  });

  const technicalSkills = [
    {
      category: 'Web Development',
      icon: Globe,
      color: 'text-green-400',
      skills: [
        { name: 'HTML5', icon: <Globe className="w-4 h-4" /> },
        { name: 'CSS3', icon: <Palette className="w-4 h-4" /> },
        { name: 'JavaScript', icon: <FileText className="w-4 h-4" /> },
        { name: 'TypeScript', icon: <Code className="w-4 h-4" /> },
        { name: 'React', icon: <Layers className="w-4 h-4" /> },
        { name: 'Next.js', icon: <Database className="w-4 h-4" /> },
        { name: 'Tailwind CSS', icon: <Wrench className="w-4 h-4" /> },
        { name: 'Framer Motion', icon: <Zap className="w-4 h-4" /> }
      ],
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30'
    },
    {
      category: 'Embedded Systems & Robotics',
      icon: Cpu,
      color: 'text-purple-400',
      skills: [
        { name: 'Robotics & Automation', icon: <Settings className="w-4 h-4" /> },
        { name: 'ROS2', icon: <Workflow className="w-4 h-4" /> },
        { name: 'SLAM', icon: <Navigation className="w-4 h-4" /> },
        { name: 'Arduino', icon: <Monitor className="w-4 h-4" /> },
        { name: 'C++', icon: <Code2 className="w-4 h-4" /> },
        { name: 'L298N Motor Driver', icon: <Zap className="w-4 h-4" /> },
        { name: 'IR Sensors', icon: <Eye className="w-4 h-4" /> },
        { name: 'Motor Control', icon: <Settings className="w-4 h-4" /> },
        { name: 'Flood Fill Algorithm', icon: <Search className="w-4 h-4" /> },
        { name: 'BFS Algorithm', icon: <Search className="w-4 h-4" /> }
      ],
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30'
    },
    {
      category: 'Tools & Platforms',
      icon: Wrench,
      color: 'text-blue-400',
      skills: [
        { name: 'Git', icon: <GitBranch className="w-4 h-4" /> },
        { name: 'GitHub', icon: <GitBranch className="w-4 h-4" /> },
        { name: 'Vercel', icon: <Globe className="w-4 h-4" /> },
        { name: 'Tinkercad', icon: <Box className="w-4 h-4" /> },
        { name: 'MATLAB', icon: <Terminal className="w-4 h-4" /> },
        { name: 'SolidWorks', icon: <Box className="w-4 h-4" /> }
      ],
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30'
    }
  ];

  const softSkills = [
    {
      icon: Brain,
      label: 'Leadership',
      description: 'Leading teams and driving innovation',
      color: 'text-pink-400'
    },
    {
      icon: MessageCircle,
      label: 'Communication',
      description: 'Clear and effective communication',
      color: 'text-cyan-400'
    },
    {
      icon: Lightbulb,
      label: 'Creative Problem Solving',
      description: 'Innovative solutions to complex challenges',
      color: 'text-yellow-400'
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 lg:px-12 bg-surface/30">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-orbitron font-bold text-neon-green mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-green to-purple-accent mx-auto mb-6" />
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            A comprehensive toolkit for building innovative solutions across multiple domains
          </p>
        </motion.div>

        {/* Technical Skills Grid */}
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {technicalSkills.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`bg-surface-light rounded-2xl p-8 border ${category.borderColor} hover:border-neon-green/50 transition-all duration-300`}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className={`${category.bgColor} p-3 rounded-xl`}>
                  <category.icon className={`w-8 h-8 ${category.color}`} />
                </div>
                <h3 className="text-xl font-space font-semibold text-text-primary">
                  {category.category}
                </h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4, delay: (index * 0.1) + (skillIndex * 0.05) }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-background/70 rounded-lg p-3 text-center border border-border-subtle hover:border-neon-green/30 transition-all duration-300"
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
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-3xl font-space font-semibold text-purple-accent mb-8">
            Soft Skills & Leadership
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-surface-light rounded-2xl p-6 border border-border-subtle hover:border-neon-green/50 transition-all duration-300"
              >
                <div className="mb-4">
                  <skill.icon className={`w-12 h-12 ${skill.color} mx-auto`} />
                </div>
                <h4 className="text-lg font-inter font-semibold text-text-primary mb-2">
                  {skill.label}
                </h4>
                <p className="text-text-muted text-sm">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;