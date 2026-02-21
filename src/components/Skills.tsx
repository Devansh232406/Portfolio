import { motion } from 'framer-motion';
import { Database, Code, Brain, LayoutTemplate, LineChart } from 'lucide-react';
import './Skills.css';

const skillCategories = [
    {
        title: "Programming Languages",
        icon: <Code size={20} />,
        skills: ["Python", "C++", "C", "Java"]
    },
    {
        title: "Machine Learning & Analytics",
        icon: <Brain size={20} />,
        skills: ["Predictive Modeling", "Data Modeling", "NLP", "Model Evaluation", "Statistical Analysis", "EDA"]
    },
    {
        title: "Libraries & Frameworks",
        icon: <LineChart size={20} />,
        skills: ["Scikit Learn", "NumPy", "Pandas", "SciPy", "Matplotlib", "PyTorch"]
    },
    {
        title: "Web Technologies",
        icon: <LayoutTemplate size={20} />,
        skills: ["React", "Express.js", "Node.js"]
    },
    {
        title: "Databases",
        icon: <Database size={20} />,
        skills: ["MySQL", "Microsoft SQL Server", "MongoDB"]
    }
];

const Skills = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section id="skills" className="skills-section container">
            <motion.div
                className="section-header"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
            >
                <div className="header-line left"></div>
                <h2><span className="text-gradient">Technical Arsenal</span></h2>
                <div className="header-line right"></div>
            </motion.div>

            <motion.div
                className="skills-grid"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                {skillCategories.map((category, index) => (
                    <motion.div
                        key={index}
                        className="skill-card"
                        variants={itemVariants}
                        whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0,242,254,0.15)' }}
                    >
                        <div className="skill-card-header">
                            <div className="skill-icon">{category.icon}</div>
                            <h3>{category.title}</h3>
                        </div>

                        <div className="skill-tags">
                            {category.skills.map((skill, i) => (
                                <span key={i} className="skill-tag">{skill}</span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Skills;
