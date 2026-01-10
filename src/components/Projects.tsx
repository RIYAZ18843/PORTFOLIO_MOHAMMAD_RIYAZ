"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        title: "Food Delivery Web App",
        description: "Full-stack food delivery platform with user/admin panels, JWT auth, cart management, and payment processing.",
        tech: ["React.js", "Node.js", "MongoDB", "Express", "JWT"],
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800",
        link: "https://food-delivery-web-fullstack-frontend.onrender.com/",
        github: "https://github.com/RIYAZ18843"
    },
    {
        title: "E-commerce Website",
        description: "Full-stack luxury e-commerce platform with dynamic product grids, glassmorphic checkout, and multi-category navigation.",
        tech: ["React.js", "Context API", "React Router", "Tailwind CSS"],
        image: "/ecommerce-mockup.png",
        link: "https://e-commerce-nine-kohl-68.vercel.app/",
        github: "https://github.com/RIYAZ18843"
    },
    {
        title: "Professional Portfolio",
        description: "Custom WordPress portfolio featuring a luxurious design, Elementor Pro layouts, and WooCommerce integration for e-commerce functionality.",
        tech: ["WordPress", "Elementor Pro", "WooCommerce", "SEO"],
        image: "/wordpress-portfolio.png",
        link: "https://riyaz.expiryhedge.com/",
        github: "https://github.com/RIYAZ18843"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-secondary font-orbitron tracking-widest text-xs uppercase mb-2">
                        Selected Work
                    </h2>
                    <h1 className="text-4xl md:text-5xl font-bold font-orbitron text-glow">
                        Featured <span className="text-primary">Projects</span>
                    </h1>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            className="group bg-glass border border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 transition-all relative animate-pulse-glow"
                        >
                            {/* Inner Floating Wrapper to avoid conflict with hover scale */}
                            <div className="animate-float" style={{ animationDelay: `${index * 1.5}s` }}>
                                {/* Glowing Aura Effect - Matching Hero Section */}
                                <div className="absolute -inset-3 bg-gradient-to-r from-primary via-secondary to-primary rounded-2xl opacity-20 blur-lg animate-pulse-glow -z-10" />

                                {/* Rotating border effect */}
                                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="absolute inset-[-2px] bg-gradient-to-r from-primary via-secondary to-primary rounded-2xl animate-rotate-border blur-sm -z-10" />
                                </div>

                                <div className="relative h-48 overflow-hidden animate-cyber-glitch" style={{ animationDelay: `${index * 0.2}s` }}>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        loading="lazy"
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    {/* Shimmer effect on hover */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 animate-shimmer" />

                                    <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                        <a href={project.github} target="_blank" className="p-2 bg-primary rounded-full text-background hover:scale-110 transition-transform">
                                            <Github className="w-5 h-5" />
                                        </a>
                                        <a href={project.link} target="_blank" className="p-2 bg-primary rounded-full text-background hover:scale-110 transition-transform">
                                            <ExternalLink className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>
                                <div className="p-6 relative z-10 bg-black/40">
                                    <h3 className="text-lg font-bold font-orbitron mb-2 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-foreground/70 text-xs mb-4 line-clamp-3 leading-relaxed">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech, tIndex) => (
                                            <span
                                                key={tIndex}
                                                className="text-[9px] font-orbitron px-2 py-1 rounded bg-white/5 border border-white/10 text-primary hover:bg-primary/10 transition-colors"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
