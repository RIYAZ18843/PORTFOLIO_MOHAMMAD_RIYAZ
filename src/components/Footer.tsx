"use client";

import React from "react";

const Footer = () => {
    return (
        <footer className="py-10 border-t border-white/10 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-foreground/50 text-sm font-orbitron">
                <p>© {new Date().getFullYear()} MD RIYAZ. ALL SYSTEMS OPERATIONAL.</p>
                <div className="mt-4 flex justify-center gap-6">
                    <a href="https://github.com/RIYAZ18843" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GITHUB</a>
                    <a href="https://www.linkedin.com/in/mdriyaz18/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LINKEDIN</a>
                    <a href="mailto:mohammedriyaz8135@gmail.com" className="hover:text-primary transition-colors">EMAIL</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
