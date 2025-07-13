import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Settings, TrendingUp, BarChart3 } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export function FeaturesSection() {
  const { ref, isVisible } = useIntersectionObserver();

  const features = [
    {
      icon: Settings,
      title: "Predictive Maintenance",
      description:
        "AI algorithms predict equipment failures before they happen, reducing downtime by 40% and maintenance costs by 25%.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      healthMetric: { label: "HVAC Health", value: 94 },
      delay: "0.3s",
    },
    {
      icon: TrendingUp,
      title: "Dynamic Pricing",
      description:
        "Real-time market analysis and ML models optimize rental prices, increasing revenue by up to 18% while maintaining high occupancy.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      pricingData: { current: "$3,850", change: "+12%" },
      delay: "0.5s",
    },
    {
      icon: BarChart3,
      title: "Portfolio Analytics",
      description:
        "Comprehensive dashboards provide deep insights into portfolio performance, tenant behavior, and market trends.",
      image:
        "https://images.unsplash.com/photo-1590479773265-7464e5d48118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      analytics: {
        occupancy: "97.2%",
        revenue: "$2.8M",
      },
      delay: "0.7s",
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-white" id="features">
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
                  <img
                    src={feature.image}
                    alt={`${feature.title} analytics dashboard`}
                    className="w-full h-48 object-cover rounded-xl mb-6 hover:scale-105 transition-transform duration-300"
                  />

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
