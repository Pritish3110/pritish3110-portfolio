import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, FileText, Eye, Star } from 'lucide-react';
import { Button } from './ui/button';

const ResumeSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.15,
    rootMargin: '-30px 0px'
  });

  const handleDownload = () => {
    // Google Drive direct download link
    const driveLink = 'https://drive.google.com/uc?export=download&id=1dHz8Wx2-aaN2xSkXm96YDFxHnyV1FBqF';
    window.open(driveLink, '_blank');
  };

  const handlePreview = () => {
    // Google Drive preview link
    const previewLink = 'https://drive.google.com/file/d/1dHz8Wx2-aaN2xSkXm96YDFxHnyV1FBqF/view';
    window.open(previewLink, '_blank');
  };

  const highlights = [
    'AI & Robotics Specialization',
    'Multiple Project Experiences',
    'Technical & Leadership Skills',
    'Academic Excellence'
  ];

  return (
    <section id="resume" className="py-20 px-6 lg:px-12">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-orbitron font-bold text-neon-green mb-4">
            Resume
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-green to-purple-accent mx-auto mb-6" />
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Download my comprehensive resume to explore my journey, skills, and achievements
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-surface-light rounded-3xl p-6 sm:p-8 lg:p-12 border border-border-subtle relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-10 left-10 w-20 h-20 border-2 border-neon-green rounded-full" />
              <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-purple-accent rounded-lg rotate-45" />
              <div className="absolute top-1/2 right-20 w-12 h-12 border-2 border-neon-green rounded-full" />
            </div>

            <div className="relative z-10">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Left Content */}
                <div className="space-y-8">
                  <div className="flex items-center space-x-4">
                    <div className="bg-neon-green/10 p-4 rounded-2xl">
                      <FileText className="w-12 h-12 text-neon-green" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-space font-bold text-text-primary">
                        My Resume
                      </h3>
                      <p className="text-text-muted">
                        AI & Robotics Engineer
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-inter font-semibold text-purple-accent">
                      Key Highlights:
                    </h4>
                    <div className="grid grid-cols-1 gap-3">
                      {highlights.map((highlight, index) => (
                        <motion.div
                          key={highlight}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                          className="flex items-center space-x-3"
                        >
                          <Star className="w-5 h-5 text-neon-green" />
                          <span className="text-text-secondary">{highlight}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        onClick={handleDownload}
                        className="bg-gradient-to-r from-neon-green to-neon-green-dim hover:from-neon-green-dim hover:to-neon-green text-background font-inter font-semibold px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-0"
                      >
                        <Download className="w-5 h-5 mr-2" />
                        Download Resume
                      </Button>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        onClick={handlePreview}
                        variant="outline"
                        className="border-2 border-purple-accent text-purple-accent hover:bg-purple-accent hover:text-background font-inter font-semibold px-8 py-6 rounded-xl transition-all duration-300"
                      >
                        <Eye className="w-5 h-5 mr-2" />
                        Preview Online
                      </Button>
                    </motion.div>
                  </div>
                </div>

                {/* Right Content - Resume Preview */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="flex justify-center"
                >
                  <div className="relative">
                    {/* Resume mockup */}
                    <div className="bg-background rounded-2xl p-8 shadow-2xl border border-border-subtle max-w-sm">
                      <div className="space-y-4">
                        {/* Header */}
                        <div className="text-center border-b border-border-subtle pb-4">
                          <div className="w-16 h-16 bg-neon-green/20 rounded-full mx-auto mb-2" />
                          <div className="h-4 bg-text-muted/20 rounded w-3/4 mx-auto mb-2" />
                          <div className="h-3 bg-text-muted/10 rounded w-1/2 mx-auto" />
                        </div>

                        {/* Sections */}
                        {[1, 2, 3, 4].map((section) => (
                          <div key={section} className="space-y-2">
                            <div className="h-3 bg-neon-green/30 rounded w-1/3" />
                            <div className="space-y-1">
                              <div className="h-2 bg-text-muted/20 rounded w-full" />
                              <div className="h-2 bg-text-muted/20 rounded w-4/5" />
                              <div className="h-2 bg-text-muted/20 rounded w-3/5" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Floating elements */}
                    <motion.div
                      className="absolute -top-4 -right-4 w-8 h-8 bg-neon-green rounded-full"
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.div
                      className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-accent rounded-full"
                      animate={{ y: [0, 10, 0] }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;