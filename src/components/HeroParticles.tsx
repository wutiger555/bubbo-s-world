import { useEffect, useState, useRef, useMemo } from "react";
import { motion } from "framer-motion";
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
  blur: number;
}

interface FloatingShape {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
  type: "circle" | "ring" | "dot";
  color: "sky" | "violet" | "pink";
  delay: number;
  duration: number;
}

const generateParticles = (count: number): Particle[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 6 + 2,
    opacity: Math.random() * 0.4 + 0.1,
    delay: Math.random() * 10,
    duration: Math.random() * 12 + 18,
    color: (["sky", "violet", "pink"] as const)[Math.floor(Math.random() * 3)],
    blur: Math.random() * 2,
  }));
};

const generateShapes = (count: number): FloatingShape[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 40 + 20,
    rotation: Math.random() * 360,
    type: (["circle", "ring", "dot"] as const)[Math.floor(Math.random() * 3)],
    color: (["sky", "violet", "pink"] as const)[Math.floor(Math.random() * 3)],
    delay: Math.random() * 5,
    duration: Math.random() * 20 + 25,
  }));
};

export const HeroParticles = () => {
  const particles = useMemo(() => generateParticles(40), []);
  const shapes = useMemo(() => generateShapes(8), []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating geometric shapes */}
      {shapes.map((shape) => (
        <motion.div
          key={`shape-${shape.id}`}
          className={cn(
            "absolute",
            shape.type === "circle" && "rounded-full",
            shape.type === "ring" && "rounded-full border-2",
            shape.type === "dot" && "rounded-full",
            shape.color === "sky" && (shape.type === "ring" ? "border-bubly-sky/20" : "bg-bubly-sky/10"),
            shape.color === "violet" && (shape.type === "ring" ? "border-bubly-violet/20" : "bg-bubly-violet/10"),
            shape.color === "pink" && (shape.type === "ring" ? "border-bubly-pink/20" : "bg-bubly-pink/10")
          )}
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            width: `${shape.size}px`,
            height: `${shape.size}px`,
          }}
          initial={{ 
            rotate: shape.rotation,
            scale: 0.8,
            opacity: 0 
          }}
          animate={{
            rotate: [shape.rotation, shape.rotation + 180, shape.rotation + 360],
            scale: [0.8, 1.1, 0.8],
            opacity: [0.1, 0.3, 0.1],
            y: [0, -30, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            delay: shape.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Glowing particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={cn(
            "absolute rounded-full",
            particle.color === "sky" && "bg-bubly-sky",
            particle.color === "violet" && "bg-bubly-violet",
            particle.color === "pink" && "bg-bubly-pink"
          )}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            filter: `blur(${particle.blur}px)`,
            boxShadow: particle.size > 4 
              ? `0 0 ${particle.size * 2}px ${particle.size / 2}px currentColor` 
              : 'none',
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, particle.opacity, particle.opacity * 0.5, particle.opacity, 0],
            scale: [0.5, 1, 1.2, 1, 0.5],
            y: [0, -50, -100],
            x: [0, Math.random() * 40 - 20, Math.random() * 60 - 30],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Connecting lines effect */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--bubly-sky))" />
            <stop offset="50%" stopColor="hsl(var(--bubly-violet))" />
            <stop offset="100%" stopColor="hsl(var(--bubly-pink))" />
          </linearGradient>
        </defs>
        <motion.path
          d="M0,50 Q25,30 50,50 T100,50"
          stroke="url(#line-gradient)"
          strokeWidth="0.5"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        />
      </svg>
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
        const scrolled = window.scrollY;
        setOffset(scrolled * speed);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return { ref, offset };
};

// Enhanced Ambient gradient orbs with animation
export const AmbientOrbs = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Primary orb - animated */}
      <motion.div 
        className="absolute -top-1/4 -right-1/4 w-[500px] md:w-[700px] h-[500px] md:h-[700px] rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, hsl(var(--bubly-violet) / 0.5) 0%, transparent 60%)",
          filter: "blur(80px)",
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Secondary orb - animated */}
      <motion.div 
        className="absolute -bottom-1/4 -left-1/4 w-[400px] md:w-[600px] h-[400px] md:h-[600px] rounded-full opacity-25"
        style={{
          background: "radial-gradient(circle, hsl(var(--bubly-sky) / 0.5) 0%, transparent 60%)",
          filter: "blur(80px)",
        }}
        animate={{
          x: [0, -40, 0],
          y: [0, -20, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      
      {/* Accent orb - breathing */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[500px] h-[350px] md:h-[500px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, hsl(var(--bubly-pink) / 0.4) 0%, transparent 60%)",
          filter: "blur(100px)",
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Additional floating orb */}
      <motion.div 
        className="absolute top-1/4 right-1/3 w-[200px] md:w-[300px] h-[200px] md:h-[300px] rounded-full opacity-15"
        style={{
          background: "radial-gradient(circle, hsl(var(--bubly-violet) / 0.3) 0%, hsl(var(--bubly-pink) / 0.2) 50%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{
          x: [0, 80, 0],
          y: [0, -60, 0],
          scale: [0.8, 1.2, 0.8],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      />
    </div>
  );
};

// Gradient mesh background with enhanced effects
export const GradientMesh = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
      <svg className="absolute w-full h-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="mesh-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--bubly-sky))" stopOpacity="0.15" />
            <stop offset="50%" stopColor="hsl(var(--bubly-violet))" stopOpacity="0.08" />
            <stop offset="100%" stopColor="hsl(var(--bubly-pink))" stopOpacity="0.15" />
          </linearGradient>
          <radialGradient id="spotlight" cx="50%" cy="30%" r="60%">
            <stop offset="0%" stopColor="hsl(var(--bubly-violet))" stopOpacity="0.1" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#mesh-gradient-1)" />
        <rect width="100%" height="100%" fill="url(#spotlight)" />
      </svg>
      
      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, transparent 0%, hsl(var(--bubly-violet) / 0.05) 50%, transparent 100%)",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

// New: Sparkle effect component
export const Sparkles = () => {
  const sparkles = useMemo(() => 
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 4,
      duration: Math.random() * 2 + 1,
    })), []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: sparkle.duration,
            repeat: Infinity,
            delay: sparkle.delay,
            ease: "easeInOut",
          }}
        >
          <svg 
            width={sparkle.size * 4} 
            height={sparkle.size * 4} 
            viewBox="0 0 24 24" 
            fill="none"
            className="text-bubly-violet/40"
          >
            <path
              d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z"
              fill="currentColor"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};
