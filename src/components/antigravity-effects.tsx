"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function AntigravityHero({ children }: { children: React.ReactNode }) {
    const container = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo(".ag-fade-up",
                { y: 80, opacity: 0, rotateX: 25, scale: 0.9 },
                { y: 0, opacity: 1, rotateX: 0, scale: 1, duration: 1.5, stagger: 0.2, ease: "power4.out" }
            );

            // Floating animation for isometric background cards
            gsap.to(".ag-float", {
                y: "-=20",
                duration: 2.5,
                yoyo: true,
                repeat: -1,
                ease: "sine.inOut",
                stagger: {
                    each: 0.5,
                    from: "random"
                }
            });
        }, container);
        return () => ctx.revert();
    }, []);

    return <div ref={container} className="relative z-10 w-full flex flex-col items-center [perspective:1500px]">{children}</div>;
}

export function AntigravityCard({ children, className = "" }: { children: React.ReactNode, className?: string }) {
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const card = cardRef.current;
        if (!card) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            // Exaggerated rotation for obvious effect
            const rotateX = ((y - centerY) / centerY) * -25;
            const rotateY = ((x - centerX) / centerX) * 25;

            gsap.to(card, {
                rotateX,
                rotateY,
                z: 80, // pop out a lot more
                scale: 1.05,
                duration: 0.3,
                ease: "power2.out",
                transformPerspective: 1200,
            });
        };

        const handleMouseLeave = () => {
            gsap.to(card, {
                rotateX: 0,
                rotateY: 0,
                z: 0,
                scale: 1,
                duration: 1.2,
                ease: "elastic.out(1, 0.3)",
            });
        };

        card.addEventListener("mousemove", handleMouseMove);
        card.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            card.removeEventListener("mousemove", handleMouseMove);
            card.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <div
            ref={cardRef}
            className={`rounded-3xl border border-white/20 bg-white/5 backdrop-blur-3xl shadow-[0_30px_60px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.2)] will-change-transform ${className}`}
            style={{ transformStyle: 'preserve-3d' }}
        >
            <div style={{ transform: 'translateZ(50px)' }}>
                {children}
            </div>
        </div>
    );
}

// Decorative component for the isometric background
export function IsometricShowcase() {
    return (
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 hidden lg:block opacity-60 pointer-events-none z-0" style={{ transformStyle: 'preserve-3d', transform: 'rotateX(60deg) rotateZ(-45deg)' }}>
            <div className="relative w-[500px] h-[500px]">
                {/* Floating Mockup Cards */}
                <div className="ag-float absolute top-0 left-0 w-64 h-40 bg-purple-500/20 backdrop-blur-xl border border-purple-500/40 rounded-2xl shadow-[20px_20px_40px_rgba(0,0,0,0.5)]"></div>
                <div className="ag-float absolute top-32 left-40 w-72 h-48 bg-blue-500/20 backdrop-blur-xl border border-blue-500/40 rounded-2xl shadow-[20px_20px_40px_rgba(0,0,0,0.5)]" style={{ transform: 'translateZ(40px)' }}></div>
                <div className="ag-float absolute bottom-0 left-10 w-56 h-64 bg-pink-500/20 backdrop-blur-xl border border-pink-500/40 rounded-2xl shadow-[20px_20px_40px_rgba(0,0,0,0.5)]" style={{ transform: 'translateZ(80px)' }}></div>
            </div>
        </div>
    );
}
