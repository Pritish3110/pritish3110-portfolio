import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  User,
  Zap,
  Download,
  MessageSquare,
  FolderOpen,
  Menu,
  X,
} from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const Navbar = ({ activeSection, onNavigate }: NavbarProps) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'about', label: 'About Me', icon: <User className="w-4 h-4" /> },
    { id: 'skills', label: 'Technical Skills', icon: <Zap className="w-4 h-4" /> },
    { id: 'resume', label: 'Resume', icon: <Download className="w-4 h-4" /> },
    { id: 'projects', label: 'Featured Projects', icon: <FolderOpen className="w-4 h-4" /> },
    { id: 'contact', label: 'Contact', icon: <MessageSquare className="w-4 h-4" /> },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="fixed top-0 left-0 right-0 z-40 bg-background/20 backdrop-blur-2xl border-b border-white/10 shadow-2xl"
      style={{
        background: 'linear-gradient(135deg, rgba(0,0,0,0.1) 0%, rgba(255,255,255,0.05) 100%)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        borderImage: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent) 1',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 py-4 relative">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <motion.div
            className="flex items-center justify-center"
            whileHover={{ scale: 1.1, rotate: 180 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <div className="relative w-10 h-10">
              <svg
                className="w-10 h-10 animate-pulse hover:animate-hexagon-spin"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon
                  points="50,5 85,25 85,75 50,95 15,75 15,25"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  className="text-neon-green drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-orbitron font-bold text-neon-green drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]">
                  P
                </span>
              </div>
              <div className="absolute inset-0 bg-neon-green rounded-full blur-xl opacity-30 animate-pulse" />
            </div>
          </motion.div>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                onHoverStart={() => setHoveredItem(item.id)}
                onHoverEnd={() => setHoveredItem(null)}
                className={`relative px-4 xl:px-6 py-3 rounded-xl font-inter font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-background bg-neon-green/90 shadow-lg backdrop-blur-sm'
                    : 'text-text-secondary hover:text-neon-green'
                }`}
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: activeSection === item.id
                    ? 'linear-gradient(135deg, rgba(34,197,94,0.9) 0%, rgba(34,197,94,0.7) 100%)'
                    : 'transparent',
                }}
              >
                {hoveredItem === item.id && activeSection !== item.id && (
                  <motion.div
                    layoutId="navbar-hover"
                    className="absolute inset-0 rounded-xl border border-neon-green/40"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)',
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                  />
                )}

                <span className="relative z-10 flex items-center space-x-2">
                  {item.icon}
                  <span className="hidden xl:block">{item.label}</span>
                </span>

                {activeSection === item.id && (
                  <div className="absolute inset-0 bg-neon-green rounded-xl blur-lg opacity-40 -z-10" />
                )}
              </motion.button>
            ))}
          </div>

          {/* Mobile Nav Toggle */}
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-text-secondary hover:text-neon-green transition-colors duration-300 relative"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '0.5rem',
              padding: '0.5rem',
            }}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Items */}
      <motion.div
        className={`lg:hidden border-b border-white/10 ${mobileMenuOpen ? 'block' : 'hidden'}`}
        style={{
          background: 'linear-gradient(135deg, rgba(0,0,0,0.2) 0%, rgba(255,255,255,0.05) 100%)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        }}
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: mobileMenuOpen ? 1 : 0,
          height: mobileMenuOpen ? 'auto' : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-50" />
        <div className="container mx-auto px-6 py-4 relative">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-left px-4 py-3 rounded-lg font-inter font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-background shadow-lg'
                    : 'text-text-secondary hover:text-neon-green'
                }`}
                style={{
                  background: activeSection === item.id
                    ? 'linear-gradient(135deg, rgba(34,197,94,0.9) 0%, rgba(34,197,94,0.7) 100%)'
                    : 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  border: activeSection === item.id ? 'none' : '1px solid rgba(255,255,255,0.1)',
                }}
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.95 }}
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
    </motion.nav>
  );
};

export default Navbar;
