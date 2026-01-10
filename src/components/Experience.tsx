"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
    {
        role: "MERN Stack Developer Intern",
        company: "Morphius AI",
        period: "Oct 2025 – Present",
        desc: "Collaborating to build scalable full-stack applications. Developing responsive interfaces and integrating RESTful APIs with React.js and Node.js."
    },
    {
        role: "MERN Stack Developer Trainee",
        company: "10000 Coders",
        period: "Apr 2024 - Sep 2025",
        desc: "Intensive training in MERN stack. Built dynamic front-end apps and handled server-side logic with Express.js and MongoDB."
    },
    {
        role: "Associate Analyst",
        company: "GlobalLogic (Hitachi Group)",
        period: "Jun 2023 - March 2024",
        desc: "Managed geocoding and data verification using SQL expertise to optimize performance and maintain data integrity."
    }
];

const education = [
    {
        degree: "Bachelor of Technology",
        school: "KG Reddy College (JNTUH)",
        period: "2019 – 2022",
        desc: "Mechanical Engineering. CGPA: 6.9"
    },
    {
        degree: "Diploma",
        school: "State Board of Technical Education",
        period: "2016 – 2019",
        desc: "Percentage: 84%"
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-secondary font-orbitron tracking-widest text-xs uppercase mb-2">
                        History
                    </h2>
                    <h1 className="text-4xl md:text-5xl font-bold font-orbitron text-glow">
                        Professional <span className="text-primary">Journey</span>
                    </h1>
                </motion.div>

                <div className="space-y-12 max-w-4xl mx-auto">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="animate-float" style={{ animationDelay: `${index * 1.2}s` }}>
                                <div className="bg-glass p-8 rounded-2xl border border-white/10 relative overflow-hidden group hover:border-primary/50 transition-all">
                                    {/* Glowing Aura */}
                                    <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500" />

                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <Briefcase className="w-16 h-16" />
                                    </div>
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 relative z-10">
                                        <div>
                                            <h3 className="text-xl font-bold font-orbitron text-primary">{exp.role}</h3>
                                            <p className="text-foreground/80 font-medium">{exp.company}</p>
                                        </div>
                                        <span className="text-xs font-orbitron px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary self-start">
                                            {exp.period}
                                        </span>
                                    </div>
                                    <p className="text-foreground/60 leading-relaxed max-w-2xl text-sm relative z-10">
                                        {exp.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    <div className="pt-10">
                        <h2 className="text-2xl font-bold font-orbitron mb-8 text-center text-glow">Education</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="animate-float" style={{ animationDelay: `${index * 1.5}s` }}>
                                        <div className="bg-glass p-6 rounded-2xl border border-white/10 hover:border-secondary/50 transition-all relative group">
                                            {/* Glowing Aura */}
                                            <div className="absolute -inset-2 bg-gradient-to-r from-secondary/20 via-primary/20 to-secondary/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500" />

                                            <GraduationCap className="text-secondary w-8 h-8 mb-4 relative z-10" />
                                            <h3 className="text-lg font-bold font-orbitron text-secondary relative z-10">{edu.degree}</h3>
                                            <p className="text-foreground/80 text-sm mb-1 relative z-10">{edu.school}</p>
                                            <p className="text-foreground/50 text-xs mb-3 relative z-10">{edu.period}</p>
                                            <p className="text-foreground/60 text-sm relative z-10">{edu.desc}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
