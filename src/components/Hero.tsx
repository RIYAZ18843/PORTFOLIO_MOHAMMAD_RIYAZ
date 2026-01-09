"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Typewriter from "typewriter-effect";
import { Rocket, MousePointer2, ArrowDownRight } from "lucide-react";
import Image from "next/image";

const Hero = () => {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollY } = useScroll();

    // Parallax effects
    const y1 = useTransform(scrollY, [0, 500], [0, 100]);
    const y2 = useTransform(scrollY, [0, 500], [0, -50]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    const springY1 = useSpring(y1, { stiffness: 100, damping: 30 });

    return (
        <section
            ref={containerRef}
            id="home"
            className="min-h-screen flex items-center justify-center relative bg-mesh pt-32 pb-20 overflow-hidden"
        >
            {/* Background Decorative Elements */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] animate-pulse" />

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center z-10">

                <motion.div
                    style={{ opacity }}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass-panel text-[10px] uppercase tracking-[0.4em] font-black text-primary mb-12"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Available for New Projects
                    </motion.div>

                    <h1 className="text-5xl md:text-[5.5rem] font-black font-orbitron leading-[0.9] tracking-tighter mb-12 uppercase italic relative">
                        I AM <br />
                        <span className="text-gradient relative block mt-2">
                            MOHAMMAD <br /> RIYAZ
                            <ArrowDownRight className="absolute -right-4 top-0 w-12 h-12 text-white/10 hidden md:block" />
                        </span>
                    </h1>

                    <div className="text-2xl md:text-3xl font-mono text-white/30 mb-12 flex items-center gap-4">
                        <span className="w-12 h-px bg-white/10" />
                        <Typewriter
                            options={{
                                strings: [
                                    "MERN Full Stack Developer",
                                    "React.js Developer",
                                    "Node.js Developer",
                                    "WordPress Expert"
                                ],
                                autoStart: true,
                                loop: true,
                                delay: 40,
                                deleteSpeed: 25,
                                wrapperClassName: "text-white/80",
                                cursorClassName: "text-primary animate-pulse font-normal"
                            }}
                        />
                    </div>

                    <div className="flex flex-wrap gap-6">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#projects"
                            className="btn-primary flex items-center gap-3 group"
                        >
                            Explore Portfolio
                            <Rocket className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </motion.a>
                        <motion.a
                            whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                            href="tel:+919948135827"
                            className="btn-outline"
                        >
                            Quick Contact
                        </motion.a>
                    </div>

                    {/* Custom Collaboration Message */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="mt-12 glass-panel p-6 rounded-2xl border border-primary/20 max-w-2xl"
                    >
                        <p className="text-white/80 text-sm leading-relaxed">
                            <span className="text-primary font-bold">Have a project in mind?</span> Reach out to discuss your requirements.
                            I deliver quality work at the <span className="text-primary font-semibold">best price</span> tailored to your needs.
                        </p>
                    </motion.div>
                </motion.div>

                <motion.div
                    style={{ y: springY1 }}
                    initial={{ opacity: 0, scale: 0.9, x: 50 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="relative hidden lg:block"
                >
                    <div className="relative aspect-[4/5] rounded-[5rem] overflow-hidden glass-panel group shadow-2xl">
                        {/* Real Profile Image Integration */}
                        <div className="absolute inset-0 w-full h-full scale-110 group-hover:scale-100 transition-transform duration-[2s]">
                            <Image
                                src="/profile.jpg"
                                alt="MOHAMMAD RIYAZ"
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                        </div>

                        <div className="absolute inset-x-0 bottom-0 p-12 translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                            <div className="w-12 h-1 bg-primary mb-6 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700" />
                            <p className="font-orbitron font-black text-3xl mb-2 text-white italic">MOHAMMAD RIYAZ</p>
                            <p className="text-white/40 text-xs uppercase tracking-[0.3em] font-bold">Hyderabad • Full Stack • CMS</p>
                            <div className="mt-8 flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity delay-300">
                                <div className="w-2 h-2 rounded-full bg-primary" />
                                <div className="w-2 h-2 rounded-full bg-white/20" />
                                <div className="w-2 h-2 rounded-full bg-white/20" />
                            </div>
                        </div>

                        {/* Gloss Highlight */}
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                    </div>

                    {/* Floating Badge */}
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-8 -right-8 glass-panel p-6 rounded-3xl z-20"
                    >
                        <p className="text-xs font-black text-primary leading-tight">TOP RATED<br />DEVELOPER</p>
                    </motion.div>
                </motion.div>
            </div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:block opacity-20"
            >
                <div className="flex flex-col items-center gap-4">
                    <span className="text-[10px] uppercase tracking-[0.6em] text-white/40 font-black vertical-text">Explore</span>
                    <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent" />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
