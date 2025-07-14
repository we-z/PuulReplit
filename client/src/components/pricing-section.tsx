import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Star, Zap, Building2 } from "lucide-react";
import { Link } from "wouter";

export function PricingSection() {
  const { ref, isVisible } = useIntersectionObserver();

  const plans = [
    {
      name: "Starter",
      price: "Free",
      period: "Forever",
      description: "Perfect for small property managers getting started with AI",
      features: [
        "Up to 5 properties",
        "Basic maintenance tracking",
        "Email notifications",
        "Standard reporting",
        "Community support",
        "Mobile app access"
      ],
      buttonText: "Start Free",
      buttonVariant: "outline" as const,
      popular: false,
      icon: Building2,
      color: "from-gray-500 to-gray-700",
      href: "/api/login"
    },
    {
      name: "Professional",
      price: "$49",
      period: "per month",
      description: "Advanced AI features for growing property portfolios",
      features: [
        "Up to 50 properties",
        "AI predictive maintenance",
        "Dynamic pricing optimization",
        "Advanced analytics dashboard",
        "Priority support",
        "API access",
        "Custom integrations",
        "Tenant management",
        "Financial reporting"
      ],
      buttonText: "Start 14-Day Trial",
      buttonVariant: "default" as const,
      popular: true,
      icon: Zap,
      color: "from-blue-600 to-purple-600",
      href: "/subscribe"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "Contact us",
      description: "Comprehensive AI solution for large property management companies",
      features: [
        "Unlimited properties",
        "Full AI automation suite",
        "Custom ML models",
        "White-label solution",
        "Dedicated account manager",
        "24/7 premium support",
        "Custom integrations",
        "Advanced security",
        "On-premise deployment",
        "SLA guarantees"
      ],
      buttonText: "Contact Sales",
      buttonVariant: "outline" as const,
      popular: false,
      icon: Star,
      color: "from-purple-600 to-pink-600",
      href: "/api/login"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-white" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl md:text-5xl font-bold text-gray-900 mb-6 fade-in-up ${
              isVisible ? "visible" : ""
            }`}
          >
            Choose Your AI-Powered Plan
          </h2>
          <p
            className={`text-lg md:text-xl text-gray-600 max-w-3xl mx-auto fade-in-up ${
              isVisible ? "visible" : ""
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            Scale your property management with the right AI tools for your portfolio size
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <Card
                key={plan.name}
                className={`group relative overflow-hidden border-2 ${
                  plan.popular 
                    ? "border-blue-500 shadow-2xl scale-105" 
                    : "border-gray-200 hover:border-gray-300"
                } hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 bg-white cursor-pointer fade-in-up ${
                  isVisible ? "visible" : ""
                }`}
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}

                <CardContent className="p-8 relative">
                  {/* Background gradient effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Header */}
                  <div className="text-center mb-8 relative z-10">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {plan.description}
                    </p>
                    
                    {/* Pricing */}
                    <div className="mb-6">
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold text-gray-900 group-hover:scale-105 transition-transform duration-300">
                          {plan.price}
                        </span>
                        {plan.period !== "Forever" && plan.period !== "Contact us" && (
                          <span className="text-gray-600 ml-2">/{plan.period}</span>
                        )}
                      </div>
                      {plan.period === "Forever" || plan.period === "Contact us" ? (
                        <p className="text-gray-600 text-sm mt-1">{plan.period}</p>
                      ) : null}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8 relative z-10">
                    {plan.features.map((feature, i) => (
                      <div 
                        key={i} 
                        className="flex items-center space-x-3 group-hover:translate-x-1 transition-transform duration-300"
                        style={{ transitionDelay: `${i * 0.05}s` }}
                      >
                        <div className="flex-shrink-0">
                          <Check className="w-5 h-5 text-green-500 group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="relative z-10">
                    <Link href={plan.href}>
                      <Button
                        variant={plan.buttonVariant}
                        size="lg"
                        className={`w-full py-3 text-lg font-semibold transition-all duration-300 ${
                          plan.buttonVariant === "default"
                            ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white hover:scale-105 hover:-translate-y-1 hover:shadow-xl"
                            : "border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white hover:scale-105 hover:-translate-y-1"
                        } group relative overflow-hidden`}
                      >
                        <span className="relative z-10">{plan.buttonText}</span>
                        {plan.buttonVariant === "outline" && (
                          <div className="absolute inset-0 bg-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                        )}
                      </Button>
                    </Link>
                  </div>

                  {/* Floating particles effect */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400/30 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500"></div>
                  <div className="absolute bottom-8 left-4 w-1.5 h-1.5 bg-purple-400/40 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-700" style={{ animationDelay: '0.3s' }}></div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Information */}
        <div
          className={`text-center fade-in-up ${isVisible ? "visible" : ""}`}
          style={{ animationDelay: "0.6s" }}
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto border">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">14-Day Free Trial</h4>
                <p className="text-gray-600 text-sm">No credit card required for Professional plan trial</p>
              </div>
              
              <div className="text-center group">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Cancel Anytime</h4>
                <p className="text-gray-600 text-sm">No long-term contracts or cancellation fees</p>
              </div>
              
              <div className="text-center group">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Premium Support</h4>
                <p className="text-gray-600 text-sm">Expert assistance when you need it most</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}