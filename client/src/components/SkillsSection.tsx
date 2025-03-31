import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { FaCode, FaServer, FaTools, FaPython, FaJs, FaJava, FaAws, FaReact, FaDatabase, FaDocker, FaGithub } from "react-icons/fa";

interface SkillProgress {
  name: string;
  percentage: number;
}

interface SkillCategory {
  id: number;
  title: string;
  icon: JSX.Element;
  skills: SkillProgress[];
  color: string;
  delay: number;
}

const SkillsSection = () => {
  const [ref, controls] = useScrollAnimation();

  const skillCategories: SkillCategory[] = [
    {
      id: 1,
      title: "Programming",
      icon: <FaCode className="text-2xl text-blue-600 dark:text-blue-400 mr-3" />,
      skills: [
        { name: "Python", percentage: 90 },
        { name: "JavaScript", percentage: 80 },
        { name: "Java", percentage: 75 }
      ],
      color: "blue",
      delay: 0
    },
    {
      id: 2,
      title: "Technologies",
      icon: <FaServer className="text-2xl text-violet-600 dark:text-violet-400 mr-3" />,
      skills: [
        { name: "AWS", percentage: 85 },
        { name: "Machine Learning", percentage: 80 },
        { name: "Django", percentage: 75 }
      ],
      color: "violet",
      delay: 0.2
    },
    {
      id: 3,
      title: "Tools",
      icon: <FaTools className="text-2xl text-emerald-600 dark:text-emerald-400 mr-3" />,
      skills: [
        { name: "GitHub", percentage: 90 },
        { name: "Docker", percentage: 70 },
        { name: "VS Code", percentage: 95 }
      ],
      color: "emerald",
      delay: 0.4
    }
  ];

  const techStack = [
    { id: 1, name: "Python", icon: <FaPython className="text-blue-500" /> },
    { id: 2, name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
    { id: 3, name: "Java", icon: <FaJava className="text-red-500" /> },
    { id: 4, name: "AWS", icon: <FaAws className="text-orange-500" /> },
    { id: 5, name: "React", icon: <FaReact className="text-blue-400" /> },
    { id: 6, name: "SQL", icon: <FaDatabase className="text-green-500" /> },
    { id: 7, name: "Docker", icon: <FaDocker className="text-blue-600" /> },
    { id: 8, name: "GitHub", icon: <FaGithub className="text-slate-700 dark:text-slate-300" /> }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400">
            Here are the technologies and tools I've been working with
          </p>
        </motion.div>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          {skillCategories.map((category) => (
            <motion.div 
              key={category.id}
              variants={itemVariants}
              custom={category.delay}
              className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md"
              style={{ 
                animationDelay: `${category.delay}s`,
                opacity: 0,
                transform: 'translateY(20px)',
                transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out'
              }}
            >
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <div key={index} className="skill">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span>{skill.percentage}%</span>
                    </div>
                    <div className="progress-bar relative w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <motion.div 
                        className={`progress absolute h-full bg-${category.color}-600 dark:bg-${category.color}-500 rounded-full`}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.percentage}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mt-16 flex flex-wrap justify-center gap-4"
        >
          {techStack.map((tech) => (
            <motion.span 
              key={tech.id}
              variants={itemVariants}
              className="px-4 py-2 bg-white dark:bg-slate-800 rounded-md shadow-sm flex items-center space-x-2"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              {tech.icon}
              <span>{tech.name}</span>
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
