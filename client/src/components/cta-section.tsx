import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Button } from "@/components/ui/button";

export function CTASection() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section
      ref={ref}
      className="py-20 bg-black text-white relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1577495508048-b635879837f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&h=1200"
          alt="Modern office building with geometric architecture"
          className="w-full h-full object-cover"
        />
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
