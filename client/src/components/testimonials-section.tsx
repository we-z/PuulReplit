import { useState, useEffect } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

export function TestimonialsSection() {
  const { ref, isVisible } = useIntersectionObserver();
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      quote: "Puul's AI has revolutionized our maintenance operations. We've reduced emergency repairs by 60% and our tenants couldn't be happier.",
      author: "Sarah Chen",
      position: "VP of Operations",
      company: "Metropolitan Properties",
      rating: 5,
      metrics: "60% reduction in emergency repairs",
      avatar: "SC",
      color: "from-blue-600 to-blue-700",
    },
    {
      quote: "The dynamic pricing feature increased our portfolio revenue by 22% in just six months. The ROI is incredible.",
      author: "Michael Rodriguez", 
      position: "Portfolio Manager",
      company: "Urban Living Corp",
      rating: 5,
      metrics: "22% revenue increase in 6 months",
      avatar: "MR",
      color: "from-green-600 to-green-700",
    },
    {
      quote: "The real-time analytics dashboard gives us insights we never had before. Data-driven decisions are now the norm.",
      author: "Emma Thompson",
      position: "Regional Director",
      company: "Prime Real Estate",
      rating: 5,
      metrics: "100% data-driven decision making",
      avatar: "ET",
      color: "from-purple-600 to-purple-700",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
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
    <section ref={ref} className="py-20 bg-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl md:text-5xl font-bold text-gray-900 mb-6 fade-in-up ${
              isVisible ? "visible" : ""
            }`}
          >
            What Our Customers Say
          </h2>
          <p
            className={`text-lg md:text-xl text-gray-600 max-w-3xl mx-auto fade-in-up ${
              isVisible ? "visible" : ""
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            See how top property managers are transforming their operations with measurable results
          </p>
        </div>

        {/* Featured Testimonial */}
        <div
          className={`relative mb-16 fade-in-up ${isVisible ? "visible" : ""}`}
          style={{ animationDelay: "0.4s" }}
        >
          <Card className="bg-gradient-to-r from-gray-900 to-gray-800 text-white overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <Quote className="w-12 h-12 text-white/30 mb-6" />
                  <blockquote className="text-xl md:text-2xl font-light mb-8 leading-relaxed">
                    "{testimonials[currentSlide].quote}"
                  </blockquote>
                  
                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-6">
                    {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="bg-white/10 rounded-lg p-4 mb-6">
                    <div className="text-sm text-white/70 mb-1">Key Result</div>
                    <div className="text-lg font-semibold">{testimonials[currentSlide].metrics}</div>
                  </div>
                </div>

                <div className="flex-shrink-0">
                  <div className={`w-20 h-20 bg-gradient-to-r ${testimonials[currentSlide].color} rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4`}>
                    {testimonials[currentSlide].avatar}
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold">{testimonials[currentSlide].author}</div>
                    <div className="text-white/70 text-sm">{testimonials[currentSlide].position}</div>
                    <div className="text-white/70 text-sm">{testimonials[currentSlide].company}</div>
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
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Previous
                </Button>

                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentSlide ? "bg-white" : "bg-white/30"
                      }`}
                      onClick={() => goToSlide(index)}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextSlide}
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                  aria-label="Next testimonial"
                >
                  Next
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* All Testimonials Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 fade-in-up ${isVisible ? "visible" : ""}`}
          style={{ animationDelay: "0.6s" }}
        >
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="border-2 border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-lg cursor-pointer"
              onClick={() => goToSlide(index)}
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 bg-gradient-to-r ${testimonial.color} rounded-full flex items-center justify-center text-white text-sm font-bold`}>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{testimonial.author}</div>
                    <div className="text-gray-500 text-xs">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}