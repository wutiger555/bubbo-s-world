import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

// Import multiple Bubbo poses for animation variety
import bubboLoading from "@/assets/bubbo-loading.png";
import bubboCurious from "@/assets/bubbo-curious.png";
import bubboWave from "@/assets/bubbo-wave.png";
import bubboThinking from "@/assets/bubbo-thinking.png";

// Bubbo poses array for cycling
const bubboPoses = [
  { src: bubboLoading, label: "Loading..." },
  { src: bubboCurious, label: "Almost there!" },
  { src: bubboWave, label: "Hi there!" },
  { src: bubboThinking, label: "Thinking..." },
];

// Cute loading messages
const loadingMessages = [
  "Bubbo is preparing something special ✨",
  "Gathering your content...",
  "Almost ready! 🎉",
  "Just a moment...",
  "Bubbo is on it! 💪",
];

export const PageLoader = () => {
  const [poseIndex, setPoseIndex] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  // Cycle through Bubbo poses
  useEffect(() => {
    const poseInterval = setInterval(() => {
      setPoseIndex((prev) => (prev + 1) % bubboPoses.length);
    }, 2000);

    const messageInterval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % loadingMessages.length);
    }, 2500);

    return () => {
      clearInterval(poseInterval);
      clearInterval(messageInterval);
    };
  }, []);

  const currentPose = bubboPoses[poseIndex];

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-bubly-violet/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-bubly-pink/10 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute top-1/3 right-1/3 w-32 h-32 bg-bubly-sky/10 rounded-full blur-2xl"
          animate={{
            x: [0, 30, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
      </div>

      <div className="flex flex-col items-center gap-6 relative z-10">
        {/* Bubbo Loading Animation - Main Container */}
        <div className="relative">
          {/* Outer glow pulse */}
          <motion.div
            className="absolute inset-0 -m-12 rounded-full bg-gradient-radial from-bubly-violet/25 via-bubly-pink/10 to-transparent blur-2xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Spinning orbit rings */}
          <motion.div
            className="absolute inset-0 -m-10 rounded-full border-2 border-dashed border-bubly-violet/20"
            animate={{ rotate: 360 }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* Orbiting particles */}
            <motion.div
              className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gradient-to-br from-bubly-violet to-bubly-pink"
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>

          <motion.div
            className="absolute inset-0 -m-6 rounded-full border border-bubly-pink/15"
            animate={{ rotate: -360 }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <motion.div
              className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-bubly-sky/60"
            />
          </motion.div>

          {/* Bubbo image with pose transition */}
          <motion.div
            className="relative"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={poseIndex}
                src={currentPose.src}
                alt="Bubbo Loading"
                className="w-28 h-28 md:w-36 md:h-36 object-contain"
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                  filter: [
                    "drop-shadow(0 10px 30px rgba(167,139,250,0.4))",
                    "drop-shadow(0 15px 40px rgba(236,72,153,0.5))",
                    "drop-shadow(0 10px 30px rgba(167,139,250,0.4))",
                  ],
                }}
                exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
                transition={{
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.3 },
                  rotate: { duration: 0.3 },
                  filter: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                }}
              />
            </AnimatePresence>

            {/* Excitement sparkles around Bubbo */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 rounded-full"
                style={{
                  background: i % 2 === 0 ? "#a78bfa" : "#f472b6",
                  top: `${20 + Math.sin(i * 60 * Math.PI / 180) * 50}%`,
                  left: `${50 + Math.cos(i * 60 * Math.PI / 180) * 60}%`,
                }}
                animate={{
                  scale: [0, 1.2, 0],
                  opacity: [0, 1, 0],
                  y: [0, -15, -25],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  delay: i * 0.25,
                  ease: "easeOut",
                }}
              />
            ))}
          </motion.div>

          {/* Floating emojis around Bubbo */}
          <motion.div
            className="absolute -top-4 -right-6 text-xl"
            animate={{
              y: [0, -8, 0],
              rotate: [0, 10, 0],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            ✨
          </motion.div>
          <motion.div
            className="absolute -bottom-2 -left-6 text-lg"
            animate={{
              y: [0, -6, 0],
              rotate: [0, -10, 0],
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            💝
          </motion.div>
          <motion.div
            className="absolute top-1/2 -right-8 text-lg"
            animate={{
              x: [0, 5, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            🌟
          </motion.div>
        </div>

        {/* Loading message with typewriter effect */}
        <div className="text-center space-y-2">
          <AnimatePresence mode="wait">
            <motion.p
              key={messageIndex}
              className="text-sm md:text-base font-medium text-muted-foreground"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {loadingMessages[messageIndex]}
            </motion.p>
          </AnimatePresence>

          {/* Animated dots */}
          <motion.div
            className="flex items-center justify-center gap-1.5"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="w-2 h-2 rounded-full bg-gradient-to-r from-bubly-violet to-bubly-pink"
                animate={{
                  y: [0, -6, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  delay: i * 0.12,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};


// Minimal top progress bar
export const TopProgressBar = () => {
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 h-0.5 bg-gradient-bubly origin-left"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      exit={{ scaleX: 0, opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    />
  );
};

// Subtle shimmer overlay for page transitions
export const PageShimmer = () => {
  return (
    <motion.div
      className="fixed inset-0 z-40 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </motion.div>
  );
};
