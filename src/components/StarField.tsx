"use client";

import React, { useEffect, useRef } from "react";

const StarField = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d", { alpha: false }); // Optimization: set alpha false
        if (!ctx) return;

        let animationFrameId: number;
        let stars: { x: number; y: number; size: number; velocity: number }[] = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initStars();
        };

        const initStars = () => {
            stars = [];
            // Reduced star density for performance
            const count = Math.floor((canvas.width * canvas.height) / 8000);
            for (let i = 0; i < count; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 1.5,
                    velocity: Math.random() * 0.3 + 0.1,
                });
            }
        };

        const draw = () => {
            // Clear with background color instead of clearRect for performance with alpha: false
            ctx.fillStyle = "#030014";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = "#ffffff";

            stars.forEach((star) => {
                // Optimized drawing (square stars are cheaper than circles)
                ctx.fillRect(star.x, star.y, star.size, star.size);

                star.y += star.velocity;
                if (star.y > canvas.height) {
                    star.y = 0;
                    star.x = Math.random() * canvas.width;
                }
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        // Throttled resize
        let resizeTimeout: NodeJS.Timeout;
        const handleResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(resizeCanvas, 200);
        };

        window.addEventListener("resize", handleResize);
        resizeCanvas();
        draw();

        return () => {
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0 opacity-40"
        />
    );
};

export default StarField;
