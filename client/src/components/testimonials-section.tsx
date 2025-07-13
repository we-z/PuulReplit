import { useState, useEffect } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useParallax } from "@/hooks/use-parallax";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function TestimonialsSection() {
  const { ref, isVisible } = useIntersectionObserver();
  const parallaxOffset = useParallax(0.15);
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      quote:
        "Puul's AI has revolutionized our maintenance operations. We've reduced emergency repairs by 60% and our tenants couldn't be happier.",
      author: "Sarah Chen",
      position: "VP of Operations, Metropolitan Properties",
      initials: "SC",
      bgColor: "bg-gray-800",
    },
    {
      quote:
        "The dynamic pricing feature increased our portfolio revenue by 22% in just six months. The ROI is incredible.",
      author: "Michael Rodriguez",
      position: "Portfolio Manager, Urban Living Corp",
      initials: "MR",
      bgColor: "bg-gray-700",
    },
    {
      quote:
        "The real-time analytics dashboard gives us insights we never had before. Data-driven decisions are now the norm.",
      author: "Emma Thompson",
      position: "Regional Director, Prime Real Estate",
      initials: "ET",
      bgColor: "bg-gray-900",
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
    <section ref={ref} className="py-20 bg-white relative overflow-hidden" id="testimonials">
      {/* Elegant Background with Parallax */}
      <div
        className="absolute inset-0 parallax-element opacity-5"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <img
          src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&h=1200"
          alt="Elegant luxury condominium towers with landscaped grounds"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold text-black mb-6 fade-in-up ${
              isVisible ? "visible" : ""
            }`}
          >
            Trusted by Industry Leaders
          </h2>
          <p
            className={`text-xl text-gray-700 max-w-3xl mx-auto fade-in-up ${
              isVisible ? "visible" : ""
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            See how property managers are transforming their operations with
            Puul's AI platform.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="w-full flex-shrink-0 bg-gray-50 border-0"
                >
                  <CardContent className="p-8 md:p-12">
                    <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                      <div className={`w-24 h-24 rounded-full ${testimonial.bgColor} border-4 border-white shadow-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center`}>
                        <span className="text-white text-xl font-bold">
                          {testimonial.initials}
                        </span>
                      </div>
                      <div className="text-center md:text-left">
                        <blockquote className="text-xl md:text-2xl text-black mb-6 font-medium">
                          "{testimonial.quote}"
                        </blockquote>
                        <div className="text-gray-700">
                          <div className="font-semibold text-black">
                            {testimonial.author}
                          </div>
                          <div>{testimonial.position}</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Carousel Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full hover:scale-125 transition-transform duration-300 ${
                  index === currentSlide ? "bg-black" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-black" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-black" />
          </Button>
        </div>
      </div>
    </section>
  );
}
