import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { Send, MessageCircle, Zap, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import emailjs from 'emailjs-com';
import { useToast } from '../hooks/use-toast';

const ContactSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.15,
    rootMargin: '-30px 0px'
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_9z957sp',
        'template_8hv5o9s',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Pritish Bhatasana'
        },
        'U4X1hdrXt4Qyks9V0'
      );

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
        duration: 5000,
      });

      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: "Failed to Send Message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 lg:px-12">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-orbitron font-bold text-neon-green mb-4">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-green to-purple-accent mx-auto mb-6" />
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Let's build something amazing together!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-surface-light rounded-2xl p-8 lg:p-12 border border-border-subtle relative overflow-hidden"
        >
          {/* Subtle background decoration */}
          <div className="absolute top-8 right-8 w-20 h-20 border border-neon-green/10 rounded-full" />
          <div className="absolute bottom-8 left-8 w-16 h-16 border border-purple-accent/10 rounded-lg" />
          
          <div className="relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-8"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-neon-green/10 p-4 rounded-xl">
                    <MessageCircle className="w-8 h-8 text-neon-green" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-space font-bold text-text-primary">
                      Send a Message
                    </h3>
                    <p className="text-text-muted">
                      I'd love to hear from you
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-background/50 rounded-xl p-6 border border-border-subtle">
                    <div className="flex items-center space-x-3 mb-4">
                      <Zap className="w-5 h-5 text-purple-accent" />
                      <h4 className="text-lg font-inter font-semibold text-purple-accent">
                        Let's Discuss:
                      </h4>
                    </div>
                    <ul className="space-y-2 text-text-secondary">
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-neon-green rounded-full" />
                        <span>Robotics & AI Projects</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-neon-green rounded-full" />
                        <span>Web Development Collaborations</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-neon-green rounded-full" />
                        <span>Technical Consultations</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-neon-green rounded-full" />
                        <span>Learning & Mentorship</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-background/50 rounded-xl p-6 border border-border-subtle">
                    <div className="flex items-center space-x-3 mb-4">
                      <Clock className="w-5 h-5 text-purple-accent" />
                      <h4 className="text-lg font-inter font-semibold text-purple-accent">
                        Quick Response
                      </h4>
                    </div>
                    <p className="text-text-secondary">
                      I typically respond within 24 hours. For urgent matters, 
                      feel free to reach out directly via email or phone.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-text-primary font-inter font-medium mb-2">
                        Name *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your full name"
                        className="bg-background/50 border-border-subtle text-text-primary placeholder:text-text-muted focus:border-neon-green transition-colors duration-300 h-12"
                      />
                    </div>

                    <div>
                      <label className="block text-text-primary font-inter font-medium mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your.email@example.com"
                        className="bg-background/50 border-border-subtle text-text-primary placeholder:text-text-muted focus:border-neon-green transition-colors duration-300 h-12"
                      />
                    </div>

                    <div>
                      <label className="block text-text-primary font-inter font-medium mb-2">
                        Message *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        placeholder="Tell me about your project or how we can collaborate..."
                        className="bg-background/50 border-border-subtle text-text-primary placeholder:text-text-muted focus:border-neon-green transition-colors duration-300 resize-none"
                      />
                    </div>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-neon-green to-neon-green-dim hover:from-neon-green-dim hover:to-neon-green text-background font-inter font-semibold py-6 rounded-xl transition-all duration-300 disabled:opacity-50 group/btn"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center space-x-2">
                          <div className="w-5 h-5 border-2 border-background border-t-transparent rounded-full animate-spin" />
                          <span>Sending...</span>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-2">
                          <Send className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                          <span>Send Message</span>
                        </div>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-center mt-16 pt-8 border-t border-border-subtle"
        >
          <p className="text-text-muted font-inter">
            © 2024 Pritish Bhatasana. Built with passion for innovation.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;