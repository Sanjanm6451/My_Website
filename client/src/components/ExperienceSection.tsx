import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  skills: string[];
  dotColor: string;
  timeBadgeColor: string;
  delay: number;
}

const ExperienceSection = () => {
  const [ref, controls] = useScrollAnimation();

  const experiences: Experience[] = [
    {
      id: 1,
      title: "Software Development Intern (Data Science)",
      company: "Zidio Software Development",
      location: "Bangalore",
      period: "Aug 2024 - Nov 2024",
      description: "Working on data science projects involving machine learning algorithms and data visualization for business intelligence solutions.",
      skills: ["Data Science", "Python", "Machine Learning", "Business Intelligence"],
      dotColor: "bg-blue-600 dark:bg-blue-400",
      timeBadgeColor: "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300",
      delay: 0
    },
    {
      id: 2,
      title: "Data Science Intern",
      company: "ANDINTERN",
      location: "Remote",
      period: "Jan 2024 - Mar 2024",
      description: "Developed data analysis pipelines and predictive models for client projects. Worked with large datasets to extract actionable insights.",
      skills: ["Data Analysis", "Python", "Pandas", "Predictive Modeling"],
      dotColor: "bg-violet-600 dark:bg-violet-400",
      timeBadgeColor: "bg-violet-100 dark:bg-violet-900/30 text-violet-800 dark:text-violet-300",
      delay: 0.2
    },
    {
      id: 3,
      title: "AWS Cloud Internship",
      company: "AWS Academy Program",
      location: "",
      period: "Summer 2023",
      description: "Completed comprehensive training on AWS Foundation and Architecture. Gained hands-on experience with various AWS services and cloud infrastructure.",
      skills: ["AWS", "Cloud Computing", "Infrastructure as Code", "DevOps"],
      dotColor: "bg-emerald-600 dark:bg-emerald-400",
      timeBadgeColor: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300",
      delay: 0.4
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: i * 0.2
      }
    })
  };

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Internships</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400">
            My professional journey so far
          </p>
        </motion.div>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="relative border-l-4 border-blue-600 dark:border-blue-400 ml-3 md:ml-6 pl-6 md:pl-8 space-y-12"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              custom={exp.delay}
              variants={itemVariants}
              className={`relative ${index !== experiences.length - 1 ? 'pb-8' : ''}`}
            >
              <div className={`absolute -left-10 md:-left-14 top-0 w-6 h-6 ${exp.dotColor} rounded-full border-4 border-white dark:border-slate-900`}></div>
              <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 ml-2">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <span className={`text-sm ${exp.timeBadgeColor} px-3 py-1 rounded-full mt-2 sm:mt-0`}>
                    {exp.period}
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  {exp.company}{exp.location && `, ${exp.location}`}
                </h4>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
