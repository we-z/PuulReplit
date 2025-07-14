import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Settings, TrendingUp, BarChart3, Check } from "lucide-react";

export function FeaturesSection() {
  const { ref, isVisible } = useIntersectionObserver();

  const features = [
    {
      icon: Settings,
      title: "Predictive Maintenance",
      description: "AI algorithms predict equipment failures before they happen, reducing downtime by 40% and maintenance costs by 25%.",
      benefits: ["40% less downtime", "25% cost reduction", "Proactive alerts"],
      metric: "94% HVAC Health Score",
      color: "from-blue-600 to-blue-800",
    },
    {
      icon: TrendingUp,
      title: "Dynamic Pricing",
      description: "Real-time market analysis and ML models optimize rental prices, increasing revenue by up to 18% while maintaining high occupancy.",
      benefits: ["18% revenue increase", "Real-time optimization", "Market analysis"],
      metric: "$3,850 Current Rate (+12%)",
      color: "from-green-600 to-green-800",
    },
    {
      icon: BarChart3,
      title: "Portfolio Analytics",
      description: "Comprehensive dashboards provide deep insights into portfolio performance, tenant behavior, and market trends.",
      benefits: ["Real-time insights", "Tenant behavior analysis", "Market trends"],
      metric: "97.2% Occupancy Rate",
      color: "from-purple-600 to-purple-800",
    },
  ];

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
            Leverage advanced machine learning to optimize every aspect of your property operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className={`group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-3 transition-all duration-500 bg-white cursor-pointer fade-in-up ${
                  isVisible ? "visible" : ""
                }`}
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <CardContent className="p-0 relative">
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Header with gradient and enhanced hover effects */}
                  <div className={`bg-gradient-to-r ${feature.color} p-6 text-white relative overflow-hidden group-hover:scale-105 transition-transform duration-500`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Icon className="w-12 h-12 mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 relative z-10" />
                    <h3 className="text-xl font-bold mb-2 relative z-10 group-hover:text-yellow-100 transition-colors duration-300">{feature.title}</h3>
                    <div className="text-sm bg-white/20 rounded-full px-3 py-1 inline-block relative z-10 group-hover:bg-white/30 group-hover:scale-105 transition-all duration-300">
                      {feature.metric}
                    </div>
                    
                    {/* Floating particles effect */}
                    <div className="absolute top-2 right-2 w-2 h-2 bg-white/30 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500"></div>
                    <div className="absolute bottom-4 left-4 w-1 h-1 bg-white/40 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-700" style={{ animationDelay: '0.2s' }}></div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Benefits list */}
                    <div className="space-y-3">
                      {feature.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center space-x-3">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
