import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { User, Zap, Download, MessageSquare, FolderOpen, Menu, X } from 'lucide-react';

const Navbar = ({ activeSection, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: 'About Me', icon: <User className="w-4 h-4" /> },
    { id: 'skills', label: 'Technical Skills', icon: <Zap className="w-4 h-4" /> },
    { id: 'resume', label: 'Resume', icon: <Download className="w-4 h-4" /> },
    { id: 'projects', label: 'Featured Projects', icon: <FolderOpen className="w-4 h-4" /> },
    { id: 'contact', label: 'Contact', icon: <MessageSquare className="w-4 h-4" /> }
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: 0, 
        opacity: 1,
        background: scrollY > 50 
          ? 'linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(20,20,20,0.9) 100%)'
          : 'linear-gradient(135deg, rgba(0,0,0,0.1) 0%, rgba(255,255,255,0.05) 100%)'
      }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10"
      style={{
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 py-4 relative">
        <div className="flex items-center justify-between">
          {/* Logo - Updated to Neon Cyan */}
          <motion.div
            className="flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative w-12 h-12 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-10 h-10">
                <polygon
                  points="50,5 90,25 90,75 50,95 10,75 10,25"
                  fill="none"
                  stroke="#06b6d4"
                  strokeWidth="3"
                />
                <text 
                  x="50" 
                  y="60" 
                  textAnchor="middle" 
                  fill="#06b6d4" 
                  fontFamily="JetBrains Mono" 
                  fontSize="24" 
                  fontWeight="bold"
                >
                  P
                </text>
              </svg>
            </div>
          </motion.div>

          {/* Navigation Items - Desktop (Minimalistic) */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`relative px-4 py-2 rounded-lg font-inter font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-cyan-400 bg-cyan-400/10 border border-cyan-400/20'
                    : 'text-text-secondary hover:text-cyan-400 hover:bg-cyan-400/5'
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <span className="flex items-center space-x-2">
                  {item.icon}
                  <span className="hidden xl:block">{item.label}</span>
                </span>
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-3 rounded-lg text-text-secondary hover:text-cyan-400 transition-colors duration-300 bg-background/50 border border-border-subtle"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden border-t border-white/10 bg-background/95 backdrop-blur-xl"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-6 py-6">
              <div className="flex flex-col space-y-3">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => {
                      onNavigate(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`text-left px-4 py-3 rounded-lg font-inter font-medium transition-all duration-300 ${
                      activeSection === item.id
                        ? 'text-cyan-400 bg-cyan-400/10 border border-cyan-400/20'
                        : 'text-text-secondary hover:text-cyan-400 hover:bg-cyan-400/5'
                    }`}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <span className="flex items-center space-x-3">
                      {item.icon}
                      <span>{item.label}</span>
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;