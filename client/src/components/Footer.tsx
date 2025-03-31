import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#certifications", label: "Certifications" },
    { href: "#contact", label: "Contact" }
  ];

  const techTags = [
    "Python",
    "AWS",
    "Machine Learning",
    "JavaScript",
    "Django",
    "Data Science"
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a href="#" className="text-xl font-bold text-white flex items-center gap-2 mb-4">
              <span>&lt;</span>Sumanth CH<span>/&gt;</span>
            </a>
            <p className="mb-4">
              Aspiring Cloud & AI Engineer with a passion for building innovative solutions.
            </p>
            <div className="flex gap-4">
              <motion.a 
                href="https://github.com/sumanth-0" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white transition-colors"
                whileHover={{ y: -2 }}
              >
                <FaGithub className="text-lg" />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/sumanth-ch-b5617824a/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white transition-colors"
                whileHover={{ y: -2 }}
              >
                <FaLinkedin className="text-lg" />
              </motion.a>
              <motion.a 
                href="mailto:sumanthgowdach123@gmail.com"
                className="text-slate-300 hover:text-white transition-colors"
                whileHover={{ y: -2 }}
              >
                <FaEnvelope className="text-lg" />
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold mb-4">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {techTags.map((tech, index) => (
                <motion.span 
                  key={index}
                  className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-full"
                  whileHover={{ scale: 1.05 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Sumanth CH. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
