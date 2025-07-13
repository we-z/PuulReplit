import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useParallax } from "@/hooks/use-parallax";
import { Button } from "@/components/ui/button";

export function CTASection() {
  const { ref, isVisible } = useIntersectionObserver();
  const parallaxOffset = useParallax(0.4);

  return (
    <section
      ref={ref}
      className="py-20 bg-black text-white relative overflow-hidden"
    >
      {/* Beautiful Skyscraper Background with Parallax */}
      <div 
        className="absolute inset-0 parallax-element"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <img
          src="https://images.unsplash.com/photo-1577495508048-b635879837f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&h=1200"
          alt="Magnificent downtown skyscrapers at twilight representing enterprise property management"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20"></div>
      </div>

      {/* Floating geometric elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-16 h-16 border border-white/20 rotate-45 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-white/10 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-8 h-8 border border-white/30 rotate-12 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-6 h-6 bg-white/15 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className={`text-4xl md:text-6xl font-bold mb-6 fade-in-up ${
            isVisible ? "visible" : ""
          }`}
        >
          Ready to Transform Your{" "}
          <span className="block text-gray-300">Property Management?</span>
        </h2>

        <p
          className={`text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto fade-in-up ${
            isVisible ? "visible" : ""
          }`}
          style={{ animationDelay: "0.2s" }}
        >
          Join 500+ property managers who have already upgraded to AI-powered
          operations.
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-6 justify-center items-center fade-in-up ${
            isVisible ? "visible" : ""
          }`}
          style={{ animationDelay: "0.4s" }}
        >
          <Button
            size="lg"
            className="bg-white text-black px-10 py-4 text-xl font-bold hover:scale-105 hover:shadow-2xl transition-all duration-300"
            aria-label="Start free trial"
          >
            Start Free Trial
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white px-10 py-4 text-xl font-bold hover:bg-white hover:text-black hover:scale-105 transition-all duration-300"
            aria-label="Schedule demo"
          >
            Schedule Demo
          </Button>
        </div>

        <div
          className={`mt-12 text-gray-400 fade-in-up ${
            isVisible ? "visible" : ""
          }`}
          style={{ animationDelay: "0.6s" }}
        >
          <p>No credit card required • 14-day free trial • Cancel anytime</p>
        </div>
      </div>
    </section>
  );
}
