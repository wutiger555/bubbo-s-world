import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  delay: number;
  duration: number;
  color: "sky" | "violet" | "pink";
}

const generateParticles = (count: number): Particle[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    opacity: Math.random() * 0.3 + 0.1,
    delay: Math.random() * 8,
    duration: Math.random() * 10 + 15,
    color: (["sky", "violet", "pink"] as const)[Math.floor(Math.random() * 3)],
  }));
};

export const HeroParticles = () => {
  const [particles] = useState(() => generateParticles(30));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={cn(
            "absolute rounded-full animate-particle-float",
            particle.color === "sky" && "bg-bubly-sky",
            particle.color === "violet" && "bg-bubly-violet",
            particle.color === "pink" && "bg-bubly-pink"
          )}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

// Parallax container hook
export const useParallax = (speed: number = 0.5) => {
  const [offset, setOffset] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const scrolled = window.scrollY;
        setOffset(scrolled * speed);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return { ref, offset };
};

// Ambient gradient orbs
export const AmbientOrbs = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Primary orb */}
      <div 
        className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, hsl(var(--bubly-violet) / 0.4) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      
      {/* Secondary orb */}
      <div 
        className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] rounded-full opacity-25"
        style={{
          background: "radial-gradient(circle, hsl(var(--bubly-sky) / 0.4) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      
      {/* Accent orb */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-15 animate-breathe"
        style={{
          background: "radial-gradient(circle, hsl(var(--bubly-pink) / 0.3) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
    </div>
  );
};

// Gradient mesh background
export const GradientMesh = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
      <svg className="absolute w-full h-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="mesh-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--bubly-sky))" stopOpacity="0.1" />
            <stop offset="50%" stopColor="hsl(var(--bubly-violet))" stopOpacity="0.05" />
            <stop offset="100%" stopColor="hsl(var(--bubly-pink))" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#mesh-gradient-1)" />
      </svg>
      
      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};
