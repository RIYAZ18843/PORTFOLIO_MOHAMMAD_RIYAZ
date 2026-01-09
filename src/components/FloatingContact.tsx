"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";

const FloatingContact = () => {
    return (
        <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-[100]">
            <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://wa.me/919948135827"
                target="_blank"
                className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-[#25D366]/40 transition-shadow"
            >
                <MessageCircle className="text-white w-7 h-7" />
            </motion.a>

            <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="tel:+919948135827"
                className="w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg hover:shadow-primary/40 transition-shadow"
            >
                <Phone className="text-black w-7 h-7" />
            </motion.a>
        </div>
    );
};

export default FloatingContact;
