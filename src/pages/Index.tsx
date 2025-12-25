import { useEffect, useState } from "react";
import { Layout } from "@/components/Layout";
import { BubboGallery, FloatingBubbos } from "@/components/BubboGallery";
import { HeroParticles, AmbientOrbs, GradientMesh } from "@/components/HeroParticles";
import { GlassCard } from "@/components/GlassCard";
import { ScrollReveal } from "@/hooks/use-scroll-reveal";
import { FollowCursorBubbo, InteractiveBubbo } from "@/components/InteractiveBubbo";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// App screenshots
import screenshot1 from "@/assets/app-screenshot-1.png";
import screenshot2 from "@/assets/app-screenshot-2.png";
import screenshot3 from "@/assets/app-screenshot-3.png";
import screenshot4 from "@/assets/app-screenshot-4.png";
import screenshot5 from "@/assets/app-screenshot-5.png";
import screenshot6 from "@/assets/app-screenshot-6.png";

// Bubbo poses for features
import bubboThinking from "@/assets/bubbo-thinking.png";
import bubboPoint from "@/assets/bubbo-point.png";
import bubboWave from "@/assets/bubbo-wave.png";

// QR Code
import appQRCode from "@/assets/app-qrcode.png";

const APP_STORE_URL = "https://apps.apple.com/us/app/bubly-social-assistant/id6754884488";

