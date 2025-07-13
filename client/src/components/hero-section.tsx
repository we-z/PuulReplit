import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useParallax } from "@/hooks/use-parallax";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function HeroSection() {
  const { ref, isVisible } = useIntersectionObserver();
  const parallaxOffset = useParallax(-0.5);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white pt-16"
      id="hero"
    >
      {/* Background with parallax effect */}
      <div
        className="absolute inset-0 parallax-element"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200">
          <svg className="w-full h-full opacity-5" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#000" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            <circle cx="200" cy="150" r="3" fill="#000" opacity="0.3" />
            <circle cx="800" cy="250" r="2" fill="#000" opacity="0.2" />
            <circle cx="1000" cy="400" r="4" fill="#000" opacity="0.25" />
            <rect x="300" y="500" width="20" height="20" fill="#000" opacity="0.15" transform="rotate(45 310 510)" />
            <rect x="700" y="100" width="15" height="15" fill="#000" opacity="0.2" transform="rotate(45 707.5 107.5)" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1
          className={`text-5xl md:text-7xl font-bold text-black mb-6 fade-in-up ${
            isVisible ? "visible" : ""
          }`}
        >
          AI for Property{" "}
          <span className="block text-gray-700">Managers</span>
        </h1>

        <p
          className={`text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto fade-in-up ${
            isVisible ? "visible" : ""
          }`}
          style={{ animationDelay: "0.2s" }}
        >
          Transform your property management with enterprise-grade AI. Predictive
          maintenance, dynamic pricing, and real-time insights for modern property
          portfolios.
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center fade-in-up ${
            isVisible ? "visible" : ""
          }`}
          style={{ animationDelay: "0.4s" }}
        >
          <Button
            size="lg"
            className="bg-black text-white px-8 py-4 text-lg font-semibold hover:scale-105 hover:shadow-xl transition-all duration-300"
            aria-label="Start free trial"
          >
            Start Free Trial
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-black text-black px-8 py-4 text-lg font-semibold hover:bg-black hover:text-white hover:scale-105 transition-all duration-300"
            aria-label="View live demo"
          >
            View Demo
          </Button>
        </div>

        {/* Floating metrics cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
          <Card
            className={`glassmorphism hover-scale fade-in-up ${
              isVisible ? "visible" : ""
            }`}
            style={{ animationDelay: "0.6s" }}
          >
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-black pulse-animation">
                99.8%
              </div>
              <div className="text-gray-700 font-medium">Uptime</div>
            </CardContent>
          </Card>

          <Card
            className={`glassmorphism hover-scale fade-in-up ${
              isVisible ? "visible" : ""
            }`}
            style={{ animationDelay: "0.8s" }}
          >
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-black pulse-animation">
                30%
              </div>
              <div className="text-gray-700 font-medium">Cost Reduction</div>
            </CardContent>
          </Card>

          <Card
            className={`glassmorphism hover-scale fade-in-up ${
              isVisible ? "visible" : ""
            }`}
            style={{ animationDelay: "1s" }}
          >
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-black pulse-animation">
                500+
              </div>
              <div className="text-gray-700 font-medium">Properties</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
