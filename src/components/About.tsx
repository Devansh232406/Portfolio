import { motion } from 'framer-motion';
import { Network, Terminal, GitBranch, Target } from 'lucide-react';
import './About.css';

const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, duration: 0.5 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section id="about" className="about-section container">
            <motion.div
                className="section-header"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
            >
                <div className="header-line left"></div>
                <h2><span className="text-gradient">About Me</span></h2>
                <div className="header-line right"></div>
            </motion.div>

            <div className="about-content">
                <motion.div
                    className="about-text-container"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <motion.div className="about-text-inner" variants={itemVariants}>
                        <p>
                            I am a Machine Learning enthusiast and problem solver with a strong foundation in classical ML and data structures. My primary programming language is <strong>C++</strong>, which I use extensively for algorithmic problem solving and competitive coding.
                        </p>
                        <p>
                            I work with <strong>Python</strong> and <strong>Scikit-learn</strong> to build and evaluate machine learning models, focusing on clean data pipelines, feature scaling, and structured experimentation. My experience includes implementing algorithms such as KNN, Decision Trees, Random Forest, Naive Bayes, and Regression models.
                        </p>
                        <p>
                            On the development side, I build interactive web applications using <strong>React</strong> and manage version control workflows with Git and GitHub. I have collaborated in hackathon environments, structured repositories efficiently, and handled real-world integration scenarios.
                        </p>
                        <p>
                            I am actively preparing for product-based company placements while deepening my understanding of machine learning systems and scalable software design.
                        </p>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="about-cards"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <motion.div className="about-card" variants={itemVariants}>
                        <div className="card-icon"><Target size={24} /></div>
                        <h3>Algorithms & DS</h3>
                        <p>Extensive competitive coding and problem-solving in C++.</p>
                    </motion.div>

                    <motion.div className="about-card" variants={itemVariants}>
                        <div className="card-icon"><Network size={24} /></div>
                        <h3>Classical ML</h3>
                        <p>Scikit-learn, predictive modeling, and feature pipelines.</p>
                    </motion.div>

                    <motion.div className="about-card" variants={itemVariants}>
                        <div className="card-icon"><Terminal size={24} /></div>
                        <h3>Web Dev</h3>
                        <p>Interactive web apps with React and TypeScript.</p>
                    </motion.div>

                    <motion.div className="about-card" variants={itemVariants}>
                        <div className="card-icon"><GitBranch size={24} /></div>
                        <h3>Collaboration</h3>
                        <p>Git, GitHub, and hackathon experience.</p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
