import { useEffect, useState } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Building, Wrench, DollarSign, BarChart3, ArrowRight } from "lucide-react";

export function DashboardSection() {
  const { ref, isVisible } = useIntersectionObserver();
  
  // Simulated real-time metrics
  const [metrics, setMetrics] = useState({
    totalRevenue: 847200,
    occupancyRate: 96.7,
    activeProperties: 142,
    maintenanceRequests: 23,
    revenueGrowth: 12.5,
    avgRent: 2850,
  });

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        ...prev,
        totalRevenue: prev.totalRevenue + (Math.random() * 5000 - 2500),
        occupancyRate: Math.max(94, Math.min(99, prev.occupancyRate + (Math.random() * 0.4 - 0.2))),
        maintenanceRequests: Math.max(15, Math.min(30, prev.maintenanceRequests + (Math.random() * 2 - 1))),
      }));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const dashboardMetrics = [
    {
      title: "Total Revenue",
      value: `$${(metrics.totalRevenue / 1000).toFixed(0)}K`,
      change: `+${metrics.revenueGrowth}%`,
      icon: DollarSign,
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      title: "Occupancy Rate",
      value: `${metrics.occupancyRate.toFixed(1)}%`,
      change: "+2.3%",
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      title: "Active Properties",
      value: metrics.activeProperties.toString(),
      change: "+8 this month",
      icon: Building,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      title: "Maintenance Requests",
      value: metrics.maintenanceRequests.toString(),
      change: "-15% vs last month",
      icon: Wrench,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-50" id="dashboard">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl md:text-5xl font-bold text-gray-900 mb-6 fade-in-up ${
              isVisible ? "visible" : ""
            }`}
          >
            Real-Time Dashboard Preview
          </h2>
          <p
            className={`text-lg md:text-xl text-gray-600 max-w-3xl mx-auto fade-in-up ${
              isVisible ? "visible" : ""
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            Monitor your entire portfolio with live metrics and AI-powered insights
          </p>
        </div>

        {/* Live Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {dashboardMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <Card
                key={metric.title}
                className={`${metric.bgColor} border-2 ${metric.borderColor} transition-all duration-300 hover:shadow-lg fade-in-up ${
                  isVisible ? "visible" : ""
                }`}
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Icon className={`w-8 h-8 ${metric.color}`} />
                    <span className="text-sm font-medium text-green-600">
                      {metric.change}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-600">
                      {metric.title}
                    </p>
                    <p className={`text-2xl font-bold ${metric.color}`}>
                      {metric.value}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Dashboard Preview */}
        <div
          className={`bg-white rounded-2xl shadow-xl p-8 border fade-in-up ${
            isVisible ? "visible" : ""
          }`}
          style={{ animationDelay: "0.6s" }}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left side - Dashboard mockup */}
            <div className="flex-1 w-full">
              <div className="bg-gray-900 rounded-xl p-6 text-white">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold">Property Analytics Dashboard</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                
                {/* Mock chart area */}
                <div className="space-y-4">
                  <div className="bg-gray-800 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-gray-300">Revenue Trend</span>
                      <TrendingUp className="w-4 h-4 text-green-400" />
                    </div>
                    {/* Simple line chart mockup */}
                    <div className="flex items-end space-x-1 h-20">
                      {[40, 60, 55, 75, 80, 85, 90].map((height, i) => (
                        <div
                          key={i}
                          className="bg-green-400 rounded-t"
                          style={{ 
                            height: `${height}%`, 
                            width: '14%',
                            animation: `fadeInUp 0.5s ease-out ${i * 0.1}s both`
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-800 rounded-lg p-4">
                      <div className="text-sm text-gray-300 mb-2">Avg. Rent</div>
                      <div className="text-2xl font-bold">${metrics.avgRent}</div>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-4">
                      <div className="text-sm text-gray-300 mb-2">Portfolio ROI</div>
                      <div className="text-2xl font-bold text-green-400">15.2%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="flex-1 w-full lg:max-w-md">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    See Your Data Come to Life
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Get instant access to comprehensive analytics that track every aspect of your 
                    property portfolio. From revenue optimization to maintenance scheduling, 
                    our dashboard provides the insights you need to make data-driven decisions.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <BarChart3 className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Live Performance Metrics</h4>
                      <p className="text-sm text-gray-600">Real-time updates on occupancy, revenue, and maintenance</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <TrendingUp className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Predictive Analytics</h4>
                      <p className="text-sm text-gray-600">AI-powered forecasts for revenue and maintenance needs</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Building className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Portfolio Overview</h4>
                      <p className="text-sm text-gray-600">Comprehensive view of all properties and their performance</p>
                    </div>
                  </div>
                </div>

                <Button 
                  size="lg" 
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white group"
                  aria-label="Try dashboard demo"
                >
                  Try Dashboard Demo
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}