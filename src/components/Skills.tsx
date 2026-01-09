"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layout, Server, Globe, Database, Settings } from "lucide-react";

const skillCategories = [
    {
        title: "Full Stack (MERN)",
        icon: <Layout className="w-8 h-8" />,
        skills: ["React.js / Next.js", "Node.js / Express", "MongoDB / SQL", "RESTful APIs"],
        desc: "Building scalable and robust web systems from scratch."
    },
    {
        title: "WordPress / CMS",
        icon: <Globe className="w-8 h-8" />,
        skills: ["WordPress Customization", "Elementor Pro", "WooCommerce", "SEO Optimization"],
        desc: "Providing high-speed, easy-to-manage web solutions."
    },
    {
        title: "Database & Tools",
        icon: <Settings className="w-8 h-8" />,
        skills: ["MongoDB / MySQL", "Git / GitHub", "Postman / Jira", "Render / Vercel"],
        desc: "Managing data integrity and streamlined deployment."
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-32 relative bg-black/50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-20">
                    <h2 className="text-secondary font-orbitron font-black text-sm uppercase tracking-[0.4em] mb-4">Stack</h2>
                    <h1 className="text-5xl md:text-7xl font-black font-orbitron tracking-tighter">TECHNICAL <br /> <span className="text-gradient">CAPABILITIES.</span></h1>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {skillCategories.map((cat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-panel p-10 rounded-[3rem] group hover:border-primary/50 transition-all duration-500"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                                <div className="text-primary">{cat.icon}</div>
                            </div>
                            <h3 className="text-2xl font-black font-orbitron mb-4">{cat.title}</h3>
                            <p className="text-white/40 text-sm mb-8 leading-relaxed font-medium">{cat.desc}</p>
                            <div className="flex flex-wrap gap-2">
                                {cat.skills.map((s, idx) => (
                                    <span key={idx} className="text-[10px] font-black uppercase tracking-widest text-primary/70 bg-primary/5 px-3 py-1 rounded-full border border-primary/10">
                                        {s}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
