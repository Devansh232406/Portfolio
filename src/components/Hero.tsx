import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero-section container">
            <div className="hero-content">
                <motion.div
                    className="hero-badge"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Machine Learning Engineer
                </motion.div>

                <motion.h1
                    className="hero-title"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    Building Intelligent <br />
                    Solutions with <br />
                    <span className="text-gradient">Data & Code.</span>
                </motion.h1>

                <motion.p
                    className="hero-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    I am a problem solver with a strong foundation in classical ML and data structures.
                    Specializing in C++, Python, and crafting scalable data pipelines.
                </motion.p>

                <motion.div
                    className="hero-actions"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <a href="#work" className="btn btn-primary">
                        View My Work <ArrowRight size={18} />
                    </a>
                    <a href="#about" className="btn btn-secondary">
                        About Me
                    </a>
                </motion.div>
            </div>

            <motion.div
                className="hero-image-container"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <div className="hero-image-wrapper">
                    <img src="/profile.jpg" alt="Devansh Joshi" className="hero-profile-image" />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
