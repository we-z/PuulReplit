import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export function TrustedBySection() {
  const { ref, isVisible } = useIntersectionObserver();

  const capabilities = [
    { name: "Enterprise Security", icon: "🔒" },
    { name: "Multi-Tenant Architecture", icon: "🏗️" },
    { name: "Custom Integrations", icon: "🔗" },
    { name: "Advanced Analytics", icon: "📊" },
    { name: "Dedicated Support", icon: "🎯" },
    { name: "SLA Guarantees", icon: "⚡" },
  ];

  return (
    <section ref={ref} className="py-16 bg-gray-50" id="capabilities">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className={`text-2xl md:text-3xl font-bold text-gray-900 mb-4 fade-in-up ${
              isVisible ? "visible" : ""
            }`}
          >
            Enterprise Platform Capabilities
          </h2>
          <p
            className={`text-lg text-gray-600 max-w-2xl mx-auto fade-in-up ${
              isVisible ? "visible" : ""
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            Comprehensive enterprise features designed to manage and optimize large-scale property portfolios
          </p>
        </div>

        <div
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center fade-in-up ${
            isVisible ? "visible" : ""
          }`}
          style={{ animationDelay: "0.4s" }}
        >
          {capabilities.map((capability, index) => (
            <div
              key={capability.name}
              className="flex flex-col items-center justify-center w-full h-24 p-4 bg-white rounded-lg shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 hover:scale-105 border border-gray-100 group cursor-pointer relative overflow-hidden"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              {/* Background gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <span className="text-2xl mb-2 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 relative z-10">
                {capability.icon}
              </span>
              <span className="text-xs md:text-sm font-medium text-gray-700 text-center group-hover:text-gray-900 group-hover:font-semibold transition-all duration-300 relative z-10">
                {capability.name}
              </span>
              
              {/* Subtle glow effect */}
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r from-blue-400 to-purple-400 blur-xl"></div>
            </div>
          ))}
        </div>

        {/* Value Propositions */}
        <div
          className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 fade-in-up ${
            isVisible ? "visible" : ""
          }`}
          style={{ animationDelay: "0.6s" }}
        >
          <div className="text-center bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">AI-Powered</div>
            <div className="text-gray-600 font-medium">Intelligent Decision Making</div>
          </div>
          <div className="text-center bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">24/7</div>
            <div className="text-gray-600 font-medium">Continuous Monitoring</div>
          </div>
          <div className="text-center bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">Real-time</div>
            <div className="text-gray-600 font-medium">Data & Insights</div>
          </div>
        </div>
      </div>
    </section>
  );
}