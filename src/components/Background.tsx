import { useMemo } from 'react';
import { motion } from 'framer-motion';
import './Background.css';

const Background = () => {
    const particles = useMemo(() => {
        // Generate 60 random particles that fit the ML / Cyber aesthetic
        return Array.from({ length: 60 }).map((_, i) => {
            const isEmerald = i % 3 === 0;
            const isBlue = i % 3 === 1;

            return {
                id: i,
                size: Math.random() * 3 + 1, // Size between 1px and 4px
                x: Math.random() * 100, // Random X position (vw)
                y: Math.random() * 100, // Random Y position (vh)
                duration: Math.random() * 20 + 20, // Slower float (20s - 40s)
                delay: Math.random() * -20, // Start animation randomly in the middle
                opacity: Math.random() * 0.5 + 0.1, // Random base opacity
                colorClass: isEmerald ? 'emerald' : isBlue ? 'blue' : 'cyan'
            };
        });
    }, []);

    return (
        <div className="background-container">
            {/* 3D Perspective Grid */}
            <div className="bg-grid-wrapper">
                <div className="bg-grid"></div>
            </div>

            {/* Floating Nodes/Stars */}
            {particles.map(p => (
                <motion.div
                    key={p.id}
                    className={`particle ${p.colorClass}`}
                    style={{
                        width: p.size,
                        height: p.size,
                        left: `${p.x}vw`,
                        top: `${p.y}vh`,
                    }}
                    animate={{
                        y: ["0vh", "-15vh", "0vh"],
                        x: ["0vw", "3vw", "0vw"],
                        opacity: [p.opacity, p.opacity + 0.4, p.opacity],
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        ease: "linear",
                        delay: p.delay
                    }}
                />
            ))}

            {/* Overlay to fade grid out at top/bottom edges */}
            <div className="bg-overlay"></div>
        </div>
    );
};

export default Background;
