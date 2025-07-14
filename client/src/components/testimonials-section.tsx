import { useState, useEffect } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

export function TestimonialsSection() {
  const { ref, isVisible } = useIntersectionObserver();
  const [currentSlide, setCurrentSlide] = useState(0);

  const features = [
    {
      title: "Predictive Maintenance AI",
      description: "Advanced machine learning algorithms analyze property systems to predict maintenance needs before issues occur, preventing costly emergency repairs and tenant disruption.",
      icon: "🔧",
      color: "from-blue-600 to-blue-700",
      benefits: ["Early problem detection", "Cost prevention", "Tenant satisfaction"]
    },
    {
      title: "Dynamic Pricing Engine",
      description: "Intelligent pricing optimization that adjusts rental rates based on real-time market data, seasonal trends, and property-specific factors.",
      icon: "💰", 
      color: "from-green-600 to-green-700",
      benefits: ["Market-responsive pricing", "Revenue optimization", "Competitive positioning"]
    },
    {
      title: "Portfolio Analytics Dashboard",
      description: "Comprehensive real-time insights across your entire property portfolio with actionable recommendations and performance tracking.",
      icon: "📊",
      color: "from-purple-600 to-purple-700",
      benefits: ["Real-time monitoring", "Data-driven decisions", "Performance insights"]
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % features.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + features.length) % features.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={ref} className="py-20 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl md:text-5xl font-bold text-gray-900 mb-6 fade-in-up ${
              isVisible ? "visible" : ""
            }`}
          >
            AI-Powered Property Management
          </h2>
          <p
            className={`text-lg md:text-xl text-gray-600 max-w-3xl mx-auto fade-in-up ${
              isVisible ? "visible" : ""
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            Advanced machine learning capabilities designed to optimize every aspect of property operations
          </p>
        </div>

        {/* Featured Feature */}
        <div
          className={`relative mb-16 fade-in-up ${isVisible ? "visible" : ""}`}
          style={{ animationDelay: "0.4s" }}
        >
          <Card className="bg-gradient-to-r from-gray-900 to-gray-800 text-white overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <div className="text-6xl mb-6">{features[currentSlide].icon}</div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 leading-relaxed">
                    {features[currentSlide].title}
                  </h3>
                  <p className="text-lg text-white/90 mb-8 leading-relaxed">
                    {features[currentSlide].description}
                  </p>

                  {/* Benefits */}
                  <div className="bg-white/10 rounded-lg p-6">
                    <div className="text-sm text-white/70 mb-3">Key Benefits</div>
                    <div className="space-y-2">
                      {features[currentSlide].benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                          <span className="text-white/90">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex-shrink-0">
                  <div className={`w-32 h-32 bg-gradient-to-r ${features[currentSlide].color} rounded-2xl flex items-center justify-center text-white text-4xl mb-6 shadow-2xl`}>
                    {features[currentSlide].icon}
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center mt-8">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={prevSlide}
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                  aria-label="Previous feature"
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Previous
                </Button>

                <div className="flex space-x-2">
                  {features.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentSlide ? "bg-white" : "bg-white/30"
                      }`}
                      onClick={() => goToSlide(index)}
                      aria-label={`Go to feature ${index + 1}`}
                    />
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextSlide}
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                  aria-label="Next feature"
                >
                  Next
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* All Features Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 fade-in-up ${isVisible ? "visible" : ""}`}
          style={{ animationDelay: "0.6s" }}
        >
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-2 border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-lg cursor-pointer group"
              onClick={() => goToSlide(index)}
            >
              <CardContent className="p-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center text-white text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                
                <h3 className="font-bold text-gray-900 text-lg mb-3">{feature.title}</h3>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="space-y-1">
                  {feature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-gray-500">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}