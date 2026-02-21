import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import './Projects.css';

const projects = [
    {
        id: 1,
        title: "Predictive Analytics Engine",
        description: "A machine learning pipeline built with Python and Scikit-learn to forecast customer churn. Features extensive EDA, automated feature scaling, and model evaluation comparing Random Forest and XGBoost.",
        tags: ["Python", "Scikit-Learn", "Pandas", "Matplotlib"],
        links: { github: "#", live: "#" }
    },
    {
        id: 2,
        title: "Algorithmic Trading Bot",
        description: "High-frequency trading simulator implemented in C++ leveraging optimized data structures for low-latency order matching and execution analysis.",
        tags: ["C++", "Algorithms", "Data Structures"],
        links: { github: "#", live: "" }
    },
    {
        id: 3,
        title: "ML Visualization Dashboard",
        description: "An interactive web application demonstrating the internal mechanics of KNN and Decision Trees in real-time. Built with React and integrated with a Python backend.",
        tags: ["React", "TypeScript", "Express.js", "Python"],
        links: { github: "#", live: "#" }
    }
];

const Projects = () => {
    return (
        <section id="work" className="projects-section container">
            <motion.div
                className="section-header"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
            >
                <div className="header-line left"></div>
                <h2><span className="text-gradient">Featured Work</span></h2>
                <div className="header-line right"></div>
            </motion.div>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        className="project-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <div className="project-content">
                            <div className="project-top">
                                <div className="folder-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-folder"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                                </div>
                                <div className="project-links">
                                    {project.links.github && (
                                        <a href={project.links.github} target="_blank" rel="noreferrer" aria-label="GitHub Link">
                                            <Github size={20} />
                                        </a>
                                    )}
                                    {project.links.live && (
                                        <a href={project.links.live} target="_blank" rel="noreferrer" aria-label="External Link">
                                            <ExternalLink size={20} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <h3 className="project-title"><a href={project.links.live || project.links.github} target="_blank" rel="noreferrer">{project.title}</a></h3>
                            <div className="project-description">
                                <p>{project.description}</p>
                            </div>

                            <ul className="project-tech-list">
                                {project.tags.map((tag, i) => (
                                    <li key={i}>{tag}</li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
