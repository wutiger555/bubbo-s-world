import { Layout } from "@/components/Layout";
import { ScrollReveal } from "@/hooks/use-scroll-reveal";
import { Link } from "react-router-dom";
import { ArrowRight, Shield } from "lucide-react";

const Privacy = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-12 md:py-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-bubly-violet/5 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-bubly-sky/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1 md:py-1.5 rounded-full glass text-[10px] md:text-xs font-medium text-muted-foreground mb-4 md:mb-6 tracking-wide uppercase">
              <Shield className="w-3 h-3 md:w-3.5 md:h-3.5" />
              Legal
            </div>
            <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-6">
              Privacy <span className="gradient-text">Policy</span>
            </h1>
            <p className="text-sm md:text-lg text-muted-foreground">
              Last updated: December 2024
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 md:py-16 overflow-hidden">
        <div className="container mx-auto px-4">
          <ScrollReveal className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Subtle glow */}
              <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-br from-bubly-sky/5 via-bubly-violet/5 to-bubly-pink/5 rounded-2xl md:rounded-3xl blur-xl md:blur-2xl opacity-50" />
              
              <div className="relative p-4 md:p-12 lg:p-16 rounded-2xl md:rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-sm">
                <div className="space-y-6 md:space-y-12 text-foreground/80">
                  <section>
                    <h2 className="text-base md:text-xl font-bold text-foreground mb-2 md:mb-4 flex items-center gap-2 md:gap-3">
                      <span className="w-6 h-6 md:w-8 md:h-8 rounded-md md:rounded-lg bg-gradient-bubly flex items-center justify-center text-white text-xs md:text-sm flex-shrink-0">1</span>
                      Overview
                    </h2>
                    <p className="leading-relaxed text-xs md:text-base pl-8 md:pl-11">
                      Bubly ("we," "our," or "us") deeply values your privacy. This Privacy Policy explains how we collect, use, store, and protect the information you provide when using the Bubly application ("App").
                    </p>
                  </section>

                  <section>
                    <h2 className="text-base md:text-xl font-bold text-foreground mb-2 md:mb-4 flex items-center gap-2 md:gap-3">
                      <span className="w-6 h-6 md:w-8 md:h-8 rounded-md md:rounded-lg bg-gradient-bubly flex items-center justify-center text-white text-xs md:text-sm flex-shrink-0">2</span>
                      Data Collection
                    </h2>
                    <div className="pl-8 md:pl-11">
                      <p className="leading-relaxed text-xs md:text-base mb-3 md:mb-4">
                        <strong className="text-foreground">We are committed to not collecting your personal data.</strong> Bubly is designed with your privacy as the top priority:
                      </p>
                      <ul className="space-y-2 md:space-y-3">
                        {[
                          "All contact information is stored locally on your device only",
                          "We do not access, collect, or transmit your contact list",
                          "AI greeting generation does not store your conversation content",
                          "We do not use tracking technologies or advertising identifiers",
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2 md:gap-3 text-xs md:text-base">
                            <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-bubly-violet mt-1.5 md:mt-2 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-base md:text-xl font-bold text-foreground mb-2 md:mb-4 flex items-center gap-2 md:gap-3">
                      <span className="w-6 h-6 md:w-8 md:h-8 rounded-md md:rounded-lg bg-gradient-bubly flex items-center justify-center text-white text-xs md:text-sm flex-shrink-0">3</span>
                      Data Storage
                    </h2>
                    <p className="leading-relaxed text-xs md:text-base pl-8 md:pl-11">
                      All data you create in Bubly (including contact groups, reminder settings, personal preferences, etc.) is stored on your device. If you use iCloud sync, data is encrypted and synced through Apple's iCloud service—we cannot access this data.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-base md:text-xl font-bold text-foreground mb-2 md:mb-4 flex items-center gap-2 md:gap-3">
                      <span className="w-6 h-6 md:w-8 md:h-8 rounded-md md:rounded-lg bg-gradient-bubly flex items-center justify-center text-white text-xs md:text-sm flex-shrink-0">4</span>
                      Third-Party Services
                    </h2>
                    <div className="pl-8 md:pl-11">
                      <p className="leading-relaxed text-xs md:text-base mb-3 md:mb-4">
                        Bubly may use the following third-party services:
                      </p>
                      <ul className="space-y-2 md:space-y-3 mb-3 md:mb-4">
                        {[
                          { label: "Apple Services", desc: "App Store, iCloud (optional), Push Notifications" },
                          { label: "AI Services", desc: "Used for generating greeting messages, but input content is not stored" },
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2 md:gap-3 text-xs md:text-base">
                            <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-bubly-violet mt-1.5 md:mt-2 flex-shrink-0" />
                            <span><strong className="text-foreground">{item.label}:</strong> {item.desc}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="leading-relaxed text-xs md:text-base text-muted-foreground">
                        These services have their own privacy policies—we recommend reviewing them.
                      </p>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-base md:text-xl font-bold text-foreground mb-2 md:mb-4 flex items-center gap-2 md:gap-3">
                      <span className="w-6 h-6 md:w-8 md:h-8 rounded-md md:rounded-lg bg-gradient-bubly flex items-center justify-center text-white text-xs md:text-sm flex-shrink-0">5</span>
                      Data Security
                    </h2>
                    <div className="pl-8 md:pl-11">
                      <p className="leading-relaxed text-xs md:text-base mb-3 md:mb-4">
                        We employ industry-standard security measures to protect your data. Since data is stored on your device, we recommend:
                      </p>
                      <ul className="space-y-2 md:space-y-3">
                        {[
                          "Keep your device operating system updated",
                          "Use passcode or biometric authentication to lock your device",
                          "Regularly back up your device data",
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2 md:gap-3 text-xs md:text-base">
                            <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-bubly-violet mt-1.5 md:mt-2 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-base md:text-xl font-bold text-foreground mb-2 md:mb-4 flex items-center gap-2 md:gap-3">
                      <span className="w-6 h-6 md:w-8 md:h-8 rounded-md md:rounded-lg bg-gradient-bubly flex items-center justify-center text-white text-xs md:text-sm flex-shrink-0">6</span>
                      Children's Privacy
                    </h2>
                    <p className="leading-relaxed text-xs md:text-base pl-8 md:pl-11">
                      Bubly is not designed for children under 13. We do not knowingly collect personal information from children. If you discover that a child has provided us with personal information, please contact us—we will promptly delete such data.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-base md:text-xl font-bold text-foreground mb-2 md:mb-4 flex items-center gap-2 md:gap-3">
                      <span className="w-6 h-6 md:w-8 md:h-8 rounded-md md:rounded-lg bg-gradient-bubly flex items-center justify-center text-white text-xs md:text-sm flex-shrink-0">7</span>
                      Your Rights
                    </h2>
                    <div className="pl-8 md:pl-11">
                      <p className="leading-relaxed text-xs md:text-base mb-3 md:mb-4">
                        You have complete control over your data:
                      </p>
                      <ul className="space-y-2 md:space-y-3">
                        {[
                          { label: "Access", desc: "You can view all your data in the App at any time" },
                          { label: "Deletion", desc: "You can delete any data in the App at any time" },
                          { label: "Portability", desc: "You can export your data" },
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2 md:gap-3 text-xs md:text-base">
                            <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-bubly-violet mt-1.5 md:mt-2 flex-shrink-0" />
                            <span><strong className="text-foreground">{item.label}:</strong> {item.desc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-base md:text-xl font-bold text-foreground mb-2 md:mb-4 flex items-center gap-2 md:gap-3">
                      <span className="w-6 h-6 md:w-8 md:h-8 rounded-md md:rounded-lg bg-gradient-bubly flex items-center justify-center text-white text-xs md:text-sm flex-shrink-0">8</span>
                      Policy Updates
                    </h2>
                    <p className="leading-relaxed text-xs md:text-base pl-8 md:pl-11">
                      We may update this Privacy Policy from time to time. Updated versions will be posted in the App and on this page. For significant changes, we will notify you through the App.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-base md:text-xl font-bold text-foreground mb-2 md:mb-4 flex items-center gap-2 md:gap-3">
                      <span className="w-6 h-6 md:w-8 md:h-8 rounded-md md:rounded-lg bg-gradient-bubly flex items-center justify-center text-white text-xs md:text-sm flex-shrink-0">9</span>
                      Contact Us
                    </h2>
                    <div className="pl-8 md:pl-11">
                      <p className="leading-relaxed text-xs md:text-base mb-3 md:mb-4">
                        If you have any questions about this Privacy Policy, please contact us:
                      </p>
                      <a 
                        href="mailto:privacy@bubly.app" 
                        className="inline-flex items-center gap-2 text-xs md:text-base text-primary hover:underline transition-colors duration-300"
                      >
                        privacy@bubly.app
                        <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                      </a>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-8 md:py-16">
        <div className="container mx-auto px-4">
          <ScrollReveal className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Link
                to="/terms"
                className="group inline-flex items-center justify-center gap-2 px-5 md:px-6 py-2.5 md:py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-sm md:text-base"
              >
                Terms of Service
                <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 px-5 md:px-6 py-2.5 md:py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-sm md:text-base"
              >
                Contact Us
                <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
