import { useEffect } from "react";
import { NavHeader } from "@/components/nav-header";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { DashboardSection } from "@/components/dashboard-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function LandingPage() {
  // Add Chart.js to window for dashboard charts
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
      script.async = true;
      document.head.appendChild(script);
      
      return () => {
        if (document.head.contains(script)) {
          document.head.removeChild(script);
        }
      };
    }
  }, []);

  // SEO Meta tags
  useEffect(() => {
    document.title = "Puul - AI-Powered Property Management Platform";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", 
        "Enterprise AI property management platform with predictive maintenance, pricing optimization, and real-time analytics for property managers."
      );
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Enterprise AI property management platform with predictive maintenance, pricing optimization, and real-time analytics for property managers.";
      document.head.appendChild(meta);
    }

    // Add keywords meta tag
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute("content", 
        "AI property management, enterprise property management, predictive maintenance, pricing optimization, real estate analytics"
      );
    } else {
      const meta = document.createElement('meta');
      meta.name = "keywords";
      meta.content = "AI property management, enterprise property management, predictive maintenance, pricing optimization, real estate analytics";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden">
      <NavHeader />
      <main>
        <HeroSection />
        <FeaturesSection />
        <DashboardSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
