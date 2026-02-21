import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section container">
            <motion.div
                className="contact-content"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
            >
                <div className="section-header" style={{ marginBottom: "2rem" }}>
                    <div className="header-line left"></div>
                    <h2><span className="text-gradient">Get In Touch</span></h2>
                    <div className="header-line right"></div>
                </div>
                <p className="contact-text">
                    I am actively preparing for product-based company placements and exploring new opportunities.
                    Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
                </p>

                <a href="mailto:hello@example.com" className="btn btn-primary contact-btn">
                    <Mail size={20} /> Say Hello
                </a>

                <div className="contact-socials">
                    <a href="https://github.com/Devansh232406" target="_blank" aria-label="Github"><Github size={24} /></a>
                    <a href="https://www.linkedin.com/in/devansh-joshi-a9a893322/" target="_blank" aria-label="LinkedIn"><Linkedin size={24} /></a>
                </div>
            </motion.div>

            <footer className="footer">
                <p>Forged with conviction.</p>
                <p>Architected for the intelligent web.</p>
            </footer>
        </section>
    );
};

export default Contact;
