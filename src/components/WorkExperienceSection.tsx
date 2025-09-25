import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, MapPin, Calendar, Code, Cpu, Brain, Users, Star, Camera } from 'lucide-react';

const WorkExperienceSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
    rootMargin: '-30px 0px'
  });

  const experiences = [
    {
      id: 'mafkin',
      company: 'Mafkin Robotics',
      role: 'Machine Learning & Robotics Intern',
      type: 'On-site',
      duration: 'July 2025 - Present',
      location: 'Chennai, India',
      highlights: [
        'Worked on environment mapping using a ZED2i camera paired with a NVIDIA Jetson Orin',
        'Implemented an RTAB-based mapping pipeline that uses both RGB and depth streams to generate and refine 3D meshes of indoor environments',
        'Responsibilities included sensor integration, calibration workflows, data capture pipelines (RGB+D), and producing 3D mesh outputs for mapping/visualization',
        'Focused on real-time processing and optimization for autonomous navigation applications'
      ],
      technologies: [
        { name: 'ZED2i Camera', icon: Camera },
        { name: 'NVIDIA Jetson Orin', icon: Cpu },
        { name: 'RTAB-Map', icon: Brain },
        { name: 'ROS 2', icon: Cpu },
        { name: 'Python', icon: Code }
      ],
      gradient: 'from-neon-green/20 to-cyan-400/20'
    },
    {
      id: 'anime-realm',
      company: 'Anime Realm Club',
      role: 'Leadership & Community Management',
      type: 'Core Member',
      duration: '2023 - Present',
      location: 'VIT Chennai',
      highlights: [
        'Led event coordination and planning for anime-themed activities, managing logistics for 200+ participants',
        'Built and managed an active community of anime enthusiasts through social media and campus engagement',
        'Created engaging content including event promotions, anime reviews, and community discussions',
        'Collaborated with club members to organize successful events, screenings, and cultural celebrations',
        'Developed leadership and communication skills while fostering an inclusive community environment'
      ],
      technologies: [
        { name: 'Leadership', icon: Users },
        { name: 'Event Planning', icon: Star },
        { name: 'Content Creation', icon: Code },
        { name: 'Community Building', icon: Users }
      ],
      gradient: 'from-purple-accent/20 to-pink-400/20'
    }
  ];

  return (
    <section id="experience" className="py-16 md:py-24 px-4 md:px-6 lg:px-12">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-orbitron font-bold text-neon-green mb-4">
            Work Experience
          </h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-neon-green to-purple-accent mx-auto mb-6"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
          <p className="text-base md:text-lg text-text-secondary max-w-2xl mx-auto">
            Professional experience in AI, robotics, and community leadership
          </p>
        </motion.div>

        <div className="space-y-8 md:space-y-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              className="group relative"
            >
              {/* Subtle glow effect on hover */}
              <motion.div
                className={`absolute -inset-1 bg-gradient-to-r ${experience.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`}
              />
              
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative bg-surface-light rounded-2xl p-6 md:p-8 border border-border-subtle hover:border-neon-green/30 transition-all duration-300 hover:shadow-lg hover:shadow-neon-green/10"
              >
                {/* Background decoration */}
                <div className="absolute top-4 right-4 w-16 h-16 border border-neon-green/5 rounded-full opacity-50" />
                <div className="absolute bottom-4 left-4 w-10 h-10 border border-purple-accent/5 rounded-lg rotate-12 opacity-50" />
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6 gap-4">
                    <div className="flex-1">
                      <motion.div
                        className="flex items-center space-x-3 mb-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.4 + index * 0.2 }}
                      >
                        <motion.div
                          className="bg-neon-green/10 p-2.5 rounded-lg"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Briefcase className="w-5 h-5 text-neon-green" />
                        </motion.div>
                        <div>
                          <h3 className="text-xl md:text-2xl font-space font-bold text-text-primary">
                            {experience.role}
                          </h3>
                          <p className="text-base md:text-lg text-purple-accent font-inter font-semibold">
                            {experience.company}
                          </p>
                        </div>
                      </motion.div>
                      
                      {/* Meta information */}
                      <motion.div
                        className="flex flex-wrap gap-4 text-sm text-text-muted"
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.6 + index * 0.2 }}
                      >
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{experience.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4" />
                          <span>{experience.location}</span>
                        </div>
                        <span className="px-3 py-1 bg-neon-green/10 text-neon-green rounded-full text-xs font-medium">
                          {experience.type}
                        </span>
                      </motion.div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <motion.div
                    className="mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8 + index * 0.2 }}
                  >
                    <h4 className="text-base md:text-lg font-inter font-semibold text-purple-accent mb-4">
                      Key Achievements:
                    </h4>
                    <div className="space-y-3">
                      {experience.highlights.map((highlight, highlightIndex) => (
                        <motion.div
                          key={highlightIndex}
                          initial={{ opacity: 0, x: -15 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.4, delay: 1.0 + index * 0.2 + highlightIndex * 0.1 }}
                          whileHover={{ x: 4 }}
                          className="flex items-start space-x-3 py-2 hover:bg-neon-green/5 rounded-lg px-3 -mx-3 transition-all duration-200"
                        >
                          <motion.div
                            className="w-2 h-2 bg-neon-green rounded-full flex-shrink-0 mt-2"
                            whileHover={{ scale: 1.5 }}
                            transition={{ duration: 0.2 }}
                          />
                          <span className="text-sm md:text-base text-text-secondary leading-relaxed">
                            {highlight}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Technologies/Skills */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1.2 + index * 0.2 }}
                  >
                    <h4 className="text-sm md:text-base font-inter font-semibold text-text-muted mb-3">
                      Technologies & Skills:
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {experience.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={tech.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={inView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: 1.4 + index * 0.2 + techIndex * 0.05 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="flex items-center space-x-2 bg-background/50 px-3 py-2 rounded-lg border border-border-subtle hover:border-neon-green/30 transition-all duration-200"
                        >
                          <tech.icon className="w-4 h-4 text-neon-green" />
                          <span className="text-xs md:text-sm text-text-secondary font-medium">
                            {tech.name}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperienceSection;