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
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white pt-32"
      id="hero"
    >
      {/* Background with parallax effect */}
      <div
        className="absolute inset-0 parallax-element"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&h=1200"
          alt="Modern glass skyscraper facade reflecting clouds"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 to-white/80"></div>
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
            onClick={() => window.location.href = "/api/login"}
          >
            Start Free Trial
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-black text-black px-8 py-4 text-lg font-semibold hover:bg-black hover:text-white hover:scale-105 transition-all duration-300"
            aria-label="View live demo"
            onClick={() => window.location.href = "/api/login"}
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
