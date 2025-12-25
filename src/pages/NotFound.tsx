import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { ArrowLeft, Home } from "lucide-react";

// Import confused Bubbo
import bubboNoIdea from "@/assets/bubbo-no-idea.png";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-bubly-violet/5 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-bubly-pink/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/3 w-[400px] h-[400px] bg-bubly-sky/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            {/* Animated Bubbo */}
            <motion.div 
              className="relative inline-block mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Glow */}
              <div className="absolute inset-0 -m-8 bg-gradient-radial from-bubly-violet/25 via-bubly-pink/15 to-transparent blur-2xl animate-breathe" />
              
              {/* Confused Bubbo with wiggle animation */}
              <motion.img
                src={bubboNoIdea}
                alt="Confused Bubbo"
                className="w-48 h-48 object-contain relative z-10 drop-shadow-[0_30px_60px_rgba(167,139,250,0.4)]"
                animate={{
                  rotate: [-3, 3, -3],
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              {/* Question marks */}
              <motion.span
                className="absolute -top-4 -right-4 text-3xl"
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
              >
                ?
              </motion.span>
              <motion.span
                className="absolute top-0 -left-6 text-2xl text-muted-foreground"
                animate={{
                  y: [0, -8, 0],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
              >
                ?
              </motion.span>
              <motion.span
                className="absolute -top-8 left-1/2 text-xl text-muted-foreground/50"
                animate={{
                  y: [0, -12, 0],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
              >
                ?
              </motion.span>
            </motion.div>
            
            {/* 404 Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-8xl md:text-9xl font-bold gradient-text mb-4">404</h1>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Oops! <span className="text-muted-foreground font-normal">Page not found</span>
              </h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Bubbo looked everywhere but couldn't find this page. 
                It might have been moved or doesn't exist.
              </p>
            </motion.div>
            
            {/* Action buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link
                to="/"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-bubly text-white font-semibold transition-all duration-500 hover:shadow-[0_20px_40px_-10px_rgba(167,139,250,0.5)] hover:scale-[1.02] shadow-lg"
              >
                <Home className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                Back to Home
              </Link>
              
              <button
                onClick={() => window.history.back()}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold transition-all duration-500 bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/20"
              >
                <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
                Go Back
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
