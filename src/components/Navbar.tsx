import { motion } from 'framer-motion';
import { useState } from 'react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const Navbar = ({ activeSection, onNavigate }: NavbarProps) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const navItems = [
    { id: 'about', label: 'About Me', icon: '👨‍💻' },
    { id: 'skills', label: 'Technical Skills', icon: '⚡' },
    { id: 'resume', label: 'Resume', icon: '📄' },
    { id: 'projects', label: 'Featured Projects', icon: '🚀' }
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-lg border-b border-subtle"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-8 h-8">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <polygon
                  points="50,5 85,25 85,75 50,95 15,75 15,25"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  className="text-neon-green"
                />
                <text
                  x="50"
                  y="60"
                  textAnchor="middle"
                  className="text-neon-green text-2xl font-orbitron font-bold"
                  fontSize="28"
                >
                  P
                </text>
              </svg>
            </div>
            <span className="text-xl font-orbitron font-bold text-neon-green">
              Pritish
            </span>
          </motion.div>

          {/* Navigation Items */}
          <div className="flex items-center space-x-1">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                onHoverStart={() => setHoveredItem(item.id)}
                onHoverEnd={() => setHoveredItem(null)}
                className={`relative px-6 py-3 rounded-xl font-inter font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-background bg-neon-green shadow-lg'
                    : 'text-text-secondary hover:text-neon-green'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Hover background */}
                {hoveredItem === item.id && activeSection !== item.id && (
                  <motion.div
                    layoutId="navbar-hover"
                    className="absolute inset-0 bg-surface-light rounded-xl border border-neon-green/30"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
                
                <span className="relative z-10 flex items-center space-x-2">
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.label}</span>
                </span>

                {/* Glow effect for active item */}
                {activeSection === item.id && (
                  <div className="absolute inset-0 bg-neon-green rounded-xl blur-lg opacity-30 -z-10" />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;