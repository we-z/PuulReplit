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
            className="bg-black text-white px-8 py-4 text-lg font-semibold hover:scale-105 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
            aria-label="Start free trial"
            onClick={() => window.location.href = "/api/login"}
          >
            <span className="relative z-10">Start Free Trial</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-black text-black px-8 py-4 text-lg font-semibold hover:bg-black hover:text-white hover:scale-105 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group relative overflow-hidden"
            aria-label="View live demo"
            onClick={() => window.location.href = "/api/login"}
          >
            <span className="relative z-10">View Demo</span>
            <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </Button>
        </div>

        {/* Technology highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
          <Card
            className={`group glassmorphism hover:scale-105 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer fade-in-up ${
              isVisible ? "visible" : ""
            }`}
            style={{ animationDelay: "0.6s" }}
          >
            <CardContent className="pt-6 relative overflow-hidden">
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                🤖
              </div>
              <div className="text-lg font-bold text-black group-hover:text-blue-600 transition-colors duration-300">
                Machine Learning
              </div>
              <div className="text-gray-600 text-sm">Advanced AI algorithms</div>
              <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
            </CardContent>
          </Card>

          <Card
            className={`group glassmorphism hover:scale-105 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer fade-in-up ${
              isVisible ? "visible" : ""
            }`}
            style={{ animationDelay: "0.8s" }}
          >
            <CardContent className="pt-6 relative overflow-hidden">
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                ⚡
              </div>
              <div className="text-lg font-bold text-black group-hover:text-green-600 transition-colors duration-300">
                Real-time Analytics
              </div>
              <div className="text-gray-600 text-sm">Live property insights</div>
              <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-green-400/20 to-yellow-400/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
            </CardContent>
          </Card>

          <Card
            className={`group glassmorphism hover:scale-105 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer fade-in-up ${
              isVisible ? "visible" : ""
            }`}
            style={{ animationDelay: "1s" }}
          >
            <CardContent className="pt-6 relative overflow-hidden">
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                🔮
              </div>
              <div className="text-lg font-bold text-black group-hover:text-purple-600 transition-colors duration-300">
                Predictive Intelligence
              </div>
              <div className="text-gray-600 text-sm">Future-focused decisions</div>
              <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
