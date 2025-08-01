import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { User, GraduationCap, Award } from 'lucide-react';

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px',
  });

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

  return (
    <section id="about" className="py-20 px-6 lg:px-12 bg-surface/30">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
        className="container mx-auto max-w-7xl"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
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

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left - My Journey */}
          <motion.div
            initial={{ opacity: 0, rotateY: 90, scale: 0.8 }}
            animate={inView ? { opacity: 1, rotateY: 0, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-surface-light rounded-2xl p-8 border border-border-subtle hover:border-neon-green/50 transition-all duration-300"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-neon-green/10 p-4 rounded-2xl">
                <User className="w-8 h-8 text-neon-green" />
              </div>
              <h3 className="text-2xl font-space font-bold text-text-primary">My Journey</h3>
            </div>

            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                I'm an AI & Robotics Engineer driven by the vision of creating intelligent systems
                that solve real-world problems.
              </p>
              <p>
                From autonomous maze-solving robots to AI-powered chess systems, I believe in
                building technology that showcases innovation and delivers real impact.
              </p>
              <p>
                <strong className="text-neon-green">My Vision:</strong> To develop intelligent
                automation that enhances human capabilities and advances robotics and AI.
              </p>
            </div>
          </motion.div>

          {/* Right - Education */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-surface-light rounded-2xl p-8 border border-border-subtle hover:border-purple-accent/50 transition-all duration-300 h-fit"
          >
            <div className="flex items-center space-x-4 mb-8">
              <div className="bg-purple-accent/10 p-4 rounded-2xl">
                <GraduationCap className="w-8 h-8 text-purple-accent" />
              </div>
              <h3 className="text-2xl font-space font-bold text-text-primary">🎓 Education</h3>
            </div>

            <div className="space-y-8">
              {/* College */}
              <div className="border-l-4 border-neon-green pl-6">
                <h4 className="text-xl font-semibold text-text-primary mb-2">
                  B.Tech in Computer Science (AI & Robotics)
                </h4>
                <p className="text-text-secondary font-medium mb-2">
                  Vellore Institute of Technology (VIT), 2023 – 2027
                </p>
                <div className="flex items-center space-x-2 mb-4">
                  <Award className="w-4 h-4 text-neon-green" />
                  <span className="text-sm text-neon-green font-semibold">Current CGPA: 8.4</span>
                </div>

                <div className="mt-4">
                  <p className="text-text-primary font-semibold mb-3">Relevant Coursework:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {relevantCourses.map((course, index) => (
                      <motion.div
                        key={course}
                        className="flex items-center space-x-2 py-1"
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.8 + index * 0.1 }}
                      >
                        <div className="w-1.5 h-1.5 bg-neon-green rounded-full flex-shrink-0" />
                        <span className="text-sm text-text-secondary">{course}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 12th */}
              <div className="border-l-4 border-purple-accent pl-6">
                <h4 className="text-lg font-semibold text-text-primary mb-2">
                  12th Grade – Sarwamangal High School
                </h4>
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4 text-purple-accent" />
                  <span className="text-sm text-purple-accent font-semibold">
                    Passed with 89.90 percentile
                  </span>
                </div>
              </div>

              {/* 10th */}
              <div className="border-l-4 border-yellow-400 pl-6">
                <h4 className="text-lg font-semibold text-text-primary mb-2">
                  10th Grade – Mahan High School
                </h4>
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm text-yellow-400 font-semibold">
                    Passed with 99.68 percentile
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
