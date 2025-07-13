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
      healthMetric: { label: "HVAC Health", value: 94 },
      delay: "0.3s",
    },
    {
      icon: TrendingUp,
      title: "Dynamic Pricing",
      description:
        "Real-time market analysis and ML models optimize rental prices, increasing revenue by up to 18% while maintaining high occupancy.",
      pricingData: { current: "$3,850", change: "+12%" },
      delay: "0.5s",
    },
    {
      icon: BarChart3,
      title: "Portfolio Analytics",
      description:
        "Comprehensive dashboards provide deep insights into portfolio performance, tenant behavior, and market trends.",
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
                  {/* Custom UI Visual */}
                  <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl mb-6 hover:scale-105 transition-transform duration-300 relative overflow-hidden">
                    <svg className="w-full h-full" viewBox="0 0 320 192" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#f9fafb" />
                          <stop offset="100%" stopColor="#e5e7eb" />
                        </linearGradient>
                      </defs>
                      <rect width="100%" height="100%" fill={`url(#gradient-${index})`} />
                      
                      {/* Feature-specific graphics */}
                      {feature.title === "Predictive Maintenance" && (
                        <g>
                          <rect x="40" y="40" width="240" height="112" rx="8" fill="#fff" stroke="#e5e7eb" strokeWidth="2" />
                          <rect x="60" y="60" width="200" height="8" rx="4" fill="#000" opacity="0.8" />
                          <rect x="60" y="80" width="150" height="8" rx="4" fill="#6b7280" />
                          <rect x="60" y="100" width="180" height="8" rx="4" fill="#9ca3af" />
                          <circle cx="250" cy="120" r="8" fill="#10b981" />
                          <text x="250" y="125" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="bold">94%</text>
                        </g>
                      )}
                      
                      {feature.title === "Dynamic Pricing" && (
                        <g>
                          <rect x="40" y="40" width="240" height="112" rx="8" fill="#fff" stroke="#e5e7eb" strokeWidth="2" />
                          <polyline points="60,130 100,100 140,110 180,80 220,90 260,60" fill="none" stroke="#000" strokeWidth="3" />
                          <circle cx="60" cy="130" r="3" fill="#000" />
                          <circle cx="100" cy="100" r="3" fill="#000" />
                          <circle cx="140" cy="110" r="3" fill="#000" />
                          <circle cx="180" cy="80" r="3" fill="#000" />
                          <circle cx="220" cy="90" r="3" fill="#000" />
                          <circle cx="260" cy="60" r="3" fill="#000" />
                          <text x="160" y="50" textAnchor="middle" fontSize="12" fill="#000" fontWeight="bold">$3,850</text>
                          <text x="200" y="50" fontSize="10" fill="#10b981" fontWeight="bold">+12%</text>
                        </g>
                      )}
                      
                      {feature.title === "Portfolio Analytics" && (
                        <g>
                          <rect x="40" y="40" width="240" height="112" rx="8" fill="#fff" stroke="#e5e7eb" strokeWidth="2" />
                          <rect x="60" y="60" width="40" height="80" fill="#000" opacity="0.8" />
                          <rect x="110" y="80" width="40" height="60" fill="#374151" />
                          <rect x="160" y="70" width="40" height="70" fill="#6b7280" />
                          <rect x="210" y="90" width="40" height="50" fill="#9ca3af" />
                          <text x="160" y="35" textAnchor="middle" fontSize="10" fill="#000" fontWeight="bold">Analytics Dashboard</text>
                        </g>
                      )}
                    </svg>
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
