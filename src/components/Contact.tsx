"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

const Contact = () => {
    const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormState("submitting");

        const form = e.target as HTMLFormElement;

        try {
            const response = await fetch("https://formspree.io/f/xpqqaqvo", {
                method: "POST",
                body: new FormData(form),
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setFormState("success");
                form.reset();
            } else {
                throw new Error("Submission failed");
            }
        } catch (error) {
            console.error(error);
            setFormState("idle");
            alert("Oops! There was a problem submitting your form. Please try again.");
        }
    };

    return (
        <section id="contact" className="py-32 relative bg-mesh">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-20">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-gradient font-orbitron font-black text-sm uppercase tracking-[0.4em] mb-4">Contact</h2>
                        <h1 className="text-5xl md:text-7xl font-black font-orbitron tracking-tighter mb-10">LET&apos;S WORK <br /> TOGETHER.</h1>

                        {/* Collaboration Message */}
                        <div className="mb-10 glass-panel p-6 rounded-2xl border border-primary/30 bg-primary/5">
                            <p className="text-white/90 text-base leading-relaxed">
                                <span className="text-primary font-bold text-lg">Ready to bring your vision to life?</span>
                                <br />
                                <span className="text-white/70 text-sm">
                                    Whether it's a MERN stack app, WordPress site, or custom solution — let's discuss your requirements.
                                    I offer <span className="text-primary font-semibold">competitive pricing</span> without compromising on quality.
                                </span>
                            </p>
                        </div>

                        <div className="space-y-8 font-sans">
                            <a href="mailto:mohammedriyaz8135@gmail.com" className="flex items-center gap-6 group">
                                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:border-primary/50 group-hover:bg-primary/5 transition-all">
                                    <Mail className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <p className="text-white/40 text-[10px] uppercase tracking-widest mb-1">Email Me</p>
                                    <p className="text-xl font-bold">mohammedriyaz8135@gmail.com</p>
                                </div>
                            </a>

                            <a href="tel:+919948135827" className="flex items-center gap-6 group">
                                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:border-primary/50 group-hover:bg-primary/5 transition-all">
                                    <Phone className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <p className="text-white/40 text-[10px] uppercase tracking-widest mb-1">Call Me</p>
                                    <p className="text-xl font-bold">+91 9948135827</p>
                                </div>
                            </a>

                            <div className="flex items-center gap-6 group">
                                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5">
                                    <MapPin className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <p className="text-white/40 text-[10px] uppercase tracking-widest mb-1">Location</p>
                                    <p className="text-xl font-bold">Hyderabad, TS, India</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <form onSubmit={handleSubmit} className="glass-panel p-6 md:p-10 rounded-3xl md:rounded-[3rem] space-y-6">
                            {formState === "success" ? (
                                <div className="flex flex-col items-center justify-center py-20 text-center">
                                    <CheckCircle className="w-16 h-16 text-primary mb-4" />
                                    <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                                    <p className="text-white/60">I will get back to you shortly.</p>
                                    <button type="button" onClick={() => setFormState("idle")} className="mt-8 text-primary font-bold">Send another?</button>
                                </div>
                            ) : (
                                <>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] uppercase font-black text-white/40 tracking-widest">Full Name</label>
                                            <input required name="name" type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary/50 transition-all font-sans" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] uppercase font-black text-white/40 tracking-widest">Email Address</label>
                                            <input required name="email" type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary/50 transition-all font-sans" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase font-black text-white/40 tracking-widest">Message</label>
                                        <textarea required name="message" rows={5} className="w-full bg-white/5 border border-white/10 rounded-3xl px-6 py-4 focus:outline-none focus:border-primary/50 transition-all resize-none font-sans" />
                                    </div>
                                    <button
                                        disabled={formState === "submitting"}
                                        className="w-full btn-primary flex items-center justify-center gap-3 disabled:opacity-50"
                                    >
                                        {formState === "submitting" ? "Transmitting..." : "Send Message"}
                                        <Send className="w-4 h-4" />
                                    </button>
                                    <p className="text-center text-[10px] text-white/20 uppercase tracking-widest pt-2">
                                        Powered by Formspree Logic
                                    </p>
                                </>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
