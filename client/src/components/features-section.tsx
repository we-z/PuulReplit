import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useParallax } from "@/hooks/use-parallax";
import { Card, CardContent } from "@/components/ui/card";
import { Settings, TrendingUp, BarChart3 } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export function FeaturesSection() {
  const { ref, isVisible } = useIntersectionObserver();
  const parallaxOffset = useParallax(0.3);

  const features = [
    {
      icon: Settings,
      title: "Predictive Maintenance",
      description:
        "AI algorithms predict equipment failures before they happen, reducing downtime by 40% and maintenance costs by 25%.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      imageAlt: "Modern apartment building with glass balconies and smart maintenance systems",
      healthMetric: { label: "HVAC Health", value: 94 },
      delay: "0.3s",
    },
    {
      icon: TrendingUp,
      title: "Dynamic Pricing",
      description:
        "Real-time market analysis and ML models optimize rental prices, increasing revenue by up to 18% while maintaining high occupancy.",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      imageAlt: "Luxury high-rise apartments with city skyline view representing premium pricing",
      pricingData: { current: "$3,850", change: "+12%" },
      delay: "0.5s",
    },
    {
      icon: BarChart3,
      title: "Portfolio Analytics",
      description:
        "Comprehensive dashboards provide deep insights into portfolio performance, tenant behavior, and market trends.",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      imageAlt: "Impressive skyscraper complex representing large property portfolio management",
      analytics: {
        occupancy: "97.2%",
        revenue: "$2.8M",
      },
      delay: "0.7s",
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-white relative overflow-hidden" id="features">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 parallax-element opacity-5"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <img
          src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&h=1200"
          alt="Elegant residential complex aerial view"
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
            AI-Powered Insights
          </h2>
          <p
            className={`text-xl text-gray-700 max-w-3xl mx-auto fade-in-up ${
              isVisible ? "visible" : ""
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            Leverage machine learning to optimize every aspect of your property
            management operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className={`bg-gray-50 hover-scale fade-in-up ${
                  isVisible ? "visible" : ""
                }`}
                style={{ animationDelay: feature.delay }}
              >
                <CardContent className="p-8">
                  {/* Beautiful Property Image with Parallax */}
                  <div className="w-full h-48 rounded-xl mb-6 relative overflow-hidden group">
                    <img
                      src={feature.image}
                      alt={feature.imageAlt}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 ease-out group-hover:brightness-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                      <Icon className="w-4 h-4 text-black" />
                    </div>
                  </div>

                  <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-black mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 mb-6">{feature.description}</p>

                  {/* Feature-specific metrics */}
                  {feature.healthMetric && (
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-700">
                          {feature.healthMetric.label}
                        </span>
                        <span className="text-green-600 font-semibold">
                          {feature.healthMetric.value}%
                        </span>
                      </div>
                      <Progress value={feature.healthMetric.value} className="h-2" />
                    </div>
                  )}

                  {feature.pricingData && (
                    <div className="flex items-center justify-between bg-white p-4 rounded-xl">
                      <div>
                        <div className="text-sm text-gray-700">Suggested Rate</div>
                        <div className="text-2xl font-bold text-black">
                          {feature.pricingData.current}
                        </div>
                      </div>
                      <div className="text-green-600 text-sm font-semibold">
                        {feature.pricingData.change} ↗
                      </div>
                    </div>
                  )}

                  {feature.analytics && (
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-black">
                          {feature.analytics.occupancy}
                        </div>
                        <div className="text-xs text-gray-700">Occupancy</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-black">
                          {feature.analytics.revenue}
                        </div>
                        <div className="text-xs text-gray-700">Monthly Revenue</div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
