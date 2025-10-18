import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect, useRef } from 'react';
import { Trophy, Award, Briefcase, Code2, ExternalLink, FileText, Star } from 'lucide-react';
import OracleBadge from '../assets/OracleBadge.jpg';

const AchievementsSection = () => {
  // Fixed intersection observer settings for navbar compatibility
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
    rootMargin: '-30px 0px'
  });

  const achievements = [
    {
      id: 'oracle-datascience-cert',
      title: 'Oracle Cloud Infrastructure – Data Science Certification',
      result: 'Certified',
      type: 'certification',
      date: 'OCI Data Science Certification',
      icon: <Award className="w-6 h-6" />,
      color: 'yellow-400',
      description: 'Completed certification in Oracle\'s OCI Data Science. Learned to build, train, and deploy machine learning models at scale on OCI. Covered data preprocessing, feature engineering, model evaluation, and lifecycle management using OCI Data Science tools. Also gained experience with JupyterLab notebooks, model catalogs, and automated pipelines for deployment.',
      highlights: ['ML model building & training', 'Data preprocessing & feature engineering', 'Model lifecycle management', 'JupyterLab & automated pipelines'],
      certificateUrl: 'https://drive.google.com/file/d/1tgOOPy6jCWD-jF-rj2glWv_Vxc_2QsRL/view?usp=sharing',
      certificateThumbnail: OracleBadge,
      certificateAlt: 'Oracle Cloud Infrastructure Data Science Certification'
    },
    {
      id: 'oracle-genai-cert',
      title: 'Oracle Cloud Infrastructure – Generative AI Certification',
      result: 'Certified',
      type: 'certification',
      date: 'Race to Certification Campaign',
      icon: <Award className="w-6 h-6" />,
      color: 'cyan-400',
      description: 'Completed as part of Oracle\'s Race to Certification campaign. Acquired practical knowledge in deploying and fine-tuning generative AI models on OCI, prompt design for LLM optimization, and integrating AI services with cloud-native applications. Also gained exposure to managing data pipelines, APIs, and monitoring workflows within OCI\'s AI ecosystem.',
      highlights: ['Generative AI model deployment', 'LLM optimization & prompt design', 'Cloud-native AI integration', 'Data pipelines & API management'],
      certificateUrl: 'https://drive.google.com/file/d/1AoGKexkWo1HXFFFzHmDvVMOTGtKN_mCI/view?usp=drive_link',
      certificateThumbnail: 'https://i.postimg.cc/667WbHhD/Oracle-Gen-AI-Badge.jpg',
      certificateAlt: 'Oracle Cloud Infrastructure Generative AI Certification'
    },
    {
      id: 'hack4health',
      title: 'Hack4Health (Perfint Healthcare Ltd.)',
      result: '1st Place',
      type: 'hackathon',
      date: 'September 11-12, 2025',
      icon: <Trophy className="w-6 h-6" />,
      color: 'purple-accent',
      description: '1st Place — Developed a complete autonomous docking system for hospital robotics infrastructure. Focused on precision docking, point-to-point navigation, and prototype productization using embedded systems and applied engineering.',
      highlights: ['Hospital robotics infrastructure', 'CEO recognition', 'Productized prototype', 'Healthcare domain expertise'],
      certificateUrl: 'https://drive.google.com/file/d/1PllBeo1J_8AaP2Oik8rugVcdGPF-0Kkp/view?usp=sharing',
      certificateThumbnail: 'https://i.postimg.cc/zfBZbB2h/Hack4-Health-certificate.jpg',
      certificateAlt: 'Hack4Health Perfint Healthcare First Place Certificate'
    },
    {
      id: 'e-thon',
      title: 'E-thon (IAIC @ VIT Chennai)',
      result: '1st Place',
      type: 'hackathon',
      date: 'August 29, 2025',
      icon: <Trophy className="w-6 h-6" />,
      color: 'neon-green',
      description: '1st Place — Built a rapid prototype (~4 hrs) of an autonomous hospital-assist bot with OCR-based equipment identification, embedded motor control, and autonomous navigation. Demonstrated real-time deployment, sanitization workflow, and system integration.',
      highlights: ['Rapid prototyping in 4 hours', 'Hardware + software integration', 'Autonomous navigation', 'Healthcare focus'],
      certificateUrl: 'https://drive.google.com/file/d/114IsQ7zGBrcv-l0l0MRY6zjZZD8c6_WG/view?usp=drive_link',
      certificateThumbnail: 'https://i.postimg.cc/FsyQwwkn/Thon-event-certification-page.jpg',
      certificateAlt: 'E-thon IAIC VIT Chennai First Place Certificate'
    }
  ];

  const CertificateCard = ({ achievement }) => {
    const [imageError, setImageError] = useState(false);
    return (
      <div className="bg-surface-light rounded-xl p-4 border border-border-subtle hover:border-neon-green/30 transition-all duration-300 group">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <FileText className="w-4 h-4 text-neon-green" />
            <span className="text-sm font-inter font-semibold text-text-primary">
              Certificate
            </span>
          </div>
          {achievement.certificateUrl && (
            <a 
              href={achievement.certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-xs text-purple-accent hover:text-neon-green transition-colors duration-200"
            >
              <span>View</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
        
        <div 
          className="aspect-video rounded-lg border border-border-subtle overflow-hidden mb-3 group-hover:border-neon-green/20 transition-all duration-300 cursor-pointer"
          onClick={() => achievement.certificateUrl && window.open(achievement.certificateUrl, '_blank')}
        >
          {achievement.certificateThumbnail && !imageError ? (
            <img
              src={achievement.certificateThumbnail}
              alt={achievement.certificateAlt}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              onError={() => setImageError(true)}
              loading="eager"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-background/50 to-surface/80 flex items-center justify-center">
              <div className="flex flex-col items-center space-y-2 text-text-muted">
                <FileText className="w-8 h-8" />
                <span className="text-xs font-inter text-center">
                  Certificate not available
                </span>
              </div>
            </div>
          )}
        </div>
        
        <p className="text-xs text-text-secondary leading-relaxed">
          {achievement.result} — {achievement.title}
        </p>
      </div>
    );
  };

  return (
    <section id="achievements" className="py-16 md:py-24 px-4 md:px-6 lg:px-12 bg-surface/20">
      <motion.div
        className="container mx-auto max-w-7xl"
      >
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ x: -50 }}
          animate={inView ? { x: 0 } : { x: -50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-orbitron font-bold text-neon-green mb-4">
            Certifications & Achievements
          </h2>
          <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-neon-green to-purple-accent mx-auto mb-6" />
          <p className="text-base md:text-lg text-text-secondary max-w-2xl mx-auto">
            Recognition and milestones in hackathons, internships, and key projects
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="space-y-6 md:space-y-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ x: -60, scale: 0.95 }}
              animate={inView ? { x: 0, scale: 1 } : { x: -60, scale: 0.95 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut"
              }}
              className="group relative"
            >
              {/* Minimalistic card with subtle border animation */}
              <div className="relative bg-surface-light rounded-xl md:rounded-2xl p-6 md:p-8 border border-border-subtle overflow-hidden transition-all duration-500 ease-out hover:border-neon-green/30">
                
                {/* Subtle top accent line that expands on hover */}
                <div className="absolute top-0 left-0 h-0.5 bg-gradient-to-r from-neon-green to-purple-accent w-0 group-hover:w-full transition-all duration-700 ease-out" />
                
                {/* Content container */}
                <div className="relative z-10">
                  <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-6">
                        <div className={`p-3 rounded-xl self-start transition-all duration-300 group-hover:scale-105 ${
                          achievement.color === 'neon-green' ? 'bg-neon-green/10' :
                          achievement.color === 'purple-accent' ? 'bg-purple-accent/10' :
                          achievement.color === 'cyan-400' ? 'bg-cyan-400/10' :
                          'bg-yellow-400/10'
                        }`}>
                          <div className={
                            achievement.color === 'neon-green' ? 'text-neon-green' :
                            achievement.color === 'purple-accent' ? 'text-purple-accent' :
                            achievement.color === 'cyan-400' ? 'text-cyan-400' :
                            'text-yellow-400'
                          }>
                            {achievement.icon}
                          </div>
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <h3 className="text-xl md:text-2xl font-space font-bold text-text-primary mb-3 transition-colors duration-300 group-hover:text-neon-green">
                            {achievement.title}
                          </h3>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-4">
                            <span className={`text-base md:text-lg font-inter font-semibold ${
                              achievement.color === 'neon-green' ? 'text-neon-green' :
                              achievement.color === 'purple-accent' ? 'text-purple-accent' :
                              achievement.color === 'cyan-400' ? 'text-cyan-400' :
                              'text-yellow-400'
                            }`}>
                              {achievement.result}
                            </span>
                            <span className="text-sm text-text-muted">
                              {achievement.date}
                            </span>
                          </div>
                          
                          {/* Type Badge */}
                          <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${
                            achievement.type === 'hackathon' ? 'bg-neon-green/20 text-neon-green border border-neon-green/30' :
                            achievement.type === 'internship' ? 'bg-cyan-400/20 text-cyan-400 border border-cyan-400/30' :
                            achievement.type === 'certification' ? 'bg-orange-400/20 text-orange-400 border border-orange-400/30' :
                            'bg-yellow-400/20 text-yellow-400 border border-yellow-400/30'
                          }`}>
                            {achievement.type === 'hackathon' ? 'Hackathon Victory' :
                             achievement.type === 'internship' ? 'Professional Experience' :
                             achievement.type === 'certification' ? 'Professional Certification' :
                             'Technical Project'}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="mb-6">
                        <p className="text-sm md:text-base text-text-secondary leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>

                      {/* Highlights */}
                      <div>
                        <h4 className="text-sm font-inter font-semibold text-text-muted mb-3">
                          Key Highlights:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {achievement.highlights.map((highlight, highlightIndex) => (
                            <div
                              key={highlightIndex}
                              className="bg-background/40 px-2.5 py-1 text-xs font-mono text-text-muted rounded-md border border-border-subtle transition-all duration-300 hover:border-neon-green/30 hover:text-text-secondary"
                            >
                              {highlight}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Certificate Card */}
                    <div className="lg:col-span-1">
                      <CertificateCard achievement={achievement} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AchievementsSection;