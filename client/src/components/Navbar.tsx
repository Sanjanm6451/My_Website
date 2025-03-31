import { useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import { FaSun, FaMoon, FaBars } from "react-icons/fa";

const Navbar = () => {
  const { toggleTheme, isDarkMode } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll to add shadow
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#certifications", label: "Certifications" },
    { href: "#contact", label: "Contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur z-50 transition-all duration-300 ${scrolled ? 'shadow-sm' : ''}`}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.a 
          href="#" 
          className="text-xl font-bold text-blue-600 dark:text-blue-400 flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          onClick={(e) => handleNavClick(e, "#home")}
        >
          <span>&lt;</span>Sumanth CH<span>/&gt;</span>
        </motion.a>
        
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => (
            <motion.a 
              key={link.href}
              href={link.href} 
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </motion.a>
          ))}
        </div>
        
        <div className="flex items-center gap-4">
          {/* Dark mode toggle */}
          <motion.button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {isDarkMode ? <FaMoon className="text-blue-400" /> : <FaSun className="text-blue-600" />}
          </motion.button>
          
          {/* Mobile menu button */}
          <motion.button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <FaBars />
          </motion.button>
        </div>
      </nav>
      
      {/* Mobile menu */}
      <motion.div 
        className={`md:hidden fixed top-[72px] left-0 right-0 bg-white dark:bg-slate-800 shadow-md ${mobileMenuOpen ? 'block' : 'hidden'}`}
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: mobileMenuOpen ? 'auto' : 0,
          opacity: mobileMenuOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className="py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;
