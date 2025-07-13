import { useEffect, useRef, useState } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

export function DashboardSection() {
  const { ref, isVisible } = useIntersectionObserver();
  const revenueChartRef = useRef<HTMLCanvasElement>(null);
  const occupancyChartRef = useRef<HTMLCanvasElement>(null);
  const revenueChartInstance = useRef<any>(null);
  const occupancyChartInstance = useRef<any>(null);
  
  // Simulated real-time metrics
  const [metrics, setMetrics] = useState({
    totalRevenue: 847200,
    occupancyRate: 96.7,
    activeProperties: 142,
    maintenanceRequests: 23,
  });

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        totalRevenue: prev.totalRevenue + (Math.random() * 10000 - 5000),
        occupancyRate: Math.max(90, Math.min(99, prev.occupancyRate + (Math.random() * 0.6 - 0.3))),
        activeProperties: 142,
        maintenanceRequests: Math.max(15, Math.min(30, prev.maintenanceRequests + (Math.random() * 4 - 2))),
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Initialize charts when component becomes visible
  useEffect(() => {
    if (!isVisible) return;

    // Destroy existing charts
    if (revenueChartInstance.current) {
      revenueChartInstance.current.destroy();
    }
    if (occupancyChartInstance.current) {
      occupancyChartInstance.current.destroy();
    }

    // Revenue Chart
    const revenueCtx = revenueChartRef.current?.getContext('2d');
    if (revenueCtx && window.Chart) {
      revenueChartInstance.current = new window.Chart(revenueCtx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [{
            label: 'Revenue',
            data: [720000, 756000, 798000, 825000, 847200, 862000],
            borderColor: '#000000',
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            tension: 0.4,
            fill: true
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false }
          },
          scales: {
            y: {
              beginAtZero: false,
              grid: { color: '#E5E7EB' }
            },
            x: {
              grid: { display: false }
            }
          }
        }
      });
    }

    // Occupancy Chart
    const occupancyCtx = occupancyChartRef.current?.getContext('2d');
    if (occupancyCtx && window.Chart) {
      occupancyChartInstance.current = new window.Chart(occupancyCtx, {
        type: 'doughnut',
        data: {
          labels: ['Studio', '1BR', '2BR', '3BR'],
          datasets: [{
            data: [94, 97, 98, 95],
            backgroundColor: ['#000000', '#374151', '#6B7280', '#E5E7EB'],
            borderWidth: 0
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { position: 'bottom' }
          }
        }
      });
    }

    // Cleanup function
    return () => {
      if (revenueChartInstance.current) {
        revenueChartInstance.current.destroy();
      }
      if (occupancyChartInstance.current) {
        occupancyChartInstance.current.destroy();
      }
    };
  }, [isVisible]);

  // Load Chart.js dynamically
  useEffect(() => {
    if (typeof window !== 'undefined' && !window.Chart) {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
      document.head.appendChild(script);
      return () => document.head.removeChild(script);
    }
  }, []);

  return (
    <section ref={ref} className="py-20 bg-gray-50" id="dashboard">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold text-black mb-6 fade-in-up ${
              isVisible ? "visible" : ""
            }`}
          >
            Real-Time Dashboard
          </h2>
          <p
            className={`text-xl text-gray-700 max-w-3xl mx-auto fade-in-up ${
              isVisible ? "visible" : ""
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            Monitor your entire portfolio from a single, intelligent dashboard
            powered by AI insights.
          </p>
        </div>

        {/* Dashboard Mock Interface */}
        <Card
          className={`bg-white rounded-3xl shadow-2xl hover-scale fade-in-up ${
            isVisible ? "visible" : ""
          }`}
          style={{ animationDelay: "0.4s" }}
        >
          <CardContent className="p-8">
            {/* Dashboard Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 pb-6 border-b border-gray-200">
              <div>
                <h3 className="text-2xl font-bold text-black mb-2">
                  Portfolio Overview
                </h3>
                <p className="text-gray-700">
                  Last updated: <span className="font-medium">2 minutes ago</span>
                </p>
              </div>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <Button variant="outline" size="sm">
                  Last 7 days
                </Button>
                <Button className="bg-black text-white" size="sm">
                  Last 30 days
                </Button>
              </div>
            </div>

            {/* Key Metrics Row */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <Card className="bg-gray-50 hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-gray-700 font-medium">Total Revenue</h4>
                    <span className="text-green-600 text-sm font-semibold">
                      +8.2%
                    </span>
                  </div>
                  <div className="text-3xl font-bold text-black pulse-animation">
                    ${Math.round(metrics.totalRevenue).toLocaleString()}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-50 hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-gray-700 font-medium">Occupancy Rate</h4>
                    <span className="text-green-600 text-sm font-semibold">
                      +2.1%
                    </span>
                  </div>
                  <div className="text-3xl font-bold text-black pulse-animation">
                    {metrics.occupancyRate.toFixed(1)}%
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-50 hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-gray-700 font-medium">Active Properties</h4>
                    <span className="text-gray-500 text-sm font-semibold">—</span>
                  </div>
                  <div className="text-3xl font-bold text-black">
                    {metrics.activeProperties}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-50 hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-gray-700 font-medium">
                      Maintenance Requests
                    </h4>
                    <span className="text-red-600 text-sm font-semibold">
                      -15%
                    </span>
                  </div>
                  <div className="text-3xl font-bold text-black">
                    {Math.round(metrics.maintenanceRequests)}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <Card className="bg-gray-50">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-black mb-4">
                    Revenue Trends
                  </h4>
                  <div className="h-48">
                    <canvas ref={revenueChartRef} />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-50">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-black mb-4">
                    Occupancy by Property Type
                  </h4>
                  <div className="h-48">
                    <canvas ref={occupancyChartRef} />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* AI Insights Panel */}
            <Card className="bg-gradient-to-r from-black to-gray-900 text-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white">AI Insights</h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="bg-white/10 backdrop-blur border-0">
                    <CardContent className="p-4">
                      <div className="text-sm text-gray-300 mb-1">
                        Predicted Maintenance
                      </div>
                      <div className="font-semibold text-white">
                        Unit 4B HVAC service needed in 12 days
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-white/10 backdrop-blur border-0">
                    <CardContent className="p-4">
                      <div className="text-sm text-gray-300 mb-1">
                        Pricing Opportunity
                      </div>
                      <div className="font-semibold text-white">
                        Increase rates by 8% in Building C
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-white/10 backdrop-blur border-0">
                    <CardContent className="p-4">
                      <div className="text-sm text-gray-300 mb-1">Market Alert</div>
                      <div className="font-semibold text-white">
                        High demand period starting next week
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
