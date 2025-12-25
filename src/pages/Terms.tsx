import { Layout } from "@/components/Layout";
import { ScrollReveal } from "@/hooks/use-scroll-reveal";
import { Link } from "react-router-dom";
import { ArrowRight, FileText } from "lucide-react";

const Terms = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-12 md:py-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-bubly-violet/5 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-bubly-pink/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1 md:py-1.5 rounded-full glass text-[10px] md:text-xs font-medium text-muted-foreground mb-4 md:mb-6 tracking-wide uppercase">
              <FileText className="w-3 h-3 md:w-3.5 md:h-3.5" />
              Legal
            </div>
            <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-6">
              Terms of <span className="gradient-text">Service</span>
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
              <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-br from-bubly-pink/5 via-bubly-violet/5 to-bubly-sky/5 rounded-2xl md:rounded-3xl blur-xl md:blur-2xl opacity-50" />
              
              <div className="relative p-4 md:p-12 lg:p-16 rounded-2xl md:rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-sm">
                <div className="space-y-6 md:space-y-12 text-foreground/80">
                  <section>
                    <h2 className="text-base md:text-xl font-bold text-foreground mb-2 md:mb-4 flex items-center gap-2 md:gap-3">
                      <span className="w-6 h-6 md:w-8 md:h-8 rounded-md md:rounded-lg bg-gradient-bubly flex items-center justify-center text-white text-xs md:text-sm flex-shrink-0">1</span>
                      Acceptance of Terms
                    </h2>
                    <p className="leading-relaxed text-xs md:text-base pl-8 md:pl-11">
                      Welcome to Bubly (the "Service"). By downloading, installing, or using this application, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Service.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-base md:text-xl font-bold text-foreground mb-2 md:mb-4 flex items-center gap-2 md:gap-3">
                      <span className="w-6 h-6 md:w-8 md:h-8 rounded-md md:rounded-lg bg-gradient-bubly flex items-center justify-center text-white text-xs md:text-sm flex-shrink-0">2</span>
                      Service Description
                    </h2>
                    <div className="pl-8 md:pl-11">
                      <p className="leading-relaxed text-xs md:text-base mb-3 md:mb-4">
                        Bubly is an intelligent social assistant application that provides the following features:
                      </p>
                      <ul className="space-y-2 md:space-y-3">
                        {[
                          "Contact management and categorization",
                          "Important date reminders",
                          "AI-assisted greeting message generation",
                          "Interaction history tracking",
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
                      User Responsibilities
                    </h2>
                    <div className="pl-8 md:pl-11">
                      <p className="leading-relaxed text-xs md:text-base mb-3 md:mb-4">
                        When using the Service, you agree to:
                      </p>
                      <ul className="space-y-2 md:space-y-3">
                        {[
                          "Provide truthful and accurate information",
                          "Not use the Service for any illegal or unauthorized purpose",
                          "Not attempt to damage, interfere with, or bypass any security features of the Service",
                          "Not use the Service to send spam or harass others",
                          "Comply with all applicable laws and regulations",
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
                      <span className="w-6 h-6 md:w-8 md:h-8 rounded-md md:rounded-lg bg-gradient-bubly flex items-center justify-center text-white text-xs md:text-sm flex-shrink-0">4</span>
                      Intellectual Property
                    </h2>
                    <div className="pl-8 md:pl-11">
                      <p className="leading-relaxed text-xs md:text-base mb-3 md:mb-4">
                        The Service and all its content, including but not limited to text, graphics, logos, icons, images, software, and its arrangement, are the property of Bubly or its licensors and are protected by copyright and other intellectual property laws.
                      </p>
                      <p className="leading-relaxed text-xs md:text-base text-muted-foreground">
                        Greeting messages you generate using the AI feature may be freely used, shared, and modified, but not for commercial purposes or claimed as output from third-party AI services.
                      </p>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-base md:text-xl font-bold text-foreground mb-2 md:mb-4 flex items-center gap-2 md:gap-3">
                      <span className="w-6 h-6 md:w-8 md:h-8 rounded-md md:rounded-lg bg-gradient-bubly flex items-center justify-center text-white text-xs md:text-sm flex-shrink-0">5</span>
                      Subscription Services
                    </h2>
                    <div className="pl-8 md:pl-11">
                      <p className="leading-relaxed text-xs md:text-base mb-3 md:mb-4">
                        Bubly offers free basic features and paid subscription services:
                      </p>
                      <ul className="space-y-2 md:space-y-3 mb-3 md:mb-4">
                        {[
                          { label: "Free Version", desc: "Basic contact management, limited AI greeting generation" },
                          { label: "Subscription", desc: "Unlimited feature access, advanced analytics, priority support" },
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2 md:gap-3 text-xs md:text-base">
                            <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-bubly-violet mt-1.5 md:mt-2 flex-shrink-0" />
                            <span><strong className="text-foreground">{item.label}:</strong> {item.desc}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="leading-relaxed text-xs md:text-base text-muted-foreground">
                        Subscription fees are charged through your Apple ID account. Subscriptions auto-renew unless cancelled at least 24 hours before the current period ends.
                      </p>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-base md:text-xl font-bold text-foreground mb-2 md:mb-4 flex items-center gap-2 md:gap-3">
                      <span className="w-6 h-6 md:w-8 md:h-8 rounded-md md:rounded-lg bg-gradient-bubly flex items-center justify-center text-white text-xs md:text-sm flex-shrink-0">6</span>
                      Disclaimer
                    </h2>
                    <div className="pl-8 md:pl-11">
                      <p className="leading-relaxed text-xs md:text-base mb-3 md:mb-4">
                        The Service is provided "as is" without any express or implied warranties, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that:
                      </p>
                      <ul className="space-y-2 md:space-y-3">
                        {[
                          "The Service will be uninterrupted or error-free",
                          "Service results will be accurate or reliable",
                          "AI-generated content will be suitable for all occasions",
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
                      <span className="w-6 h-6 md:w-8 md:h-8 rounded-md md:rounded-lg bg-gradient-bubly flex items-center justify-center text-white text-xs md:text-sm flex-shrink-0">7</span>
                      Limitation of Liability
                    </h2>
                    <p className="leading-relaxed text-xs md:text-base pl-8 md:pl-11">
                      To the maximum extent permitted by law, Bubly and its affiliates, officers, directors, employees, or agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from the use or inability to use the Service.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-base md:text-xl font-bold text-foreground mb-2 md:mb-4 flex items-center gap-2 md:gap-3">
                      <span className="w-6 h-6 md:w-8 md:h-8 rounded-md md:rounded-lg bg-gradient-bubly flex items-center justify-center text-white text-xs md:text-sm flex-shrink-0">8</span>
                      Service Changes and Termination
                    </h2>
                    <p className="leading-relaxed text-xs md:text-base pl-8 md:pl-11">
                      We reserve the right to modify, suspend, or terminate the Service (or any part thereof) at any time without notice. We shall not be liable to you or any third party for any modification, suspension, or termination of the Service.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-base md:text-xl font-bold text-foreground mb-2 md:mb-4 flex items-center gap-2 md:gap-3">
                      <span className="w-6 h-6 md:w-8 md:h-8 rounded-md md:rounded-lg bg-gradient-bubly flex items-center justify-center text-white text-xs md:text-sm flex-shrink-0">9</span>
                      Terms Modification
                    </h2>
                    <p className="leading-relaxed text-xs md:text-base pl-8 md:pl-11">
                      We may modify these Terms of Service from time to time. Modified terms will be posted on this page and become effective immediately upon posting. Your continued use of the Service after modification constitutes acceptance of the modified terms.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-base md:text-xl font-bold text-foreground mb-2 md:mb-4 flex items-center gap-2 md:gap-3">
                      <span className="w-6 h-6 md:w-8 md:h-8 rounded-md md:rounded-lg bg-gradient-bubly flex items-center justify-center text-white text-xs md:text-sm flex-shrink-0">10</span>
                      Governing Law
                    </h2>
                    <p className="leading-relaxed text-xs md:text-base pl-8 md:pl-11">
                      These Terms of Service shall be governed by the laws of the Republic of China (Taiwan), without regard to conflict of law principles. Any disputes arising from these terms shall be subject to the jurisdiction of the Taipei District Court, Taiwan, R.O.C.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-base md:text-xl font-bold text-foreground mb-2 md:mb-4 flex items-center gap-2 md:gap-3">
                      <span className="w-6 h-6 md:w-8 md:h-8 rounded-md md:rounded-lg bg-gradient-bubly flex items-center justify-center text-white text-xs md:text-sm flex-shrink-0">11</span>
                      Contact Information
                    </h2>
                    <div className="pl-8 md:pl-11">
                      <p className="leading-relaxed text-xs md:text-base mb-3 md:mb-4">
                        If you have any questions about these Terms of Service, please contact us:
                      </p>
                      <a 
                        href="mailto:legal@bubly.app" 
                        className="inline-flex items-center gap-2 text-xs md:text-base text-primary hover:underline transition-colors duration-300"
                      >
                        legal@bubly.app
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
                to="/privacy"
                className="group inline-flex items-center justify-center gap-2 px-5 md:px-6 py-2.5 md:py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-sm md:text-base"
              >
                Privacy Policy
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

export default Terms;
