"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    SiMongodb,
    SiExpress,
    SiReact,
    SiNodedotjs,
    SiWordpress,
    SiTailwindcss,
    SiNextdotjs,
    SiTypescript,
    SiMysql,
    SiGit,
    SiJavascript,
    SiHtml5,
    SiFramer
} from "react-icons/si";

const techStack = [
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Express.js", icon: SiExpress, color: "#ffffff" },
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "WordPress", icon: SiWordpress, color: "#21759B" },
    { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
];

const TechStack = () => {
    return (
        <section className="py-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-secondary font-orbitron tracking-widest text-xs uppercase mb-2">
                        Technologies
                    </h2>
                    <h1 className="text-4xl md:text-5xl font-bold font-orbitron text-glow">
                        Tech <span className="text-primary">Arsenal</span>
                    </h1>
                </motion.div>

                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {techStack.map((tech, index) => (
                        <motion.div
                            key={tech.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            whileHover={{
                                scale: 1.1,
                                y: -10,
                                transition: { duration: 0.2 }
                            }}
                            className="glass-panel p-6 rounded-2xl flex flex-col items-center justify-center gap-3 group hover:border-primary/50 transition-all cursor-pointer relative overflow-hidden"
                        >
                            {/* Glow effect on hover */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity blur-xl"
                                style={{ backgroundColor: tech.color }}
                            />

                            <tech.icon
                                className="w-12 h-12 transition-all duration-300 relative z-10"
                                style={{ color: tech.color }}
                            />
                            <p className="text-[10px] font-black uppercase tracking-wider text-white/60 group-hover:text-white transition-colors text-center relative z-10">
                                {tech.name}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Decorative Background */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] -z-10" />
            </div>
        </section>
    );
};

export default TechStack;