const coreFeatures = [
  {
    title: "Smart Contacts",
    subtitle: "Know Your Bubbles",
    description: "Track hobbies, interests, and milestones. Add personal notes and never forget what matters.",
    screenshot: screenshot5,
    bubbo: bubboThinking,
    gradient: "from-bubly-sky/30 via-bubly-violet/20 to-bubly-pink/30",
  },
  {
    title: "AI Greetings",
    subtitle: "Craft Perfect Wishes",
    description: "Generate personalized messages in any vibe—warm, fun, formal, or short.",
    screenshot: screenshot4,
    bubbo: bubboWave,
    gradient: "from-bubly-pink/30 via-bubly-violet/20 to-bubly-sky/30",
  },
  {
    title: "Event Calendar",
    subtitle: "Never Miss a Moment",
    description: "Track birthdays, anniversaries, and special moments with an intelligent calendar.",
    screenshot: screenshot6,
    bubbo: bubboPoint,
    gradient: "from-bubly-violet/30 via-bubly-pink/20 to-bubly-sky/30",
  },
];

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Layout>
      {/* Hero Section - Full Immersive Experience */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Layered backgrounds */}
        <GradientMesh />
        <AmbientOrbs />
        <HeroParticles />
        
        {/* Floating decorative Bubbos */}
        <FloatingBubbos />

        {/* Main Hero Grid */}
        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center min-h-[calc(100vh-120px)]">
            
            {/* Left Side - Main Content */}
            <div 
              className="lg:col-span-5 text-center lg:text-left space-y-8"
              style={{ transform: `translateY(${scrollY * 0.05}px)` }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass backdrop-blur-xl border border-white/10 animate-fade-in">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bubly-violet opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-bubly-violet"></span>
                </span>
                <span className="text-sm font-medium text-muted-foreground">Your AI Social Companion</span>
              </div>
              
              {/* Main Headline - Larger & Bolder */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-tight animate-slide-up">
                  <span className="block gradient-text">Never Forget</span>
                  <span className="block text-foreground">Who Matters</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed animate-slide-up" style={{ animationDelay: "0.1s" }}>
                  Bubly helps you nurture every relationship with AI-powered reminders, personalized greetings, and smart contact management.
                </p>
              </div>
              
              {/* CTA Section */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: "0.2s" }}>
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-bubly text-white font-semibold transition-all duration-500 hover:shadow-[0_20px_50px_-12px_rgba(167,139,250,0.6)] hover:scale-[1.02] shadow-xl"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  Get Free on App Store
                </a>
                
                {/* QR Code - Desktop */}
                <div className="hidden md:flex items-center gap-3 px-4 py-2 rounded-2xl glass backdrop-blur-xl border border-white/10 group hover:border-white/20 transition-all">
                  <div className="p-1.5 bg-white rounded-lg">
                    <img src={appQRCode} alt="QR Code" className="w-10 h-10" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-muted-foreground">Scan to</p>
                    <p className="text-sm font-medium">Download</p>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-6 justify-center lg:justify-start pt-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {['🎉', '💝', '✨'].map((emoji, i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-bubly-sky/30 to-bubly-violet/30 border-2 border-background flex items-center justify-center text-sm">
                        {emoji}
                      </div>
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">Loved by users</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-bubly-violet">★★★★★</span>
                  <span className="text-sm text-muted-foreground">5.0 Rating</span>
                </div>
              </div>
            </div>

            {/* Center - Bubbo Mascot */}
            <div 
              className="lg:col-span-3 flex justify-center items-center relative order-first lg:order-none"
              style={{ transform: `translateY(${scrollY * -0.1}px)` }}
            >
              <div className="relative">
                {/* Orbital rings */}
                <div className="absolute inset-0 -m-20 rounded-full border border-bubly-sky/15 animate-spin-slow" style={{ animationDuration: "20s" }} />
                <div className="absolute inset-0 -m-32 rounded-full border border-bubly-violet/10 animate-spin-slow" style={{ animationDuration: "30s", animationDirection: "reverse" }} />
                
                {/* Main Bubbo */}
                <FollowCursorBubbo size="xl" />
              </div>
            </div>

            {/* Right Side - App Screenshots Stack */}
            <div 
              className="lg:col-span-4 relative h-[500px] lg:h-[600px]"
              style={{ transform: `translateY(${scrollY * -0.08}px)` }}
            >
              {/* Floating App Screenshots */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Back screenshot */}
                <div className="absolute right-0 top-8 lg:top-4 w-48 lg:w-56 rounded-[1.5rem] overflow-hidden shadow-2xl border border-white/10 opacity-60 hover:opacity-90 transition-all duration-500 hover:-translate-y-2 hover:scale-105 z-10">
                  <img src={screenshot6} alt="Calendar" className="w-full" />
                </div>
                
                {/* Main screenshot */}
                <div className="relative w-56 lg:w-64 rounded-[2rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(167,139,250,0.4)] border border-white/20 hover:-translate-y-3 transition-all duration-500 z-20 group">
                  <div className="absolute -inset-1 bg-gradient-to-br from-bubly-sky/30 via-bubly-violet/20 to-bubly-pink/30 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <img src={screenshot3} alt="Dashboard" className="w-full relative" />
                </div>
                
                {/* Front screenshot */}
                <div className="absolute left-0 bottom-8 lg:bottom-12 w-44 lg:w-52 rounded-[1.5rem] overflow-hidden shadow-xl border border-white/10 opacity-70 hover:opacity-100 transition-all duration-500 hover:-translate-y-2 hover:scale-105 z-30">
                  <img src={screenshot4} alt="AI Greetings" className="w-full" />
                </div>
              </div>

              {/* Floating Feature Cards */}
              <div className="absolute -left-4 top-1/4 glass backdrop-blur-xl rounded-2xl p-3 border border-white/10 shadow-xl animate-float-gentle z-40 hidden lg:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-bubly-sky to-bubly-violet flex items-center justify-center text-white text-lg">
                    🎂
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Upcoming</p>
                    <p className="text-sm font-semibold">3 Birthdays</p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-4 bottom-1/4 glass backdrop-blur-xl rounded-2xl p-3 border border-white/10 shadow-xl animate-float-gentle z-40 hidden lg:block" style={{ animationDelay: "1.5s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-bubly-pink to-bubly-violet flex items-center justify-center text-white text-lg">
                    ✨
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">AI Generated</p>
                    <p className="text-sm font-semibold">Perfect Greeting</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div 
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ opacity: Math.max(0, 1 - scrollY / 200) }}
        >
          <span className="text-[10px] text-muted-foreground/40 tracking-[0.2em] uppercase">Explore</span>
          <div className="w-5 h-8 rounded-full border border-muted-foreground/20 flex justify-center pt-2">
            <div className="w-1 h-2 rounded-full bg-muted-foreground/40 animate-bounce-soft" />
          </div>
        </div>
      </section>

      {/* App Preview Section */}
      <section className="py-24 overflow-hidden relative">
        {/* Subtle background glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-bubly-violet/5 via-transparent to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-4 relative">
          <ScrollReveal className="text-center mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-medium text-muted-foreground mb-4 tracking-wide uppercase">
              App Preview
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              See <span className="gradient-text">Bubly</span> in Action
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A beautifully designed app that makes managing relationships feel natural
            </p>
          </ScrollReveal>

          {/* Screenshots showcase */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-10 max-w-5xl mx-auto">
            {/* Left screenshot */}
            <ScrollReveal delay={0} direction="up" className="w-full md:w-1/3 md:mt-12">
              <div className="transition-all duration-700 hover:-translate-y-2 group">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-br from-bubly-sky/20 via-bubly-violet/10 to-bubly-pink/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative rounded-[2rem] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] border border-white/10 backdrop-blur-sm">
                    <img src={screenshot6} alt="Event Calendar" className="w-full h-auto" />
                  </div>
                </div>
                <p className="text-center mt-5 text-sm font-medium text-muted-foreground/80 group-hover:text-foreground transition-colors duration-500">Event Calendar</p>
              </div>
            </ScrollReveal>

            {/* Center screenshot - featured */}
            <ScrollReveal delay={150} direction="up" className="w-full md:w-1/3 z-10 md:-mt-8">
              <div className="transition-all duration-700 hover:-translate-y-3 group">
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-br from-bubly-sky/30 via-bubly-violet/20 to-bubly-pink/30 rounded-[2.5rem] blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative rounded-[2rem] overflow-hidden shadow-[0_30px_80px_-20px_rgba(167,139,250,0.4)] border border-primary/20 ring-1 ring-white/10">
                    <img src={screenshot3} alt="Smart Dashboard" className="w-full h-auto" />
                  </div>
                </div>
                <p className="text-center mt-5 text-sm font-semibold gradient-text">Smart Dashboard</p>
              </div>
            </ScrollReveal>

            {/* Right screenshot */}
            <ScrollReveal delay={300} direction="up" className="w-full md:w-1/3 md:mt-12">
              <div className="transition-all duration-700 hover:-translate-y-2 group">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-br from-bubly-pink/20 via-bubly-violet/10 to-bubly-sky/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative rounded-[2rem] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] border border-white/10 backdrop-blur-sm">
                    <img src={screenshot4} alt="AI Greetings" className="w-full h-auto" />
                  </div>
                </div>
                <p className="text-center mt-5 text-sm font-medium text-muted-foreground/80 group-hover:text-foreground transition-colors duration-500">AI Greetings</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Feature Showcase Section */}
      <section className="py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          {/* Feature 1: Contact Management */}
          <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
            <ScrollReveal direction="right" className="flex-1 text-center lg:text-left space-y-6">
              <span className="inline-block px-3 py-1 rounded-full bg-bubly-violet/10 text-bubly-violet text-xs font-medium tracking-wide">
                Contact Details
              </span>
              <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                Know Your <span className="gradient-text">Bubbles</span> Better
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
                Keep track of hobbies, interests, and important milestones in one place. 
                Add personal notes and never forget what matters to your friends.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={200} className="flex-1 flex justify-center">
              <div className="relative group transition-all duration-700 hover:-translate-y-2">
                <div className="absolute -inset-3 bg-gradient-to-br from-bubly-sky/20 via-bubly-violet/15 to-bubly-pink/20 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative max-w-[280px] rounded-[2rem] overflow-hidden shadow-[0_25px_70px_-20px_rgba(0,0,0,0.25)] border border-white/10">
                  <img src={screenshot5} alt="Contact Management" className="w-full h-auto" />
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Feature 2: Home Dashboard */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <ScrollReveal direction="left" className="flex-1 text-center lg:text-left space-y-6">
              <span className="inline-block px-3 py-1 rounded-full bg-bubly-pink/10 text-bubly-pink text-xs font-medium tracking-wide">
                Your Universe
              </span>
              <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                Relationships <span className="gradient-text">Deserve</span> to Be Remembered
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
                Your universe of friends at a glance. Track birthdays, anniversaries, 
                and special moments with an intelligent calendar that keeps you connected.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={200} className="flex-1 flex justify-center">
              <div className="relative group transition-all duration-700 hover:-translate-y-2">
                <div className="absolute -inset-3 bg-gradient-to-br from-bubly-pink/20 via-bubly-violet/15 to-bubly-sky/20 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative max-w-[280px] rounded-[2rem] overflow-hidden shadow-[0_25px_70px_-20px_rgba(0,0,0,0.25)] border border-white/10">
                  <img src={screenshot1} alt="Home Dashboard" className="w-full h-auto" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Bubbo Gallery Section */}
      <section className="py-24 overflow-hidden relative">
        <BubboGallery />
      </section>

      {/* Core Features Section - Premium Design */}
      <section className="py-24 overflow-hidden relative">
        {/* Ambient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bubly-violet/3 to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-4 relative">
          <ScrollReveal className="text-center mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-medium text-muted-foreground mb-4 tracking-wide uppercase">
              Core Features
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Everything You Need to <br className="hidden md:block" />
              <span className="gradient-text">Stay Connected</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Bubly combines AI technology with thoughtful design to make relationship management effortless
            </p>
          </ScrollReveal>
          
          {/* Feature Cards - Horizontal Scroll on Mobile, Grid on Desktop */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {coreFeatures.map((feature, index) => (
              <ScrollReveal 
                key={feature.title} 
                delay={index * 150} 
                direction="up"
                className="group"
              >
                <div className="relative h-full">
                  {/* Screenshot with glow and floating Bubbo */}
                  <div className="relative mb-8">
                    <div className={`absolute -inset-4 bg-gradient-to-br ${feature.gradient} rounded-[2.5rem] blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-700`} />
                    <div className="relative rounded-[1.5rem] overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.2)] border border-white/10 transition-transform duration-700 group-hover:-translate-y-2">
                      <img 
                        src={feature.screenshot} 
                        alt={feature.title} 
                        className="w-full h-auto"
                      />
                    </div>
                    {/* Contextual Bubbo */}
                    <div className="absolute -bottom-6 -right-6 w-20 h-20 transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2 animate-float-gentle" style={{ animationDelay: `${index * 0.5}s` }}>
                      <img 
                        src={feature.bubbo} 
                        alt="Bubbo"
                        className="w-full h-full object-contain drop-shadow-xl"
                      />
                    </div>
                  </div>
                  
                  {/* Text content */}
                  <div className="text-center px-2">
                    <span className="text-xs font-medium text-muted-foreground/60 tracking-widest uppercase mb-2 block">
                      {feature.subtitle}
                    </span>
                    <h3 className="text-xl font-bold mb-3 group-hover:gradient-text transition-all duration-500">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          
          <ScrollReveal delay={500} className="text-center mt-16">
            <Link
              to="/features"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold transition-all duration-500 bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/20"
            >
              Explore All Features
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section - Premium Immersive */}
      <section className="py-32 relative overflow-hidden">
        {/* Layered ambient backgrounds */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bubly-violet/5 to-bubly-violet/10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-bubly-violet/20 via-bubly-pink/10 to-transparent blur-3xl opacity-60 pointer-events-none" />
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-bubly-sky/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-bubly-pink/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal direction="up">
            <div className="max-w-4xl mx-auto text-center">
              {/* Interactive Bubbo with enhanced effects */}
              <div className="relative inline-block mb-12">
                <div className="absolute inset-0 -m-8 bg-gradient-radial from-bubly-violet/30 via-bubly-pink/15 to-transparent blur-2xl animate-breathe" />
                <div className="absolute inset-0 -m-16 rounded-full border border-bubly-violet/10 animate-spin-slow" style={{ animationDuration: "30s" }} />
                <div className="absolute inset-0 -m-24 rounded-full border border-bubly-pink/5 animate-spin-slow" style={{ animationDuration: "45s", animationDirection: "reverse" }} />
                <InteractiveBubbo 
                  size="lg" 
                  initialPose="default" 
                  hoverPose="wave" 
                  enableClick={true}
                  showTooltip={true}
                />
              </div>
              
              {/* Headline */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Your Relationships
                <br />
                <span className="gradient-text">Deserve Better</span>
              </h2>
              
              {/* Subtext */}
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
                Join thousands who use Bubly to nurture meaningful connections. 
                Download now and let Bubbo be your social companion.
              </p>
              
              {/* CTA Buttons + QR Code */}
              <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  <a
                    href={APP_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-gradient-bubly text-white font-semibold transition-all duration-500 hover:shadow-[0_25px_50px_-12px_rgba(167,139,250,0.5)] hover:scale-[1.03] shadow-xl"
                  >
                    <svg className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    Download Free on App Store
                  </a>
                  
                  <Link
                    to="/features"
                    className="group inline-flex items-center gap-2 px-8 py-5 text-muted-foreground hover:text-foreground font-medium transition-all duration-300"
                  >
                    Learn more about features
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>

                {/* QR Code - Desktop only */}
                <div className="hidden lg:flex flex-col items-center gap-3 pl-8 border-l border-white/10">
                  <a 
                    href={APP_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                  >
                    <div className="absolute -inset-2 bg-gradient-to-br from-bubly-sky/20 via-bubly-violet/10 to-bubly-pink/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative p-2 bg-white rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105">
                      <img 
                        src={appQRCode} 
                        alt="Scan to download Bubly" 
                        className="w-24 h-24 object-contain"
                      />
                    </div>
                  </a>
                  <p className="text-xs text-muted-foreground/60">Scan to download</p>
                </div>
              </div>
              
              {/* Trust indicators */}
              <div className="mt-16 pt-12 border-t border-white/5">
                <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground/60">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div 
                          key={i} 
                          className="w-8 h-8 rounded-full bg-gradient-to-br from-bubly-sky/40 to-bubly-violet/40 border-2 border-background flex items-center justify-center text-xs font-medium"
                        >
                          {['🎉', '💝', '✨', '🌟'][i-1]}
                        </div>
                      ))}
                    </div>
                    <span>Loved by users worldwide</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-bubly-violet">★★★★★</span>
                    <span>5.0 App Store Rating</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>🔒</span>
                    <span>Privacy First</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
