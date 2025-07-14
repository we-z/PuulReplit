import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export function TrustedBySection() {
  const { ref, isVisible } = useIntersectionObserver();

  const logos = [
    { name: "CBRE", logo: "CBRE" },
    { name: "JLL", logo: "JLL" },
    { name: "Cushman & Wakefield", logo: "C&W" },
    { name: "Colliers", logo: "COL" },
    { name: "Newmark", logo: "NMK" },
    { name: "Avison Young", logo: "AY" },
  ];

  return (
    <section ref={ref} className="py-16 bg-gray-50" id="trusted-by">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className={`text-2xl md:text-3xl font-bold text-gray-900 mb-4 fade-in-up ${
              isVisible ? "visible" : ""
            }`}
          >
            Trusted by Industry Leaders
          </h2>
          <p
            className={`text-lg text-gray-600 max-w-2xl mx-auto fade-in-up ${
              isVisible ? "visible" : ""
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            Over 500+ property management companies trust Puul to optimize their operations
          </p>
        </div>

        <div
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center fade-in-up ${
            isVisible ? "visible" : ""
          }`}
          style={{ animationDelay: "0.4s" }}
        >
          {logos.map((company, index) => (
            <div
              key={company.name}
              className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <span className="text-lg md:text-xl font-bold text-gray-700 text-center">
                {company.name}
              </span>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div
          className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 fade-in-up ${
            isVisible ? "visible" : ""
          }`}
          style={{ animationDelay: "0.6s" }}
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900 mb-2">500+</div>
            <div className="text-gray-600">Property Managers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900 mb-2">50K+</div>
            <div className="text-gray-600">Properties Managed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900 mb-2">$2.8B</div>
            <div className="text-gray-600">Assets Under Management</div>
          </div>
        </div>
      </div>
    </section>
  );
}