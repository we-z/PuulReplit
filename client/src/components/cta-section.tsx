import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Users } from "lucide-react";

export function CTASection() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section ref={ref} className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl md:text-5xl font-bold mb-6 fade-in-up ${
              isVisible ? "visible" : ""
            }`}
          >
            Ready to Transform Your
            <span className="block text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
              Property Management?
            </span>
          </h2>

          <p
            className={`text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto fade-in-up ${
              isVisible ? "visible" : ""
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            Join 500+ property managers who have already upgraded to AI-powered operations
          </p>
        </div>

        {/* Trust Indicators */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 fade-in-up ${
            isVisible ? "visible" : ""
          }`}
          style={{ animationDelay: "0.4s" }}
        >
          <div className="text-center">
            <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Quick Setup</h3>
            <p className="text-gray-400 text-sm">Get started in under 5 minutes with our guided onboarding</p>
          </div>
          <div className="text-center">
            <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Enterprise Security</h3>
            <p className="text-gray-400 text-sm">Bank-level encryption and SOC 2 Type II compliance</p>
          </div>
          <div className="text-center">
            <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-400 text-sm">Dedicated customer success team to ensure your success</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div
          className={`text-center fade-in-up ${isVisible ? "visible" : ""}`}
          style={{ animationDelay: "0.6s" }}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              size="lg"
              className="bg-white text-gray-900 px-8 py-4 text-lg font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 group"
              aria-label="Start free trial"
              onClick={() => window.location.href = "/api/login"}
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-gray-900 hover:scale-105 transition-all duration-300"
              aria-label="Schedule demo"
              onClick={() => window.location.href = "/api/login"}
            >
              Schedule Demo
            </Button>
          </div>

          <p className="text-sm text-gray-400">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/10 fade-in-up ${
            isVisible ? "visible" : ""
          }`}
          style={{ animationDelay: "0.8s" }}
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
            <div className="text-gray-400">Property Managers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">50K+</div>
            <div className="text-gray-400">Properties Managed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">$2.8B</div>
            <div className="text-gray-400">Assets Under Management</div>
          </div>
        </div>
      </div>
    </section>
  );
}