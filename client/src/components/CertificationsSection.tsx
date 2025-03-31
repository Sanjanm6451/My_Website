import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { FaCloud, FaCode, FaTrophy, FaCertificate, FaAward, FaLaptopCode } from "react-icons/fa";

interface Certification {
  id: number;
  title: string;
  issuer: string;
  icon: JSX.Element;
}

interface CertificationCategory {
  id: number;
  title: string;
  icon: JSX.Element;
  iconBg: string;
  iconTextColor: string;
  certifications: Certification[];
  delay: number;
}

const CertificationsSection = () => {
  const [ref, controls] = useScrollAnimation();

  const cloudDataCertifications: Certification[] = [
    {
      id: 1,
      title: "AWS Academy Data Engineering Certification",
      issuer: "Amazon Web Services",
      icon: <FaCertificate className="text-yellow-500 mt-1 mr-3" />
    },
    {
      id: 2,
      title: "AWS Academy Cloud Architecting Certification",
      issuer: "Amazon Web Services",
      icon: <FaCertificate className="text-yellow-500 mt-1 mr-3" />
    },
    {
      id: 3,
      title: "Google Advanced Data Analytics",
      issuer: "Google",
      icon: <FaCertificate className="text-yellow-500 mt-1 mr-3" />
    },
    {
      id: 4,
      title: "Google IT Automation with Python",
      issuer: "Google",
      icon: <FaCertificate className="text-yellow-500 mt-1 mr-3" />
    },
    {
      id: 5,
      title: "Data Science Associate Certificate",
      issuer: "DataCamp",
      icon: <FaCertificate className="text-yellow-500 mt-1 mr-3" />
    },
    {
      id: 6,
      title: "NPTEL Cloud Computing",
      issuer: "IIT Madras",
      icon: <FaCertificate className="text-yellow-500 mt-1 mr-3" />
    }
  ];

  const webProgrammingCertifications: Certification[] = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      issuer: "Udemy, Angela Yu",
      icon: <FaCertificate className="text-yellow-500 mt-1 mr-3" />
    },
    {
      id: 2,
      title: "JavaScript Fundamentals",
      issuer: "Coursera",
      icon: <FaCertificate className="text-yellow-500 mt-1 mr-3" />
    }
  ];

  const achievements: Certification[] = [
    {
      id: 1,
      title: "First place in paper presentation at Advaya",
      issuer: "National-Level Symposium",
      icon: <FaAward className="text-amber-500 mt-1 mr-3" />
    },
    {
      id: 2,
      title: "Hackathon participant",
      issuer: "Various coding competitions",
      icon: <FaLaptopCode className="text-blue-500 mt-1 mr-3" />
    }
  ];

  const certificationCategories: CertificationCategory[] = [
    {
      id: 1,
      title: "Cloud & Data Science",
      icon: <FaCloud className="text-xl text-blue-600 dark:text-blue-400" />,
      iconBg: "bg-blue-100 dark:bg-blue-900/30",
      iconTextColor: "text-blue-600 dark:text-blue-400",
      certifications: cloudDataCertifications,
      delay: 0
    },
    {
      id: 2,
      title: "Web & Programming",
      icon: <FaCode className="text-xl text-violet-600 dark:text-violet-400" />,
      iconBg: "bg-violet-100 dark:bg-violet-900/30",
      iconTextColor: "text-violet-600 dark:text-violet-400",
      certifications: webProgrammingCertifications,
      delay: 0.2
    },
    {
      id: 3,
      title: "Other Achievements",
      icon: <FaTrophy className="text-xl text-emerald-600 dark:text-emerald-400" />,
      iconBg: "bg-emerald-100 dark:bg-emerald-900/30",
      iconTextColor: "text-emerald-600 dark:text-emerald-400",
      certifications: achievements,
      delay: 0.4
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
    <section id="certifications" className="py-20 bg-slate-100 dark:bg-slate-800/50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications & Achievements</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400">
            Professional certifications and accomplishments
          </p>
        </motion.div>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Cloud & Data Science Certifications */}
          <motion.div
            custom={certificationCategories[0].delay}
            variants={itemVariants}
            className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6"
          >
            <div className="flex items-center mb-6">
              <div className={`w-12 h-12 ${certificationCategories[0].iconBg} rounded-full flex items-center justify-center mr-4`}>
                {certificationCategories[0].icon}
              </div>
              <h3 className="text-xl font-bold">{certificationCategories[0].title}</h3>
            </div>
            
            <ul className="space-y-4">
              {certificationCategories[0].certifications.map((cert) => (
                <li key={cert.id} className="flex items-start">
                  {cert.icon}
                  <div>
                    <p className="font-medium">{cert.title}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{cert.issuer}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Web & Programming + Achievements */}
          <div className="space-y-8">
            {/* Web & Programming */}
            <motion.div
              custom={certificationCategories[1].delay}
              variants={itemVariants}
              className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6"
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 ${certificationCategories[1].iconBg} rounded-full flex items-center justify-center mr-4`}>
                  {certificationCategories[1].icon}
                </div>
                <h3 className="text-xl font-bold">{certificationCategories[1].title}</h3>
              </div>
              
              <ul className="space-y-4">
                {certificationCategories[1].certifications.map((cert) => (
                  <li key={cert.id} className="flex items-start">
                    {cert.icon}
                    <div>
                      <p className="font-medium">{cert.title}</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{cert.issuer}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            {/* Other Achievements */}
            <motion.div
              custom={certificationCategories[2].delay}
              variants={itemVariants}
              className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6"
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 ${certificationCategories[2].iconBg} rounded-full flex items-center justify-center mr-4`}>
                  {certificationCategories[2].icon}
                </div>
                <h3 className="text-xl font-bold">{certificationCategories[2].title}</h3>
              </div>
              
              <ul className="space-y-4">
                {certificationCategories[2].certifications.map((cert) => (
                  <li key={cert.id} className="flex items-start">
                    {cert.icon}
                    <div>
                      <p className="font-medium">{cert.title}</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{cert.issuer}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;
