"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function AntigravityHero({ children }: { children: React.ReactNode }) {
    const container = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo(".ag-fade-up",
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power2.out" }
            );

            // Floating animation for isometric background cards
            gsap.to(".ag-float", {
                y: "-=15",
                duration: 3,
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

    return <div ref={container} className="relative z-10 w-full flex flex-col items-center">{children}</div>;
}

export function AntigravityCard({ children, className = "" }: { children: React.ReactNode, className?: string }) {
    return (
        <div
            className={`rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-md hover:border-purple-500/40 hover:bg-slate-900/70 transition-all duration-300 hover:-translate-y-1 shadow-lg ${className}`}
        >
            {children}
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
