import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useToast } from "@/hooks/use-toast";
import { FaEnvelope, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { sendEmail } from "@/lib/emailjs";

const ContactSection = () => {
  const [ref, controls] = useScrollAnimation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "All fields are required",
        description: "Please fill in all fields to send your message.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      await sendEmail(formData);
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
        variant: "default"
      });
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Failed to send your message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: i * 0.2
      }
    })
  };

  const contactInfo = [
    {
      id: 1,
      title: "Email",
      value: "sumanthgowdach123@gmail.com",
      icon: <FaEnvelope className="text-blue-600 dark:text-blue-400" />,
      link: "mailto:sumanthgowdach123@gmail.com"
    },
    {
      id: 2,
      title: "LinkedIn",
      value: "https://www.linkedin.com/in/sumanth-ch-b5617824a/",
      icon: <FaLinkedinIn className="text-blue-600 dark:text-blue-400" />,
      link: "https://www.linkedin.com/in/sumanth-ch-b5617824a/"
    },
    {
      id: 3,
      title: "GitHub",
      value: "https://github.com/sumanth-0",
      icon: <FaGithub className="text-blue-600 dark:text-blue-400" />,
      link: "https://github.com/sumanth-0"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </motion.div>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          <motion.div 
            custom={0}
            variants={itemVariants}
            className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6"
          >
            <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2 text-sm font-medium">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 text-sm font-medium">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block mb-2 text-sm font-medium">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <motion.button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </motion.div>
          
          <motion.div custom={0.2} variants={itemVariants} className="space-y-8">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <ul className="space-y-4">
                {contactInfo.map(info => (
                  <li key={info.id} className="flex items-start">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-4">
                      {info.icon}
                    </div>
                    <div>
                      <p className="font-medium">{info.title}</p>
                      <a href={info.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                        {info.value}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-blue-600 to-violet-600 rounded-lg p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Let's work together!</h3>
              <p className="mb-4">
                I'm currently available for freelance work and internship opportunities. 
                If you have a project that needs some creative input, feel free to reach out.
              </p>
              <div className="flex justify-center">
                <motion.a 
                  href="#contact" 
                  className="px-6 py-2 bg-white text-blue-600 font-medium rounded-md hover:bg-blue-50 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get in Touch
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
