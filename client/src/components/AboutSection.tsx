import { FaGraduationCap, FaSchool } from "react-icons/fa";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const [ref, controls] = useScrollAnimation();

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
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const educationItems = [
    {
      id: 1,
      icon: <FaGraduationCap className="mt-1 mr-3 text-blue-600 dark:text-blue-400" />,
      title: "Bachelor of Technology (B.Tech Hons) in Computer Science Engineering",
      place: "AMC Engineering College, VTU (2021-2025) | CGPA: 8.7"
    },
    {
      id: 2,
      icon: <FaSchool className="mt-1 mr-3 text-blue-600 dark:text-blue-400" />,
      title: "Senior Secondary (CBSE)",
      place: "90% (2021)"
    },
    {
      id: 3,
      icon: <FaSchool className="mt-1 mr-3 text-blue-600 dark:text-blue-400" />,
      title: "Secondary (CBSE)",
      place: "90% (2019)"
    }
  ];

  const interestTags = [
    { id: 1, name: "Cloud Computing ☁️", color: "blue" },
    { id: 2, name: "AI & Machine Learning 🤖", color: "violet" },
    { id: 3, name: "Cybersecurity 🔐", color: "emerald" },
    { id: 4, name: "Web Development 🌐", color: "amber" }
  ];

  return (
    <section id="about" className="py-20 bg-slate-100 dark:bg-slate-800/50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </motion.div>
        
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-blue-600 rounded-lg blur opacity-75 -z-10"></div>
            <div className="relative rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" 
                alt="Programmer coding" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </motion.div>
          
          <div>
            <motion.h3 variants={itemVariants} className="text-2xl font-bold mb-6">Who am I?</motion.h3>
            <motion.p variants={itemVariants} className="mb-6 text-lg">
              I'm a Computer Science Engineering student at AMC Engineering College, VTU with a passion for Cloud Computing, 
              AI & Machine Learning, and Web Development. I love building innovative solutions and exploring new technologies.
            </motion.p>
            
            <motion.h4 variants={itemVariants} className="text-xl font-semibold mb-4">🎓 Education</motion.h4>
            <motion.ul variants={itemVariants} className="space-y-3 mb-6">
              {educationItems.map((item) => (
                <li key={item.id} className="flex items-start">
                  {item.icon}
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-slate-600 dark:text-slate-400">{item.place}</p>
                  </div>
                </li>
              ))}
            </motion.ul>
            
            <motion.h4 variants={itemVariants} className="text-xl font-semibold mb-4">🌟 Interests</motion.h4>
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-6">
              {interestTags.map((tag) => (
                <span 
                  key={tag.id} 
                  className={`px-4 py-2 bg-${tag.color}-100 dark:bg-${tag.color}-900/40 text-${tag.color}-800 dark:text-${tag.color}-300 rounded-full`}
                >
                  {tag.name}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
