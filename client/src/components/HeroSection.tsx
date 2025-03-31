import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const HeroSection = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const phrases = [
    "Aspiring Cloud & AI Engineer",
    "Data Science Enthusiast",
    "Web Developer",
    "Problem Solver"
  ];
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayBetweenPhrases = 1000;
  const isDeleting = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const typeNextCharacter = () => {
      const currentPhrase = phrases[currentIndex];
      
      // Typing or deleting logic
      if (!isDeleting.current) {
        // Still typing the current phrase
        if (currentText.length < currentPhrase.length) {
          setCurrentText(currentPhrase.slice(0, currentText.length + 1));
          timeoutRef.current = setTimeout(typeNextCharacter, typingSpeed);
        } 
        // Finished typing - pause then delete
        else {
          isDeleting.current = true;
          timeoutRef.current = setTimeout(typeNextCharacter, delayBetweenPhrases);
        }
      } else {
        // Still deleting the current phrase
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, currentText.length - 1));
          timeoutRef.current = setTimeout(typeNextCharacter, deletingSpeed);
        } 
        // Finished deleting - move to next phrase
        else {
          isDeleting.current = false;
          setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
          timeoutRef.current = setTimeout(typeNextCharacter, typingSpeed);
        }
      }
    };

    timeoutRef.current = setTimeout(typeNextCharacter, typingSpeed);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentText, currentIndex, phrases]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={itemVariants} className="text-blue-600 dark:text-blue-400 font-medium mb-2">
            👋 Hi there, I'm
          </motion.p>
          <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Sumanth CH
          </motion.h1>
          <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-semibold text-slate-600 dark:text-slate-400 mb-6 h-10">
            <span className="typewriter">{currentText}</span>
            <span className="animate-pulse">|</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg md:text-xl mb-8 max-w-lg">
            B.Tech in Computer Science Engineering enthusiast with a passion for 
            building innovative solutions using cloud, AI, and web technologies.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <motion.a 
              href="#contact"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
            <motion.a 
              href="#projects"
              className="px-6 py-3 bg-transparent border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600/10 font-medium rounded-md transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex gap-4 mt-8">
            <motion.a 
              href="https://github.com/sumanth-0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xl text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/sumanth-ch-b5617824a/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xl text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a 
              href="mailto:sumanthgowdach123@gmail.com"
              className="text-xl text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaEnvelope />
            </motion.a>
          </motion.div>
        </motion.div>
        
        <motion.div
          className="relative"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-violet-600 rounded-lg blur opacity-75"></div>
          <div className="relative bg-white dark:bg-slate-800 rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" 
              alt="Modern tech workspace" 
              className="w-full h-auto rounded-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
