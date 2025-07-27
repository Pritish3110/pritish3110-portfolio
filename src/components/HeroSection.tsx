import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin, Code, Award } from 'lucide-react';
import profilePhoto from '../assets/profile-photo.jpg';

const HeroSection = () => {
  const socialLinks = [
    { 
      icon: Mail, 
      href: 'mailto:pritishbhatasana68@gmail.com',
      label: 'Gmail',
      color: 'hover:text-red-400'
    },
    { 
      icon: Linkedin, 
      href: 'https://linkedin.com/in/pritish3110',
      label: 'LinkedIn',
      color: 'hover:text-blue-400'
    },
    { 
      icon: Github, 
      href: 'https://github.com/Pritish3110',
      label: 'GitHub',
      color: 'hover:text-purple-400'
    },
    { 
      icon: Code, 
      href: 'https://codechef.com/users/pritish_3110',
      label: 'CodeChef',
      color: 'hover:text-orange-400'
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg font-inter text-text-secondary tracking-wide"
            >
              👋 Hello, I'm
            </motion.p>

            {/* Name with multiple typography styles */}
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-6xl lg:text-7xl font-orbitron font-black text-text-primary"
              >
                PRITISH
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-4xl lg:text-5xl font-space font-bold text-text-primary"
              >
                BHATASANA
              </motion.h2>
            </div>

            {/* Role & Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="space-y-4"
            >
              <h3 className="text-2xl lg:text-3xl font-space font-semibold text-purple-accent">
                AI & Robotics Engineer
              </h3>
              <p className="text-lg font-inter text-text-secondary leading-relaxed max-w-xl">
                Tech-driven. Robot-obsessed. Always building. Passionate about creating 
                intelligent systems that blend creativity with precision.
              </p>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="space-y-3"
            >
              <div className="flex items-center space-x-3 text-text-muted">
                <Mail className="w-4 h-4" />
                <span className="font-mono text-sm">pritishbhatasana68@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-text-muted">
                <MapPin className="w-4 h-4" />
                <span className="font-mono text-sm">+91-8200080298 • VIT, Vellore</span>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="flex items-center space-x-6"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-text-secondary transition-colors duration-300 ${social.color}`}
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                >
                  <social.icon className="w-8 h-8" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Background decoration */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-neon-green to-purple-accent rounded-3xl opacity-20 blur-xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Profile image container */}
              <motion.div
                className="relative bg-surface-light rounded-3xl p-2 border border-neon-green/30"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={profilePhoto}
                  alt="Pritish Bhatasana"
                  className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-2xl"
                />
                
                {/* Floating accent elements */}
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
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-neon-green rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-neon-green rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;