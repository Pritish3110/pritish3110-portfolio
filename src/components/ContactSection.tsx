import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { Send, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import emailjs from 'emailjs-com';
import { useToast } from '../hooks/use-toast';

const ContactSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
    rootMargin: '-50px 0px'
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
    <section id="contact" className="py-20 px-6 lg:px-12">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-orbitron font-bold text-neon-green mb-4">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-green to-purple-accent mx-auto mb-6" />
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Let's build something amazing together!
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
              <div className="absolute top-10 right-10 w-32 h-32 border-2 border-neon-green rounded-full" />
              <div className="absolute bottom-10 left-10 w-24 h-24 border-2 border-purple-accent rounded-lg rotate-45" />
              <div className="absolute top-1/2 left-20 w-16 h-16 border-2 border-neon-green rounded-full" />
            </div>

            <div className="relative z-10">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                {/* Left Content */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="space-y-8"
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-neon-green/10 p-4 rounded-2xl">
                      <MessageCircle className="w-12 h-12 text-neon-green" />
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
                    <div className="bg-background/50 rounded-2xl p-6 border border-border-subtle">
                      <h4 className="text-lg font-inter font-semibold text-purple-accent mb-4">
                        💡 Let's Discuss:
                      </h4>
                      <ul className="space-y-2 text-text-secondary">
                        <li>• Robotics & AI Projects</li>
                        <li>• Web Development Collaborations</li>
                        <li>• Technical Consultations</li>
                        <li>• Learning & Mentorship</li>
                      </ul>
                    </div>

                    <div className="bg-background/50 rounded-2xl p-6 border border-border-subtle">
                      <h4 className="text-lg font-inter font-semibold text-purple-accent mb-4">
                        ⚡ Quick Response
                      </h4>
                      <p className="text-text-secondary">
                        I typically respond within 24 hours. For urgent matters, 
                        feel free to reach out directly via email or phone.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 }}
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
                          className="bg-background/70 border-border-subtle text-text-primary placeholder:text-text-muted focus:border-neon-green transition-colors duration-300"
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
                          className="bg-background/70 border-border-subtle text-text-primary placeholder:text-text-muted focus:border-neon-green transition-colors duration-300"
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
                          className="bg-background/70 border-border-subtle text-text-primary placeholder:text-text-muted focus:border-neon-green transition-colors duration-300 resize-none"
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
                        className="w-full bg-gradient-to-r from-neon-green to-neon-green-dim hover:from-neon-green-dim hover:to-neon-green text-background font-inter font-semibold py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center space-x-2">
                            <div className="w-5 h-5 border-2 border-background border-t-transparent rounded-full animate-spin" />
                            <span>Sending...</span>
                          </div>
                        ) : (
                          <div className="flex items-center space-x-2">
                            <Send className="w-5 h-5" />
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
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
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