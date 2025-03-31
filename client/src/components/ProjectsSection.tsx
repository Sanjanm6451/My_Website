import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { FaChevronDown, FaChevronUp, FaGithub } from "react-icons/fa";

interface ProjectTag {
  name: string;
  color: string;
}

interface ProjectFeature {
  id: number;
  text: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: ProjectTag[];
  details: {
    features: ProjectFeature[];
    technicalDetails: string;
  };
  githubLink: string;
  delay: number;
}

const ProjectsSection = () => {
  const [ref, controls] = useScrollAnimation();
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const toggleProjectDetails = (projectId: number) => {
    if (expandedProject === projectId) {
      setExpandedProject(null);
    } else {
      setExpandedProject(projectId);
    }
  };

  const projects: Project[] = [
    {
      id: 1,
      title: "Phishing Detection Website",
      description: "A machine learning powered web application that detects phishing websites to protect users from online scams.",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
      tags: [
        { name: "Python", color: "blue" },
        { name: "Django", color: "green" },
        { name: "AWS", color: "yellow" },
        { name: "MongoDB", color: "gray" }
      ],
      details: {
        features: [
          { id: 1, text: "Real-time URL scanning and analysis" },
          { id: 2, text: "Machine learning model with 95% accuracy" },
          { id: 3, text: "Responsive design for mobile and desktop" },
          { id: 4, text: "User alert system for dangerous websites" }
        ],
        technicalDetails: "Backend built with Python and Django, deployed on AWS. Uses MongoDB for data storage and custom ML models trained on phishing datasets."
      },
      githubLink: "#",
      delay: 0
    },
    {
      id: 2,
      title: "AI-Driven Surveillance",
      description: "Intelligent surveillance system using computer vision to detect and track objects and people.",
      image: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
      tags: [
        { name: "ML", color: "blue" },
        { name: "AWS", color: "yellow" },
        { name: "OpenCV", color: "purple" },
        { name: "YOLO", color: "red" }
      ],
      details: {
        features: [
          { id: 1, text: "Real-time object detection and tracking" },
          { id: 2, text: "Face recognition with MTCNN" },
          { id: 3, text: "Audio monitoring with PyAudio" },
          { id: 4, text: "Cloud storage and retrieval on AWS" }
        ],
        technicalDetails: "Used YOLO for object detection with 30 FPS processing speed. Implemented face recognition using MTCNN models and deployed the solution on AWS EC2 instances."
      },
      githubLink: "#",
      delay: 0.2
    },
    {
      id: 3,
      title: "House Price Prediction",
      description: "ML model for predicting real estate prices based on various features and market trends.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
      tags: [
        { name: "Python", color: "blue" },
        { name: "Scikit-learn", color: "green" },
        { name: "Pandas", color: "yellow" },
        { name: "Flask", color: "red" }
      ],
      details: {
        features: [
          { id: 1, text: "Regression models with 89% accuracy" },
          { id: 2, text: "Feature importance analysis" },
          { id: 3, text: "Interactive web interface for predictions" },
          { id: 4, text: "Visual data analytics of housing trends" }
        ],
        technicalDetails: "Used ensemble methods including Random Forest and Gradient Boosting for prediction. Flask backend with interactive charts using D3.js for visualizations."
      },
      githubLink: "#",
      delay: 0.4
    },
    {
      id: 4,
      title: "E-commerce Price Prediction",
      description: "Data-driven pricing strategy model for e-commerce platforms to optimize product pricing.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
      tags: [
        { name: "Python", color: "blue" },
        { name: "TensorFlow", color: "green" },
        { name: "Data Analysis", color: "yellow" },
        { name: "Visualization", color: "purple" }
      ],
      details: {
        features: [
          { id: 1, text: "Competitive price analysis" },
          { id: 2, text: "Demand forecasting algorithms" },
          { id: 3, text: "Seasonal pricing adjustments" },
          { id: 4, text: "Profit optimization models" }
        ],
        technicalDetails: "Implemented neural networks with TensorFlow for price prediction based on historical data, market trends, and competitor analysis. Used Tableau for interactive dashboards."
      },
      githubLink: "#",
      delay: 0.6
    }
  ];

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

  return (
    <section id="projects" className="py-20 bg-slate-100 dark:bg-slate-800/50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400">
            Check out some of my recent work
          </p>
        </motion.div>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              custom={project.delay}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden transition-all duration-300"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-60 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className={`px-3 py-1 bg-${tag.color}-100 dark:bg-${tag.color}-900/30 text-${tag.color}-800 dark:text-${tag.color}-300 text-sm rounded-full`}
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <button 
                    onClick={() => toggleProjectDetails(project.id)}
                    className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                  >
                    <span>View Details</span>
                    {expandedProject === project.id ? <FaChevronUp /> : <FaChevronDown />}
                  </button>
                  <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <FaGithub className="text-lg" />
                  </a>
                </div>
                {expandedProject === project.id && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700"
                  >
                    <h4 className="font-semibold mb-2">Features:</h4>
                    <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-400 mb-4">
                      {project.details.features.map((feature) => (
                        <li key={feature.id}>{feature.text}</li>
                      ))}
                    </ul>
                    <h4 className="font-semibold mb-2">Technical Details:</h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      {project.details.technicalDetails}
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
